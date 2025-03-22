---
title: Number.MIN_VALUE
slug: Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
page-type: javascript-static-data-property
browser-compat: javascript.builtins.Number.MIN_VALUE
---

{{JSRef}}

The **`Number.MIN_VALUE`** static data property represents the smallest positive numeric value representable in JavaScript.

{{InteractiveExample("JavaScript Demo: Number.MIN_VALUE")}}

```js interactive-example
function divide(x, y) {
  if (x / y < Number.MIN_VALUE) {
    return "Process as 0";
  }
  return x / y;
}

console.log(divide(5e-324, 1));
// Expected output: 5e-324

console.log(divide(5e-324, 2));
// Expected output: "Process as 0"
```

## Value

2<sup>-1074</sup>, or `5E-324`.

{{js_property_attributes(0, 0, 0)}}

## Description

`Number.MIN_VALUE` is the smallest positive number (not the most negative number) that can be represented within float precision — in other words, the number closest to 0. The ECMAScript spec doesn't define a precise value that implementations are required to support — instead the spec says, _"must be the smallest non-zero positive value that can actually be represented by the implementation"_. This is because small IEEE-754 floating point numbers are [denormalized](https://en.wikipedia.org/wiki/Subnormal_number), but implementations are not required to support this representation, in which case `Number.MIN_VALUE` may be larger.

In practice, its precise value in mainstream engines like V8 (used by Chrome, Edge, Node.js), SpiderMonkey (used by Firefox), and JavaScriptCore (used by Safari) is 2<sup>-1074</sup>, or `5E-324`.

Because `MIN_VALUE` is a static property of {{jsxref("Number")}}, you always use it as `Number.MIN_VALUE`, rather than as a property of a number value.

## Examples

### Using MIN_VALUE

The following code divides two numeric values. If the result is greater than or equal to `MIN_VALUE`, the `func1` function is called; otherwise, the `func2` function is called.

```js
if (num1 / num2 >= Number.MIN_VALUE) {
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

- {{jsxref("Number.MAX_VALUE")}}
