---
title: "SVGAElement: relList property"
short-title: relList
slug: Web/API/SVGAElement/relList
page-type: web-api-instance-property
browser-compat: api.SVGAElement.relList
---

{{APIRef("SVG")}}

The **`relList`** property of the {{domxref("SVGAElement")}} returns an {{domxref("SVGAnimatedString")}} object reflecting the value of the `relList` attribute. It specifies the space-separated list of link types indicating the relationship between the target or resource represented by the {{SVGElement("a")}} element and the current document.

## Value

An {{domxref("SVGAnimatedString")}} indicating the value of the `relList` attribute.

## Examples

```js
// Select an SVG <a> element
const svgLink = document.querySelector("a");

svgLink.relList.forEach((relEntry) => {
  console.log(relEntry);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{ SVGAttr("relList") }}
- {{domxref("SVGAElement.rel")}}
- {{domxref("HTMLAnchorElement.relList")}}
- {{domxref("HTMLLinkElement.relList")}}
