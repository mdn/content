---
title: "StylePropertyMap: clear() method"
short-title: clear()
slug: Web/API/StylePropertyMap/clear
page-type: web-api-instance-method
browser-compat: api.StylePropertyMap.clear
---

{{APIRef("CSS Typed Object Model API")}}

The **`clear()`** method of the {{domxref("StylePropertyMap")}}
interface removes all declarations in the `StylePropertyMap`.

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example removes all styles within the elements [style attribute](/en-US/docs/Web/HTML/Global_attributes/style).

```js
// get the button element
const buttonEl = document.querySelector(".example");

// remove all styles from the style attribute
buttonEl.attributeStyleMap.clear();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
