import test from "node:test";
import assert from "node:assert/strict";
import { createInquiry, validateInquiry } from "../src/lib/inquiry.js";
const brief = {
  name: "A Test",
  email: "visitor@example.com",
  service: "Travel & hospitality",
  budget: "NPR 75,000–110,000",
  timeline: "Flexible",
  message: "We need a travel website for our tours & stays in Nepal.",
};
test("valid inquiry keeps service context and encodes special characters safely", () => {
  assert.equal(validateInquiry(brief), "");
  const result = createInquiry(brief),
    url = new URL(result.href);
  assert.equal(url.pathname, "indrajeetmahara07@gmail.com");
  assert.equal(
    url.searchParams.get("subject"),
    "Website inquiry: Travel & hospitality",
  );
  assert.match(url.searchParams.get("body"), /tours & stays/);
  assert.match(url.searchParams.get("body"), /visitor@example.com/);
  assert.equal(url.searchParams.size, 2);
});
test("rejects whitespace, invalid addresses, and briefs outside bounds", () => {
  for (const patch of [
    { name: "  " },
    { email: "bad-address" },
    { message: "   " },
    { message: "short" },
    { message: "a".repeat(1801) },
  ])
    assert.notEqual(validateInquiry({ ...brief, ...patch }), "");
});
test("line breaks cannot introduce mail headers", () => {
  const result = createInquiry({
    ...brief,
    service: "Website\r\nBcc: someone@example.com",
  });
  const url = new URL(result.href);
  assert.equal(url.searchParams.size, 2);
  assert.equal(url.searchParams.has("bcc"), false);
  assert.equal(url.searchParams.get("subject").includes("\n"), false);
});
test("unicode inquiry preserves user text in draft", () => {
  const result = createInquiry({
    ...brief,
    name: "परीक्षण",
    message: "नमस्ते, मेरो व्यवसायको लागि वेबसाइट चाहिन्छ।",
  });
  assert.match(new URL(result.href).searchParams.get("body"), /परीक्षण/);
});
