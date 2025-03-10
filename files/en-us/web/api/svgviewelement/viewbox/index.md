---
title: "SVGViewElement: viewBox property"
short-title: viewBox
slug: Web/API/SVGViewElement/viewBox
page-type: web-api-instance-property
browser-compat: api.SVGViewElement.viewBox
---

{{APIRef("SVG")}}

The **`viewBox`** read-only property of the {{domxref("SVGViewElement")}} interface reflects the {{SVGAttr("viewBox")}} attribute of the given {{SVGElement("view")}} element. It represents the `x`, `y`, `width`, and `height` values defining the area to be used for the `view`'s `viewBox`.

## Value

An {{domxref("SVGAnimatedRect")}} object.

## Example

Given the following SVG, we can use the `viewBox` property to retrieve the dimensions of the `viewBox` for a `view` element:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
  <view id="view1" viewBox="0 0 50 50"></view>
  <circle cx="100" cy="100" r="80" fill="blue" />
</svg>
```

We can access the `viewBox` attribute:

```js
const view = document.querySelector("view");

console.log(view.viewBox.baseVal); // output: DOMRect {x: 0, y: 0, width: 50, height: 50}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("viewBox")}}
