import test from "node:test";
import assert from "node:assert/strict";
import { getPage, normalizePath, pages, site } from "../src/data/site.js";
import { headFor, schemaFor } from "../src/lib/seo.js";
test("route normalization preserves page identity and uses a real 404 record", () => {
  assert.equal(normalizePath("/services?utm_source=test"), "/services/");
  assert.equal(getPage("/services/business-websites").kind, "service");
  assert.equal(getPage("/not-a-page").noindex, true);
  assert.equal(getPage("/404.html").kind, "notfound");
});
test("every page has unique metadata and canonical; noindex limited to 404", () => {
  assert.equal(new Set(pages.map((p) => p.title)).size, pages.length);
  assert.equal(new Set(pages.map((p) => p.description)).size, pages.length);
  for (const p of pages) {
    assert.ok(headFor(p).includes(`href="${site.origin + p.path}"`));
    assert.equal(Boolean(p.noindex), p.kind === "notfound");
  }
});
test("structured data links service provider and hierarchical breadcrumbs", () => {
  const p = getPage("/services/business-websites/");
  const graph = schemaFor(p)["@graph"];
  const person = graph.find((x) => x["@type"] === "Person");
  assert.equal(
    graph.find((x) => x["@type"] === "Service").provider["@id"],
    person["@id"],
  );
  assert.deepEqual(
    graph
      .find((x) => x["@type"] === "BreadcrumbList")
      .itemListElement.map((x) => x.name),
    ["Home", "Services", "Business websites"],
  );
  assert.ok(
    !graph.some((x) =>
      ["Review", "AggregateRating", "LocalBusiness"].includes(x["@type"]),
    ),
  );
});
