---
title: CSSKeywordValue.value
slug: Web/API/CSSKeywordValue/value
page-type: web-api-instance-property
browser-compat: api.CSSKeywordValue.value
---

{{APIRef("CSS Typed Object Model API")}}

The **`value`** property of the
{{domxref("CSSKeywordValue")}} interface returns or sets the value of the
`CSSKeywordValue`.

## Value

A string.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the `value` property is an empty {{jsxref('String')}} when being set.

## Examples

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
