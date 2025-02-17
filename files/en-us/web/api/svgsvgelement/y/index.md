---
title: "SVGSVGElement: y property"
short-title: y
slug: Web/API/SVGSVGElement/y
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.y
---

{{APIRef("SVG")}}

The **`y`** read-only property of the {{domxref("SVGSVGElement")}} interface describes the vertical coordinate of the position of that SVG as an {{domxref("SVGAnimatedLength")}}. When an {{SVGElement("svg")}} is nested within another `<svg>`, the vertical coordinate is a length in the user coordinate system that is the given distance from the origin of the user coordinate system along the y-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("svg")}} element's {{SVGAttr("y")}} geometric attribute. The default value is `0`. The `y` attribute has no effect on outermost `<svg>` elements; only on nested ones. The CSS {{cssxref("y")}} property takes precedence over the `<svg>` element's `y` attribute, so the value may not reflect the element's appearance.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

```js
const svg = document.querySelector("svg");
const topPosition = svg.y;
console.dir(leftPosition.baseVal.value); // the `y` value
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGSVGElement.x")}}
- {{domxref("SVGAnimatedLength.baseVal")}}
