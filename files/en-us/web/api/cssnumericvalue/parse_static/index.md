---
title: "CSSNumericValue: parse() static method"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
page-type: web-api-static-method
browser-compat: api.CSSNumericValue.parse_static
---

{{APIRef("CSS Typed Object Model API")}}

The **`parse()`** static method of the {{domxref("CSSNumericValue")}} interface creates a `CSSNumericValue` from a string of CSS, such as `"42px"` or `"calc(50% + 10px)"`.

> [!NOTE]
> This method is only available in {{domxref("Window")}} contexts, not in {{domxref("Worker")}} or {{domxref("Worklet")}} contexts.
> All other methods of the `CSSNumericValue` interface are available in workers and worklets.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameters

- `cssText`
  - : A string containing a single CSS number, percentage, dimension (a number with a unit, such as `42px`), or math function, such as `calc()`, `min()`, `max()`, or `clamp()`.

### Return value

A {{domxref('CSSNumericValue')}}.
This is a {{domxref("CSSUnitValue")}} for a number, percentage, or dimension, or one of the {{domxref("CSSMathValue")}} subtypes for a math function.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : Thrown if `cssText` isn't a single number, percentage, dimension, or math function (for example, `"auto"`, `"10px 20px"`, or `"var(--size)"`), if it uses an unknown unit (such as `"10foo"`), or if it contains an invalid calculation (such as `"calc(1px + 1s)"`).

## Description

The string is parsed in the same way as a value in a stylesheet.
Spaces and comments around the value are ignored, and unit names aren't case-sensitive, so `" 10PX "` gives the same result as `"10px"`.
A number without a unit, such as `"7"`, gives a `CSSUnitValue` whose unit is `"number"`.

Math functions are also simplified in the same way as in a stylesheet, so terms that can be combined are combined.
For example, `"calc(1px + 2px)"` gives a {{domxref("CSSMathSum")}} with a single term, `3px`.
Terms that can't be combined until the page is laid out, such as `50%` and `10px`, are kept separate.

## Examples

### Parsing single values

Numbers, percentages, and dimensions are parsed into a `CSSUnitValue`:

```js
const length = CSSNumericValue.parse("42.0px");
console.log(length.constructor.name); // "CSSUnitValue"
console.log(length.value); // 42
console.log(length.unit); // "px"

const percentage = CSSNumericValue.parse("50%");
console.log(percentage.unit); // "percent"
```

### Parsing a calculation

A math function is parsed into one of the `CSSMathValue` subtypes.
Terms that can be combined are combined, so `calc(1px + 2px)` is simplified to a sum with a single term:

```js
const sum = CSSNumericValue.parse("calc(50% + 10px)");
console.log(sum.constructor.name); // "CSSMathSum"
console.log(sum.toString()); // "calc(50% + 10px)"

const simplified = CSSNumericValue.parse("calc(1px + 2px)");
console.log(simplified.toString()); // "calc(3px)"
```

### Handling a string that isn't a numeric value

```js
try {
  CSSNumericValue.parse("auto");
} catch (e) {
  console.log(e.name); // "SyntaxError"
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("CSSStyleValue.parse_static", "CSSStyleValue.parse()")}}
- [Numeric factory functions](/en-US/docs/Web/API/CSS/factory_functions_static)
- [Using the CSS Typed OM](/en-US/docs/Web/API/CSS_Typed_OM_API/Guide)
