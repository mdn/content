---
title: "SVGAElement: host property"
short-title: host
slug: Web/API/SVGAElement/host
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.host
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`host`** property of the {{domxref("SVGAElement")}} interface represents the element's host.
It is the {{domxref("SVGAElement.hostname", "hostname")}} of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, followed by a `":"` and the {{domxref("SVGAElement.port", "port")}} if the URL has one. If the URL does not have a hostname, this property contains an empty string, `""`.

This property can be set to change the host of the URL. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.host")}} for more information.

## Value

A string.

## Examples

### Getting the host from an SVG link

Given the following SVG:

```html live-sample___svgaelement-host
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-host
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-host
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

```js hidden live-sample___svgaelement-host
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the host of the link, and see how the port is included only when it's not the default one for the scheme:

```js live-sample___svgaelement-host
const link = document.getElementById("link");

log(`host: "${link.host}"`); // host: "example.com"

link.setAttribute("href", "https://example.com:443/");
log(`host: "${link.host}"`); // host: "example.com"

link.setAttribute("href", "https://example.com:4097/");
log(`host: "${link.host}"`); // host: "example.com:4097"
```

{{EmbedLiveSample("svgaelement-host", "100%", "160")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.host")}}
