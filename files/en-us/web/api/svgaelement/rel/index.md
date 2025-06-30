---
title: "SVGAElement: rel property"
short-title: rel
slug: Web/API/SVGAElement/rel
page-type: web-api-instance-property
browser-compat: api.SVGAElement.rel
---

{{APIRef("SVG")}}

The **`rel`** property of the {{domxref("SVGAElement")}} returns an {{domxref("SVGAnimatedString")}} object reflecting the value of the `rel` attribute. It specifies the space-separated list of link types, the [`<list-of-Link-Types>`](/en-US/docs/Web/HTML/Reference/Attributes/rel), indicating the relationship between the target or resource represented by the {{SVGElement("a")}} element and the current document.

## Value

An {{domxref("SVGAnimatedString")}} indicating the value of the `rel` attribute.

## Examples

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");

// Access the rel property
console.log(svgLink.rel.baseVal);
console.log(svgLink.rel.animVal);

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ SVGAttr("rel") }}
- {{domxref("SVGAElement.relList")}}
- {{domxref("HTMLAnchorElement.rel")}}
- {{domxref("HTMLLinkElement.rel")}}
```
