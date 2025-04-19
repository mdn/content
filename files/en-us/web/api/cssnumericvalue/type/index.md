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

A `CSSNumericType` dictionary, which contains the following properties:

- `length`
- `angle`
- `time`
- `frequency`
- `resolution`
- `flex`
- `percent`
- `percentHint`

For each property except `percentHint`, the value is an integer representing the power of that unit. For example, a numeric value of `calc(1px * 1em)` will return `{ length: 2 }`.

The `percentHint` property is a string that indicates the type of value that the percent is applied to. The string value is the same as the type properties: `"length"`, `"angle"`, `"time"`, `"frequency"`, `"resolution"`, `"flex"`, or `"percent"`. It indicates that the type actually holds a percentage, but that percentage will eventually resolve to the hinted base type, and so has been replaced with it in the type.

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
