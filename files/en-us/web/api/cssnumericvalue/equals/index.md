---
title: CSSNumericValue.equals()
slug: Web/API/CSSNumericValue/equals
tags:
  - API
  - CSS Typed Object Model API
  - CSSNumericValue
  - Experimental
  - Houdini
  - Method
  - Reference
  - equals()
browser-compat: api.CSSNumericValue.equals
---
{{draft}}{{APIRef("CSS Typed OM")}}{{SeeCompatTable}}

The **`equals()`** method of the
{{domxref("CSSNumericValue")}} interface returns a boolean indicating whether the passed
value are strictly equal. To return a value of `true`, all passed values must
be of the same type and value and must be in the same order. This allows structural
equality to be tested quickly.

## Syntax

```js
var boolean = CSSNumericValue.equals(number);
```

### Parameters

- number
  - : Either a {{jsxref('Number')}} or a {{domxref('CSSNumericValue')}}.

### Return value

A {{jsxref('Boolean')}}.

### Exceptions

None.

## Examples

As stated earlier, all passed values must be of the same type and value and must be in
the same order. Some of the following examples illustrate what happens when they are
not.

```js
let cssMathSum = new CSSMathSum(CSS.px(1), CSS.px(2));
let matchingCssMathSum = new CSSMathSum(CSS.px(1), CSS.px(2));
// Prints true
console.log(cssMathSum.equals(matchingCssMathSum));

let otherCssMathSum = CSSMathSum(CSS.px(2), CSS.px(1));
// Prints false
console.log(cssMathSum.equals(otherCssMathSum));

// Also prints false
console.log(CSS.cm("1").equal(CSS.in("0.393701")));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
