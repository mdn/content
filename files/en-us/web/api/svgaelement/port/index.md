---
title: "SVGAElement: port property"
short-title: port
slug: Web/API/SVGAElement/port
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.port
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`port`** property of the {{domxref("SVGAElement")}} interface represents the port number of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}.
If the port is the default for the protocol (`80` for `ws:` and `http:`, `443` for `wss:` and `https:`, and `21` for `ftp:`), this property contains an empty string, `""`.

This property can be set to change the port of the URL. If the URL has no {{domxref("SVGAElement.host", "host")}} or its scheme is `file:`, then setting this property has no effect. Invalid port numbers are silently ignored. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.port")}} for more information.

## Value

A string.

## Examples

### Getting the port from an SVG link

Given the following SVG:

```html live-sample___svgaelement-port
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com:443/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-port
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-port
svg {
  width: 200px;
  height: 30px;
}
svg a text {
  fill: blue;
  text-decoration: underline;
}
#log {
  padding: 0.5rem;
  border: 1px solid black;
}
```

```js hidden live-sample___svgaelement-port
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the port of the link, which is empty for the default port of the scheme:

```js live-sample___svgaelement-port
const link = document.getElementById("link");

log(`port: "${link.port}"`); // port: ""

link.setAttribute("href", "https://example.com:8888/");
log(`port: "${link.port}"`); // port: "8888"
```

{{EmbedLiveSample("svgaelement-port", "100%", "140")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.port")}}
