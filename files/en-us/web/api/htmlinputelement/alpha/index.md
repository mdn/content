---
title: "HTMLInputElement: alpha property"
short-title: alpha
slug: Web/API/HTMLInputElement/alpha
page-type: web-api-instance-property
browser-compat: api.HTMLInputElement.alpha
---

{{ APIRef("HTML DOM") }}

The **`HTMLInputElement.alpha`** property indicate whether the color's alpha component can be manipulated by the end user and does not have to be fully opaque.

## Value

A boolean value.

## Examples

```html
<input id="color-picker" type="color" alpha />
```

```js
let fileInput = document.getElementById("color-picker");

if (fileInput.alpha) {
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
