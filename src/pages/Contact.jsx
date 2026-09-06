import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, Copy, Check } from "lucide-react";
import { site, services } from "../data/site.js";
import { PageIntro } from "../components/Shared";
import { createInquiry, validateInquiry } from "../lib/inquiry.js";
export default function Contact() {
  const [draft, setDraft] = useState(null),
    [status, setStatus] = useState(""),
    [error, setError] = useState("");
  const output = useRef(null),
    formRef = useRef(null);
  useEffect(() => {
    const service = new URLSearchParams(location.search).get("service");
    if (service && formRef.current) {
      const select = formRef.current.elements.service;
      if ([...select.options].some((o) => o.value === service))
        select.value = service;
    }
  }, []);
  useEffect(() => {
    if (draft) output.current?.focus();
  }, [draft]);
  function prepare(e) {
    e.preventDefault();
    const values = Object.fromEntries(new FormData(e.currentTarget));
    const message = validateInquiry(values);
    setError(message);
    if (message) return;
    setDraft(createInquiry(values));
    setStatus("");
    window.dispatchEvent(
      new CustomEvent("portfolio:conversion", {
        detail: {
          action: "inquiry_prepared",
          page: "/contact/",
          service: values.service,
        },
      }),
    );
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(
        `To: ${site.email}\nSubject: ${draft.subject}\n\n${draft.body}`,
      );
      setStatus(
        "Copied. Paste this into your email and send it when you’re ready.",
      );
    } catch {
      setStatus(
        "Copy is unavailable in this browser. Select and copy the text below, then email it to me.",
      );
    }
  }
  return (
    <>
      <PageIntro
        eyebrow="LET’S TALK ABOUT YOUR WEBSITE"
        title="Tell me what you want your website to do."
      >
        A short brief is enough to start. Share the goal, the scope and what
        matters to you.
      </PageIntro>
      <section className="contact-grid section-top">
        <div className="contact-aside">
          <h2>
            Good projects start
            <br />
            with a conversation.
          </h2>
          <p>
            You’ll speak directly with me. We’ll clarify what you need, whether
            it’s a good fit and what a realistic next step looks like.
          </p>
          <div className="contact-methods">
            <a href={`mailto:${site.email}`}>
              <Mail />
              {site.email}
            </a>
            <a href={`tel:${site.phone}`}>
              <Phone />
              +977 9809410215
            </a>
            <span>
              <MapPin />
              {site.location}
            </span>
          </div>
          <div className="contact-note">
            <p className="eyebrow">WHAT HAPPENS NEXT</p>
            <ol>
              <li>I review your goals and ask any follow-up questions.</li>
              <li>We agree a useful scope, estimate and timeline.</li>
              <li>You decide whether you want to move forward.</li>
            </ol>
          </div>
        </div>
        <div className="form-panel">
          <h2>Your project brief</h2>
          <p className="form-help">
            This prepares an email draft. Nothing is sent until you send it from
            your email app.
          </p>
          <form
            ref={formRef}
            onSubmit={prepare}
            onChange={() => {
              if (draft) setDraft(null);
              if (error) setError("");
            }}
          >
            <div className="form-row">
              <label htmlFor="name">
                Your name <span aria-hidden="true">*</span>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </label>
              <label htmlFor="email">
                Email address <span aria-hidden="true">*</span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </label>
            </div>
            <label htmlFor="service">
              What do you need?
              <select id="service" name="service" defaultValue="Not sure yet">
                <option>Not sure yet</option>
                {services.map((s) => (
                  <option key={s.slug}>{s.label}</option>
                ))}
                <option>Travel & hospitality</option>
              </select>
            </label>
            <div className="form-row">
              <label htmlFor="budget">
                Budget range
                <select id="budget" name="budget">
                  <option>Not decided yet</option>
                  <option>NPR 35,000–55,000</option>
                  <option>NPR 55,000–75,000</option>
                  <option>NPR 75,000–110,000</option>
                  <option>NPR 110,000–200,000</option>
                  <option>NPR 200,000+</option>
                </select>
              </label>
              <label htmlFor="timeline">
                Target timeline
                <select id="timeline" name="timeline">
                  <option>Flexible / let’s discuss</option>
                  <option>Within 1 month</option>
                  <option>1–3 months</option>
                  <option>More than 3 months</option>
                </select>
              </label>
            </div>
            <label htmlFor="message">
              What should the website help you achieve?{" "}
              <span aria-hidden="true">*</span>
              <textarea
                id="message"
                name="message"
                rows={5}
                minLength={20}
                maxLength={1800}
                aria-describedby="message-hint"
                placeholder="Tell me about your business, the main goal and any essential features."
                required
              />
            </label>
            <p id="message-hint" className="form-help">
              20–1,800 characters. Include your current website if you have one.
            </p>
            {error && (
              <p className="form-error" role="alert">
                {error}
              </p>
            )}
            <button className="button" type="submit">
              Prepare my inquiry <ArrowUpRight size={18} />
            </button>
            <p className="form-help">
              Fields marked * are required. Details stay in this page until you
              choose to copy or email them.{" "}
              <a href="/privacy/">Privacy details</a>.
            </p>
            <noscript>
              <p>
                This brief builder needs JavaScript. You can email{" "}
                <a href={`mailto:${site.email}`}>{site.email}</a> or call
                directly.
              </p>
            </noscript>
          </form>
          {draft && (
            <section
              className="draft-panel"
              ref={output}
              tabIndex={-1}
              aria-labelledby="draft-heading"
            >
              <h3 id="draft-heading">Your inquiry is ready to review.</h3>
              <p>
                It has not been sent. Open it in your email app, or copy the
                text into your preferred email service.
              </p>
              <label htmlFor="draft">
                Email draft
                <textarea
                  id="draft"
                  readOnly
                  value={`Subject: ${draft.subject}\n\n${draft.body}`}
                  rows={9}
                />
              </label>
              <div className="button-row">
                <a href={draft.href} className="button">
                  Open email draft <Mail size={18} />
                </a>
                <button
                  type="button"
                  className="button button-secondary"
                  onClick={copy}
                >
                  {status ? <Check size={18} /> : <Copy size={18} />}Copy
                  inquiry
                </button>
              </div>
              <p className="form-help" role="status">
                {status}
              </p>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
