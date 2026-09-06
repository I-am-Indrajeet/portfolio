import { renderToString } from "react-dom/server";
import App from "./App";
export { pages, site } from "./data/site.js";
export { headFor } from "./lib/seo.js";
export function render(pathname) {
  return renderToString(<App pathname={pathname} />);
}
