// Inject server-rendered HTML of the home page into dist/index.html.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);
const html = render();
const file = resolve("dist/index.html");
const page = readFileSync(file, "utf8");
if (!page.includes('<div id="root"></div>')) throw new Error("root placeholder not found");
writeFileSync(file, page.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
rmSync(resolve("dist-ssr"), { recursive: true, force: true });
console.log(`Prerendered home page: ${Math.round(html.length / 1024)} KB of HTML`);
