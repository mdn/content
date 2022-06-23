---
title: CSSNumericValue.toSum()
slug: Web/API/CSSNumericValue/toSum
page-type: web-api-instance-method
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - toSum()
browser-compat: api.CSSNumericValue.toSum
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`toSum()`** method of the
{{domxref("CSSNumericValue")}} interface converts the object's value to a
{{domxref("CSSMathSum")}} object to values of the specified unit.

## Syntax

```js
toSum(units)
```

### Parameters

- `units`
  - : The units to convert to.

### Return value

A {{domxref('CSSNumericValue')}}.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString() // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString() // => "calc(1000.39px + 4%)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
