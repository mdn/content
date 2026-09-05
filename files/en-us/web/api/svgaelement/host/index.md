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

The **`host`** property of the {{domxref("SVGAElement")}} interface is a string containing the {{domxref("SVGAElement.hostname", "hostname")}} of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, followed by a `":"` and the {{domxref("SVGAElement.port", "port")}} if the URL has one. If the URL does not have a hostname, this property contains an empty string, `""`.

This property can be set to change the host of the URL. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.host")}} for more information.

## Value

A string.

## Examples

### Getting the host from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.host); // "example.com"

link.setAttribute("href", "https://example.com:443/");
console.log(link.host); // "example.com"
// The port number is not included because 443 is the scheme's default port

link.setAttribute("href", "https://example.com:4097/");
console.log(link.host); // "example.com:4097"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.host")}}
