---
title: "SVGViewElement: preserveAspectRatio property"
short-title: preserveAspectRatio
slug: Web/API/SVGViewElement/preserveAspectRatio
page-type: web-api-instance-property
browser-compat: api.SVGViewElement.preserveAspectRatio
---

{{APIRef("SVG")}}

The **`preserveAspectRatio`** read-only property of the {{domxref("SVGViewElement")}} interface reflects the {{SVGAttr("preserveAspectRatio")}} attribute of the given {{SVGElement("view")}} element. It defines how the content within the `view` should be scaled to fit its viewport while preserving its aspect ratio.

## Value

An {{domxref("SVGAnimatedPreserveAspectRatio")}} object.

## Example

Given the following SVG, we can use the `preserveAspectRatio` property to retrieve the scaling behavior for a `view` element:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <view id="view1" preserveAspectRatio="xMidYMid meet"></view>
  <circle cx="100" cy="100" r="80" fill="blue" />
</svg>
```

We can access the `preserveAspectRatio` attribute:

```js
const view = document.querySelector("view");

console.log(view.preserveAspectRatio.baseVal); // output: SVGPreserveAspectRatio {align: 1, meetOrSlice: 1}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("preserveAspectRatio")}}
