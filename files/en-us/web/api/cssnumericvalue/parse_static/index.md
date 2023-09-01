---
title: "CSSNumericValue: parse() static method"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
page-type: web-api-static-method
browser-compat: api.CSSNumericValue.parse_static
---

{{APIRef("CSS Typed OM")}}

The **`parse()`** static method of the
{{domxref("CSSNumericValue")}} interface converts a value string into an object whose
members are value and the units.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameters

- `cssText`
  - : a string containing numeric and unit parts.

### Return value

A {{domxref('CSSNumericValue')}}.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : TBD

## Examples

The following returns a {{domxref('CSSUnitValue')}} object with a `unit`
property equal to `"px"` and a `value` property equal to
`42`.

```js
let numValue = CSSNumericValue.parse("42.0px");
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
