---
title: "StylePropertyMap: set() method"
short-title: set()
slug: Web/API/StylePropertyMap/set
page-type: web-api-instance-method
browser-compat: api.StylePropertyMap.set
---

{{APIRef("CSS Typed Object Model API")}}

The **`set()`** method of the {{domxref("StylePropertyMap")}} interface changes the CSS declaration using the given property.

## Syntax

```js-nolint
set(property)
set(property, value1)
set(property, value1, value2)
set(property, value1, value2, /* …, */ valueN)
```

### Parameters

- `property`
  - : An identifier indicating the stylistic feature (e.g., font, width, background color) to change.
- `value1`, …, `valueN`
  - : The value(s) the given property should have.

### Return value

None ({{jsxref("undefined")}}).

## Examples

### Basic usage

This example sets the specified value for the {{cssxref('padding-top')}} property within the element's [style attribute](/en-US/docs/Web/HTML/Reference/Global_attributes/style).

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
