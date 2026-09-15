---
title: "SVGAElement: hostname property"
short-title: hostname
slug: Web/API/SVGAElement/hostname
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SVGAElement.hostname
---

{{APIRef("SVG")}}{{SeeCompatTable}}

The **`hostname`** property of the {{domxref("SVGAElement")}} interface represents the element's hostname.
It is either the {{glossary("domain name")}} or {{glossary("IP address")}} of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. Unlike {{domxref("SVGAElement.host", "host")}}, it never includes the port. If the URL does not have a hostname, this property contains an empty string, `""`. IP addresses are normalized, such as stripping leading zeros, and domain names are converted to [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name).

This property can be set to change the hostname of the URL. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.hostname")}} for more information.

## Value

A string.

## Examples

### Getting the hostname from an SVG link

Given the following SVG:

```html live-sample___svgaelement-hostname
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com:4097/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```html hidden live-sample___svgaelement-hostname
<pre id="log"></pre>
```

```css hidden live-sample___svgaelement-hostname
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

```js hidden live-sample___svgaelement-hostname
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
}
```

We can read the hostname of the link, without the port:

```js live-sample___svgaelement-hostname
const link = document.getElementById("link");

log(`hostname: "${link.hostname}"`); // hostname: "example.com"
```

{{EmbedLiveSample("svgaelement-hostname", "100%", "120")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- {{domxref("HTMLAnchorElement.hostname")}}
