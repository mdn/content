---
title: "CSSNumericValue: toSum() method"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.toSum
---

{{APIRef("CSS Typed OM")}}

The **`toSum()`** method of the
{{domxref("CSSNumericValue")}} interface converts the object's value to a
{{domxref("CSSMathSum")}} object to values of the specified unit.

## Syntax

```js-nolint
toSum(units)
```

### Parameters

- `units`
  - : The units to convert to.

### Return value

A {{domxref('CSSMathSum')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString(); // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString(); // => "calc(1000.39px + 4%)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
