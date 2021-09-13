---
title: CSSNumericValue.add()
slug: Web/API/CSSNumericValue/add
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - add()
browser-compat: api.CSSNumericValue.add
---
{{draft}}{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`add()`** method of the
{{domxref("CSSNumericValue")}} interface adds a supplied number to the
`CSSNumericValue`.

## Syntax

```js
var cssMathSum = CSSNumericValue.add(double | CSSNumericValue);
```

### Parameters

- number
  - : either a {{jsxref('Number')}} or a {{domxref('CSSNumericValue')}}.

### Return value

A {{domxref('CSSMathSum')}}

### Exceptions

- TypeError
  - : Indicates that an invalid type was passed to the method.

## Examples

```js
let mathSum = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
// Prints "calc(23px + 4% + 3cm + 9in)"
console.log(mathSum.toString());
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
