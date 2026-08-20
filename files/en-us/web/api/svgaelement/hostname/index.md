---
title: "SVGAElement: hostname property"
short-title: hostname
slug: Web/API/SVGAElement/hostname
page-type: web-api-instance-property
browser-compat: api.SVGAElement.hostname
---

{{APIRef("SVG")}}

The **`hostname`** property of the {{domxref("SVGAElement")}} interface is a string containing either the {{glossary("domain name")}} or {{glossary("IP address")}} of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}. Unlike {{domxref("SVGAElement.host", "host")}}, it never includes the port. If the URL does not have a hostname, this property contains an empty string, `""`. IP addresses are normalized, such as stripping leading zeros, and domain names are converted to [IDN](https://en.wikipedia.org/wiki/Internationalized_domain_name).

This property can be set to change the hostname of the URL. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.hostname")}} for more information.

## Value

A string.

## Examples

### Getting the hostname from an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com:4097/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.hostname); // "example.com"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.hostname")}}
