---
title: "HTMLInputElement: alpha property"
short-title: alpha
slug: Web/API/HTMLInputElement/alpha
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.HTMLInputElement.alpha
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

The **`alpha`** property of the {{domxref("HTMLInputElement")}} interface reflects the {{htmlelement("input")}} element's [`alpha`](/en-US/docs/Web/HTML/Reference/Elements/input/color#alpha) attribute, which indicates whether the CSS color's alpha component can be manipulated by the end user and does not have to be fully opaque. It is only relevant to [color](/en-US/docs/Web/HTML/Reference/Elements/input/color) controls.

## Value

A boolean value.

## Examples

```html
<input id="color-picker" type="color" alpha />
```

```js
const colorInput = document.getElementById("color-picker");

if (colorInput.alpha) {
  // Color values contain an alpha component
} else {
  // We have fully opaque color values
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`<input type="color">`](/en-US/docs/Web/HTML/Reference/Elements/input/color)
