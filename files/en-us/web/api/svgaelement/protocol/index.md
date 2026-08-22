---
title: "SVGAElement: protocol property"
short-title: protocol
slug: Web/API/SVGAElement/protocol
page-type: web-api-instance-property
browser-compat: api.SVGAElement.protocol
---

{{APIRef("SVG")}}

The **`protocol`** property of the {{domxref("SVGAElement")}} interface is a string containing the protocol or scheme of the SVG {{SVGElement("a")}} element's {{SVGAttr("href")}}, including the final `":"`.

This property can be set to change the protocol of the URL. A `":"` is appended to the provided string if not provided. The provided scheme has to be compatible with the rest of the URL to be considered valid. Setting it also rewrites the element's {{SVGAttr("href")}} attribute as a complete, absolute URL.

See {{domxref("URL.protocol")}} for more information.

## Value

A string.

## Examples

### Getting the protocol of an SVG link

```html
<svg viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
  <a id="link" href="https://example.com/">
    <text x="0" y="20">Example</text>
  </a>
</svg>
```

```js
const link = document.getElementById("link");
console.log(link.protocol); // "https:"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- SVG {{SVGElement("a")}} element
- The {{domxref("SVGAElement")}} interface it belongs to
- {{domxref("HTMLAnchorElement.protocol")}}
