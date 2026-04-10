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
new {{domxref("CSSMathClamp")}} object representing a CSS {{CSSXref("clamp", "clamp()")}} function.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameters

- `lower`
  - : A {{domxref("CSSNumericValue")}} object – either a number or {{domxref("CSSUnitValue")}} – representing the minimum value.
- `value`
  - : A {{domxref("CSSNumericValue")}} object – either a number or {{domxref("CSSUnitValue")}} – representing the preferred value.
- `upper`
  - : A {{domxref("CSSNumericValue")}} object – either a number or {{domxref("CSSUnitValue")}} – representing the maximum value.

### Exceptions

- [`TypeError`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Thrown if there is a _failure_ when adding the three arguments.

## Examples

To do

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
