---
title: "StylePropertyMap: append() method"
short-title: append()
slug: Web/API/StylePropertyMap/append
page-type: web-api-instance-method
browser-compat: api.StylePropertyMap.append
---

{{APIRef("CSS Typed Object Model API")}}

The **`append()`** method of the
{{domxref("StylePropertyMap")}} interface adds the passed CSS value to the
`StylePropertyMap` with the given property.

## Syntax

```js-nolint
append(property, value)
```

### Parameters

- `property`
  - : An identifier indicating the stylistic feature (e.g. font, width, background
    color) to add.
- `value`
  - : The value the given property should have.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example shows an extra background image value being added to the
{{cssxref('background-image')}} property of the element, using
{{domxref('HTMLElement.attributeStyleMap')}}.

```js
// get the button element
const buttonEl = document.querySelector("button");

// append another value to the background-image property set on the attribute
buttonEl.attributeStyleMap.append(
  "background-image",
  "linear-gradient(180deg, blue, black)",
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
