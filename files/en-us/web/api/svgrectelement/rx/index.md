---
title: "SVGRectElement: rx property"
short-title: rx
slug: Web/API/SVGRectElement/rx
page-type: web-api-instance-property
browser-compat: api.SVGRectElement.rx
---

{{APIRef("SVG")}}

The **`rx`** read-only property of the {{domxref("SVGRectElement")}} interface describes the horizontal curve of the corners of an SVG rectangle as a {{domxref("SVGAnimatedLength")}}. The length is in user coordinate system units along the x-axis. Its syntax is the same as that for [`<length>`](/en-US/docs/Web/SVG/Content_type#length).

It reflects the {{SVGElement("rect")}} element's {{SVGAttr("rx")}} presentational attribute. The CSS {{cssxref("rx")}} property takes precedence over the SVG `rx` presentational attribute, so the value may not reflect the actual size of the rounded corners. The default value is `0`, which draws a rectangle with square corners.

## Value

An {{domxref("SVGAnimatedLength")}}.

## Example

Given the following SVG:

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="60" height="60" rx="15" ry="15" />
  <rect x="60" y="0" width="60" height="60" rx="15%" ry="15" />
</svg>
```

We can access the computed values of the `rx` attributes:

```js
const rectangles = document.querySelectorAll("rect");
const rxSize0 = rectangle[0].rx;
const rxSize1 = rectangle[1].rx;
console.log(rxSize0.baseVal.value); // output: 15 (the value of `rx`)
console.log(rxSize1.baseVal.value); // output: 45 (15% of 300)
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SVGRectElement.ry")}}
