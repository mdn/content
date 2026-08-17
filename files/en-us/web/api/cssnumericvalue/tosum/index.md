---
title: "CSSNumericValue: toSum() method"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.toSum
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`toSum()`** method of the {{domxref("CSSNumericValue")}} interface converts the object's value to a {{domxref("CSSMathSum")}} of {{domxref("CSSUnitValue")}}s using only the specified units, if possible.
If called with no units, it simplifies the value into a minimal sum of `CSSUnitValue`s instead.

## Syntax

```js-nolint
toSum()
toSum(unit1)
toSum(unit1, unit2)
toSum(unit1, unit2, /* …, */ unitN)
```

### Parameters

- `unit1`, …, `unitN` {{optional_inline}}
  - : The units to convert to.

### Return value

A {{domxref('CSSMathSum')}}.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if any of `unit1`, …, `unitN` is not a valid unit identifier.
- {{jsxref("TypeError")}}
  - : Thrown if:
    - The value can't be expressed as a sum of `CSSUnitValue`s — for example, because one of its terms has a compound unit (such as `px * s`) that can't be represented by a single `CSSUnitValue`.
    - One or more units were passed to the method, and the value includes a term whose unit isn't compatible with any of them.

## Examples

### Basic usage

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString(); // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString(); // => "calc(1000.39px + 4%)"
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
