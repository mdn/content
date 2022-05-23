---
title: CSSNumericValue.sub()
slug: Web/API/CSSNumericValue/sub
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - sub()
browser-compat: api.CSSNumericValue.sub
---
{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`sub()`** method of the
{{domxref("CSSNumericValue")}} interface subtracts a supplied number from the
`CSSNumericValue`.

## Syntax

```js
sub(number)
```

### Parameters

- `number`
  - : Either a {{jsxref('Number')}} or a {{domxref('CSSMathSum')}}.

### Return value

A {{domxref('CSSMathSum')}}

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

```js
let mathSum = CSS.px("23").sum(CSS.percent("4")).sum(CSS.cm("3")).sum(CSS.in("9"));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

And/or include a list of links to useful code samples that live elsewhere:

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
