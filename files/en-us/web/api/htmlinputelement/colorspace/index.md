---
title: "HTMLInputElement: colorSpace property"
short-title: colorSpace
slug: Web/API/HTMLInputElement/colorSpace
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.colorSpace
---

{{ApiRef("HTML DOM")}}

The **`colorSpace`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{HTMLElement("input")}} element's [`colorspace`](/en-US/docs/Web/HTML/Reference/Elements/input/color#colorspace) attribute. Relevant to the `color` input type only, it indicates whether the {{glossary("color space")}} of the serialized CSS color is `sRGB` (the default) or `display-p3`.

## Value

A string representing the element's `colorspace` value. Possible values:

- `"limited-srgb"`: The SRGB color space and limited to 8-bits per component, e.g., `#123456` or `color(srgb 0 1 0 / 0.5)`.
- `"display-p3"`: The Display P3 color space, e.g., `color(display-p3 1.84 -0.19 0.72 / 0.6)`

## Examples

### Getting and setting color spaces

```html
<input id="color-picker" type="color" colorspace="display-p3" alpha />
```

```js
let fileInput = document.getElementById("color-picker");
console.log(inputElement.colorSpace); // "display-p3"
inputElement.colorSpace = "limited-srgb"; // convert to srgb
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<input type="color">`](/en-US/docs/Web/HTML/Reference/Elements/input/color)
