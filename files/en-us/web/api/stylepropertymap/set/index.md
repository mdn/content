---
title: "StylePropertyMap: set() method"
short-title: set()
slug: Web/API/StylePropertyMap/set
page-type: web-api-instance-method
browser-compat: api.StylePropertyMap.set
---

{{APIRef("CSS Typed Object Model API")}}

The **`set()`** method of the {{domxref("StylePropertyMap")}}
interface changes the CSS declaration with the given property.

## Syntax

```js-nolint
set(property, value)
```

### Parameters

- `property`
  - : An identifier indicating the stylistic feature (e.g. font, width, background
    color) to change.
- `value`
  - : The value the given property should have.

### Return value

None ({{jsxref("undefined")}}).

## Examples

This example sets the {{cssxref('padding-top')}} property, with the given value, within
the element's [style attribute](/en-US/docs/Web/HTML/Global_attributes/style).

```js
// get the button element
const buttonEl = document.querySelector("button");

// set padding-top on button style attribute
buttonEl.attributeStyleMap.set("padding-top", CSS.px(10));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
