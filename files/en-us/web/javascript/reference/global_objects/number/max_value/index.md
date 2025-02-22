---
title: Number.MAX_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Number.MAX_VALUE
---

{{JSRef}}

The **`Number.MAX_VALUE`** static data property represents the maximum numeric value representable in JavaScript.

{{InteractiveExample("JavaScript Demo: Number.MAX_VALUE")}}

```js interactive-example
function multiply(x, y) {
  if (x * y > Number.MAX_VALUE) {
    return "Process as Infinity";
  }
  return x * y;
}

console.log(multiply(1.7976931348623157e308, 1));
// Expected output: 1.7976931348623157e+308

console.log(multiply(1.7976931348623157e308, 2));
// Expected output: "Process as Infinity"
```

## Value

2<sup>1024</sup> - 2<sup>971</sup>, or approximately `1.7976931348623157E+308`.

{{js_property_attributes(0, 0, 0)}}

## Description

Values larger than `MAX_VALUE` are represented as {{jsxref("Infinity")}} and will lose their actual value.

Because `MAX_VALUE` is a static property of {{jsxref("Number")}}, you always use it as `Number.MAX_VALUE`, rather than as a property of a number value.

## Examples

### Using MAX_VALUE

The following code multiplies two numeric values. If the result is less than or equal to `MAX_VALUE`, the `func1` function is called; otherwise, the `func2` function is called.

```js
if (num1 * num2 <= Number.MAX_VALUE) {
  func1();
} else {
  func2();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.MIN_VALUE")}}
- {{jsxref("Number")}}
