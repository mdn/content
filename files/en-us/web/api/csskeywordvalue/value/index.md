---
title: "CSSKeywordValue: value property"
short-title: value
slug: Web/API/CSSKeywordValue/value
page-type: web-api-instance-property
browser-compat: api.CSSKeywordValue.value
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`value`** property of the {{domxref("CSSKeywordValue")}} interface represents the keyword as a string.

## Value

A string.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `value` property is set to an empty {{jsxref('String')}}.

## Examples

### Basic usage

The following example resets the CSS {{cssxref('display')}} property to its defaults.

```js
let indicator = document.getElementById("indicator");
indicator.attributeStyleMap.set("display", new CSSKeywordValue("initial"));
indicator.attributeStyleMap.get("display").value; // 'initial'
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
