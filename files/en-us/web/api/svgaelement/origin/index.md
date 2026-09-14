---
title: "SVGAElement: origin property"
short-title: origin
slug: Web/API/SVGAElement/origin
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.origin
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`origin`** read-only property of the {{domxref("SVGAElement")}} interface represents the {{glossary("origin")}} of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}: usually its scheme, domain, and port.

The exact structure varies depending on the type of URL:

- For URLs using the `ftp:`, `http:`, `https:`, `ws:`, and `wss:` schemes, the {{domxref("SVGAElement.protocol", "protocol")}} followed by `//`, followed by the {{domxref("SVGAElement.host", "host")}}. Same as `host`, the {{domxref("SVGAElement.port", "port")}} is only included if it's not the default for the protocol.
- For URLs using the `file:` scheme, the value is browser dependent.
- For URLs using the `blob:` scheme, the origin of the URL following `blob:`, but only if that URL uses the `http:`, `https:`, or `file:` scheme. For example, `blob:https://mozilla.org` will have `https://mozilla.org`.

For all other cases, the string `"null"` is returned.

See {{domxref("URL.origin")}} for more information.

## Value

A string.

## Examples

### Getting the origin of an SVG link

Given the following SVG:

```html live-sample___svgaelement-origin
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-origin
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-origin
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

```js hidden live-sample___svgaelement-origin
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the origin of the link:

```js live-sample___svgaelement-origin
const link = document.getElementById("link");

log(`origin: "${link.origin}"`); // origin: "https://example.com"
```

{{EmbedLiveSample("svgaelement-origin", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.origin")}}
