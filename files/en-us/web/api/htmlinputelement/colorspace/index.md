---
title: "HTMLInputElement: colorSpace property"
short-title: colorSpace
slug: Web/API/HTMLInputElement/colorSpace
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInputElement.colorSpace
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`colorSpace`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{HTMLElement("input")}} element's [`colorspace`](/en-US/docs/Web/HTML/Reference/Elements/input/color#colorspace) attribute, which indicates whether the {{glossary("color space")}} of the serialized CSS color is `sRGB` (the default) or `display-p3`. It is only relevant to [color](/en-US/docs/Web/HTML/Reference/Elements/input/color) controls.

## Value

A string containing the value of the [`colorspace`](/en-US/docs/Web/HTML/Reference/Elements/input/color#colorspace) attribute.

## Examples

### Getting and setting color spaces

```html
<input id="color-picker" type="color" colorspace="display-p3" alpha />
```

```js
const colorInput = document.getElementById("color-picker");
console.log(colorInput.colorSpace); // "display-p3"
colorInput.colorSpace = "limited-srgb"; // convert to srgb
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<input type="color">`](/en-US/docs/Web/HTML/Reference/Elements/input/color)
