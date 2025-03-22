---
title: "SVGSVGElement: viewBox property"
short-title: viewBox
slug: Web/API/SVGSVGElement/viewBox
page-type: web-api-instance-property
browser-compat: api.SVGSVGElement.viewBox
---

{{APIRef("SVG")}}

The **`viewBox`** read-only property of the {{domxref("SVGSVGElement")}} interface reflects the {{SVGElement("svg")}} element's {{SVGAttr("viewBox")}} attribute as an {{domxref("SVGAnimatedRect")}}.

The property describes the `<svg>` element's `<viewBox>` attribute, which is used to defined the x-coordinate, y-coordinate, width, and height of an `<svg>` element. The {{domxref("SVGAnimatedRect.baseVal")}} and {{domxref("SVGAnimatedRect.animVal")}} properties are both {{domxref("SVGRect")}} objects, or `null` if the `viewBox` is not defined. These objects' components my differ from the {{domxref("SVGSVGElement.x")}}, {{domxref("SVGSVGElement.y")}}, {{domxref("SVGSVGElement.width")}} and {{domxref("SVGSVGElement.height")}} properties, as the {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, and {{SVGAttr("height")}} attributes take precedence over the `viewBox` attribute.

For non-nested SVG elements, the values of the CSS {{cssxref("x")}}, {{cssxref("y")}}, {{cssxref("width")}}, and {{cssxref("height")}} properties take precedence over any element attributes, so the values defined by the `viewBox` may not be reflected in the element's appearance.

## Value

An {{domxref("SVGAnimatedRect")}}.

## Example

Give the following SVG opening tag:

```html
<svg viewbox="-12 -18 200 300" x="5" y="5" height="400" width="600"></svg>
```

We can retrieve the viewBox values, but they differ from the {{domxref("SVGSVGElement.x", "x")}}, {{domxref("SVGSVGElement.y", "y")}}, {{domxref("SVGSVGElement.width", "width")}}, and {{domxref("SVGSVGElement.height", "height")}} properties:

```js
const svg = document.querySelector("svg");
const vBox = svg.viewBox;

// The SVGSVGElement viewBox property
console.dir(vBox); // SVGAnimatedRect { baseVal: SVGRect, animVal: SVGRect }
​console.log(vBox.baseVal.x); // -12
​console.log(vBox.baseVal.y); // -18
​console.log(vBox.baseVal.width); // 200
​console.log(vBox.baseVal.height); // 300

// Other SVGSVGElement properties
​console.log(svg.x); // 5
​console.log(svg.y); // 5
​console.log(svg.width); // 400
​console.log(svg.height); // 600
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGAnimatedRect.baseVal")}}
- {{domxref("SVGAnimatedRect.animVal")}}
- {{SVGAttr("preserveAspectRatio")}}
