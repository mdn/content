---
title: "CSSNumericValue: type() method"
short-title: type()
slug: Web/API/CSSNumericValue/type
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.type
---

{{APIRef("CSS Typed OM")}}

The **`type()`** method of the
{{domxref("CSSNumericValue")}} interface returns the type of
`CSSNumericValue`, one of `angle`, `flex`,
`frequency`, `length`, `resolution`,
`percent`, `percentHint`, or `time`.

## Syntax

```js-nolint
type()
```

### Parameters

None.

### Return value

A {{domxref('CSSNumericType')}} object.

### Exceptions

None.

## Examples

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Returns an object with the structure: {length: 1, percentHint: "length"}
let cssNumericType = mathSum.type();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
