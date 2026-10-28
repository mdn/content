---
title: "SVGAElement: protocol property"
short-title: protocol
slug: Web/API/SVGAElement/protocol
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.protocol
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`protocol`** property of the {{domxref("SVGAElement")}} interface represents the protocol or scheme of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, including the final `":"`.

This property can be set to change the protocol of the URL. A `":"` is appended to the provided string if not provided. The provided scheme has to be compatible with the rest of the URL to be considered valid. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.protocol")}} for more information.

## Value

A string.

## Examples

### Getting the protocol of an SVG link

Given the following SVG:

```html live-sample___svgaelement-protocol
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-protocol
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-protocol
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

```js hidden live-sample___svgaelement-protocol
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the protocol of the link, including the final `":"`:

```js live-sample___svgaelement-protocol
const link = document.getElementById("link");

log(`protocol: "${link.protocol}"`); // protocol: "https:"
```

{{EmbedLiveSample("svgaelement-protocol", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.protocol")}}
