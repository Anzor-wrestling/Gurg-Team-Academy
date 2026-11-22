import { renderToString } from "react-dom/server";
import Index from "./pages/Index";

/** Renders the home page to static HTML at build time, so search engines see the text without running JS. */
export function render(): string {
  return renderToString(<Index />);
}
