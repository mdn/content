---
title: "StylePropertyMap: append() method"
short-title: append()
slug: Web/API/StylePropertyMap/append
page-type: web-api-instance-method
browser-compat: api.StylePropertyMap.append
---

{{APIRef("CSS Typed Object Model API")}}

The **`append()`** method of the {{domxref("StylePropertyMap")}} interface adds one or more values to the end of a list-valued CSS property's value list.

A list-valued CSS property is one whose value is a comma-separated list of terms, such as {{cssxref("background-image")}} or {{cssxref("animation")}}.

## Syntax

```js-nolint
append(property)
append(property, value1)
append(property, value1, value2)
append(property, value1, value2, /* …, */ valueN)
```

### Parameters

- `property`
  - : An identifier indicating the stylistic feature (e.g., font, width, background color) to add.
- `value1`, …, `valueN`
  - : One or more values to add to the end of `property`'s value list, in the order given.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if:
    - `property` is not a valid CSS list-valued property.
    - Any of `value1`, …, `valueN` is already associated with a different property (for example, a value read from one property's entry in a `StylePropertyMap`, then passed to `append()` for another property).
    - Any of `value1`, …, `valueN` is a {{domxref("CSSUnparsedValue")}} or {{domxref("CSSVariableReferenceValue")}} object.
    - `property`'s current value contains a {{cssxref("var")}} reference.

## Examples

### Basic usage

This example shows an extra background image value being added to the {{cssxref('background-image')}} property of the element, using {{domxref('HTMLElement.attributeStyleMap')}}.

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

## See also

- {{domxref("StylePropertyMap.set()")}}
- {{domxref("StylePropertyMap.delete()")}}
- {{domxref("StylePropertyMap.clear()")}}
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/en-US/docs/Web/API/CSS_Typed_OM_API)
