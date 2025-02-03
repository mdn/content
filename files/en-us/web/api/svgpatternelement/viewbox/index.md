---
title: "SVGPatternElement: viewBox property"
short-title: viewBox
slug: Web/API/SVGPatternElement/viewBox
page-type: web-api-instance-property
browser-compat: api.SVGPatternElement.viewBox
---

{{APIRef("SVG")}}

The **`viewBox`** read-only property of the {{domxref("SVGPatternElement")}} interface reflects the {{SVGAttr("viewBox")}} attribute of the given element. It represents the `x`, `y`, `width`, and `height` values defining the area to be used for the pattern's `viewBox`.

## Value

An {{domxref("SVGAnimatedRect")}} object.

## Example

Given the following SVG, we can use the `viewBox` property to retrieve the dimensions of the `viewBox` for the pattern element:

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="pattern1" width="10" height="10" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="25" fill="blue" />
    </pattern>
  </defs>
  <rect x="0" y="0" width="100" height="100" fill="url(#pattern1)" />
</svg>
```

We can access the `viewBox` attribute:

```js
const pattern = document.querySelector("pattern");

console.log(pattern.viewBox.baseVal); // output: DOMRect {x: 0, y: 0, width: 50, height: 50}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{SVGAttr("viewBox")}}
