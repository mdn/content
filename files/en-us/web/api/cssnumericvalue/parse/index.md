---
title: CSSNumericValue.parse()
slug: Web/API/CSSNumericValue/parse
page-type: web-api-static-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - parse()
browser-compat: api.CSSNumericValue.parse
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`parse()`** method of the
{{domxref("CSSNumericValue")}} interface converts a value string into an object whose
members are value and the units.

## Syntax

```js
parse(cssText)
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
