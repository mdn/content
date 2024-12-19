---
title: "SVGSVGElement: x property"
short-title: x
slug: Web/API/SVGSVGElement/x
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.x
---

{{APIRef("SVG")}}

The **`x`** read-only property of the {{domxref("SVGSVGElement")}} interface describes the horizontal coordinate of the position of that SVG as an {{domxref("SVGAnimatedLength")}}. When an {{SVGElement("svg")}} is nested within another `<svg>`, the horizontal coordinate is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the x-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("svg")}} element's {{SVGAttr("x")}} geometric attribute. The default value is `0`. The `x` attribute has no effect on outermost `<svg>` elements; only one nested ones. The CSS {{cssxref("x")}} property takes precedence over the `<svg>` element's `x` attribute, so the value may not reflect the element's appearance.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const svg = document.querySelector("svg");
const leftPosition = svg.x;
console.dir(leftPosition.baseVal.value); // the `x` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.y")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
