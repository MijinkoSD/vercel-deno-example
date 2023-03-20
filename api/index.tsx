/// <reference no-default-lib="true" />
/// <reference lib="es2022" />
/// <reference lib="dom" />
/** @jsx h */

import { h } from "https://esm.sh/preact@10.13.1";
import { renderToString } from "https://esm.sh/preact-render-to-string@5.2.6";

export default (req: Request) => {
  const html = (
    <html>
      <head>
        <title>vercel-deno サンプル</title>
        <meta charSet="utf-8"></meta>
      </head>
      <body>
        <ul>
          <li>
            <a href="hello.ts">hello world</a>
          </li>
          <li>
            <a href="index2.html">index2</a>
          </li>
        </ul>
      </body>
    </html>
  );
  const htmlString = "<!DOCTYPE html>" + renderToString(html);
  return new Response(htmlString, { headers: { "content-type": "text/html" } });
};