---
title: "CSSNumericValue: equals() method"
short-title: equals()
slug: Web/API/CSSNumericValue/equals
page-type: web-api-instance-method
browser-compat: api.CSSNumericValue.equals
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

The **`equals()`** method of the {{domxref("CSSNumericValue")}} interface returns `true` if every value passed to it is the same as the `CSSNumericValue`, and `false` otherwise.

The method compares how the values are written, not what they compute to. Single values, such as those represented by {{domxref("CSSUnitValue")}}, are the same when they have the same {{domxref("CSSUnitValue.value", "value")}} and {{domxref("CSSUnitValue.unit", "unit")}}. Units aren't converted, so `CSS.in(1)` isn't the same as `CSS.cm(2.54)`, even though both are one inch long. Calculations, such as sums represented by {{domxref("CSSMathSum")}}, are the same when they are the same kind of calculation and contain the same values in the same order. So `calc(1px + 2px)` isn't the same as `calc(2px + 1px)`, or as `3px`.

## Syntax

```js-nolint
equals()
equals(number1)
equals(number1, number2)
equals(number1, number2, /* …, */ numberN)
```

### Parameters

- `number1`, …, `numberN` {{optional_inline}}
  - : Either a number or a {{domxref('CSSNumericValue')}}. A number is compared as a value without a unit, like one created with [`CSS.number()`](/en-US/docs/Web/API/CSS/factory_functions_static).

### Return value

`true` if every value passed is the same as the `CSSNumericValue`, and `false` otherwise. If no values are passed, the method returns `true`.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if an invalid type was passed to the method.

## Examples

### Basic usage

Values with the same number and unit are the same, and so are sums of the same values in the same order:

```js
console.log(CSS.px(10).equals(CSS.px(10))); // true

const sum = new CSSMathSum(CSS.px(1), CSS.px(2));
console.log(sum.equals(new CSSMathSum(CSS.px(1), CSS.px(2)))); // true
```

Changing the order of the values in a sum, or writing the same length in a different unit, makes the values different:

```js
console.log(sum.equals(new CSSMathSum(CSS.px(2), CSS.px(1)))); // false
console.log(CSS.in(1).equals(CSS.cm(2.54))); // false
```

### Comparing several values

When several values are passed, the method returns `true` only if each of them is the same as the `CSSNumericValue`. A number is compared as a value without a unit:

```js
console.log(CSS.number(5).equals(5, CSS.number(5))); // true
console.log(CSS.px(10).equals(CSS.px(10), CSS.px(11))); // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
