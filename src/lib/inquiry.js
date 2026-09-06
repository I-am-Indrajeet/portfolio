import { site } from "../data/site.js";
export function validateInquiry(values) {
  if (!values.name?.trim() || values.name.trim().length > 100)
    return "Please enter your name (up to 100 characters).";
  if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "") ||
    values.email.length > 254
  )
    return "Please enter a valid email address.";
  if (
    !values.message ||
    values.message.trim().length < 20 ||
    values.message.length > 1800
  )
    return "Please describe your project in 20–1,800 characters.";
  return "";
}
export function createInquiry(values) {
  const oneLine = (value) =>
    String(value || "")
      .replace(/[\r\n]+/g, " ")
      .trim();
  const subject = `Website inquiry: ${oneLine(values.service)}`;
  const body = `Hi Indrajeet,\n\n${values.message.trim()}\n\nName: ${oneLine(values.name)}\nEmail: ${oneLine(values.email)}\nService: ${oneLine(values.service)}\nBudget: ${oneLine(values.budget)}\nTimeline: ${oneLine(values.timeline)}\n\nThank you!`;
  return {
    subject,
    body,
    href: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
