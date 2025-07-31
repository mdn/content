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

A string; the value of the [`colorspace`](/en-US/docs/Web/HTML/Reference/Elements/input/color#colorspace) attribute.

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
