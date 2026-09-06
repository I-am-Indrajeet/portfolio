import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
const root = document.getElementById("root");
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
// An optional analytics adapter can subscribe to these intent-only events.
// No visitor names, email addresses, message text or query strings are included.
document.addEventListener("click", (event) => {
  const link = event.target.closest?.("a");
  if (!link) return;
  const href = link.getAttribute("href") || "";
  const action = href.startsWith("mailto:")
    ? "email_intent"
    : href.startsWith("tel:")
      ? "call_intent"
      : href.startsWith("/contact/")
        ? "contact_cta"
        : null;
  if (action)
    window.dispatchEvent(
      new CustomEvent("portfolio:conversion", {
        detail: { action, page: window.location.pathname },
      }),
    );
});
