---
title: "CSSMathClamp: CSSMathClamp() constructor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.CSSMathClamp.CSSMathClamp
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

The **`CSSMathClamp()`** constructor creates a
new {{domxref("CSSMathClamp")}} object which represents the CSS {{CSSXref("clamp', 'clamp()")}} function.

## Syntax

```js-nolint
new CSSMathClamp(args)
```

### Parameters

- `args`
  - : A list of three numbers or {{domxref("CSSNumericValue")}} objects, representing the lower, preferred, and upper values.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Thrown if there is a _failure_ when adding all of the values in args.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
