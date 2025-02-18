---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
page-type: javascript-global-property
browser-compat: javascript.builtins.NaN
---

{{jsSidebar("Objects")}}

The **`NaN`** global property is a value representing Not-A-Number.

{{InteractiveExample("JavaScript Demo: Standard built-in objects - NaN")}}

```js interactive-example
function sanitize(x) {
  if (isNaN(x)) {
    return NaN;
  }
  return x;
}

console.log(sanitize("1"));
// Expected output: "1"

console.log(sanitize("NotANumber"));
// Expected output: NaN
```

## Value

The same number value as {{jsxref("Number.NaN")}}.

{{js_property_attributes(0, 0, 0)}}

## Description

`NaN` is a property of the _global object_. In other words, it is a variable in global scope.

In modern browsers, `NaN` is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.

There are five different types of operations that return `NaN`:

- Failed number conversion (e.g. explicit ones like `parseInt("blabla")`, `Number(undefined)`, or implicit ones like `Math.abs(undefined)`)
- Math operation where the result is not a real number (e.g. `Math.sqrt(-1)`)
- Indeterminate form (e.g. `0 * Infinity`, `1 ** Infinity`, `Infinity / Infinity`, `Infinity - Infinity`)
- A method or expression whose operand is or gets coerced to `NaN` (e.g. `7 ** NaN`, `7 * "blabla"`) — this means `NaN` is contagious
- Other cases where an invalid value is to be represented as a number (e.g. an invalid [Date](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) `new Date("blabla").getTime()`, `"".charCodeAt(1)`)

`NaN` and its behaviors are not invented by JavaScript. Its semantics in floating point arithmetic (including that `NaN !== NaN`) are specified by [IEEE 754](https://en.wikipedia.org/wiki/Double_precision_floating-point_format). `NaN`'s behaviors include:

- If `NaN` is involved in a mathematical operation (but not [bitwise operations](/en-US/docs/Web/JavaScript/Reference/Operators#bitwise_shift_operators)), the result is usually also `NaN`. (See [counter-example](#silently_escaping_nan) below.)
- When `NaN` is one of the operands of any relational comparison (`>`, `<`, `>=`, `<=`), the result is always `false`.
- `NaN` compares unequal (via [`==`](/en-US/docs/Web/JavaScript/Reference/Operators/Equality), [`!=`](/en-US/docs/Web/JavaScript/Reference/Operators/Inequality), [`===`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality), and [`!==`](/en-US/docs/Web/JavaScript/Reference/Operators/Strict_inequality)) to any other value — including to another `NaN` value.

`NaN` is also one of the [falsy](/en-US/docs/Glossary/Falsy) values in JavaScript.

## Examples

### Testing against NaN

To tell if a value is `NaN`, use {{jsxref("Number.isNaN()")}} or {{jsxref("isNaN()")}} to most clearly determine whether a value is `NaN` — or, since `NaN` is the only value that compares unequal to itself, you can perform a self-comparison like `x !== x`.

```js
NaN === NaN; // false
Number.NaN === NaN; // false
isNaN(NaN); // true
isNaN(Number.NaN); // true
Number.isNaN(NaN); // true

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1); // false
valueIsNaN(NaN); // true
valueIsNaN(Number.NaN); // true
```

However, do note the difference between `isNaN()` and `Number.isNaN()`: the former will return `true` if the value is currently `NaN`, or if it is going to be `NaN` after it is coerced to a number, while the latter will return `true` only if the value is currently `NaN`:

```js
isNaN("hello world"); // true
Number.isNaN("hello world"); // false
```

For the same reason, using a BigInt value will throw an error with `isNaN()` and not with `Number.isNaN()`:

```js
isNaN(1n); // TypeError: Conversion from 'BigInt' to 'number' is not allowed.
Number.isNaN(1n); // false
```

Additionally, some array methods cannot find `NaN`, while others can. Namely, the index-finding ones ({{jsxref("Array/indexOf", "indexOf()")}}, {{jsxref("Array/lastIndexOf", "lastIndexOf()")}}) cannot find `NaN`, while the value-finding ones ({{jsxref("Array/includes", "includes()")}}) can:

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// Methods accepting a properly defined predicate can always find NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

For more information about `NaN` and its comparison, see [Equality comparison and sameness](/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness).

### Observably distinct NaN values

It's possible to produce two floating point numbers with different binary representations but are both `NaN`, because in [IEEE 754 encoding](https://en.wikipedia.org/wiki/NaN#Floating_point), any floating point number with exponent `0x7ff` and a non-zero mantissa is `NaN`. In JavaScript, you can do bit-level manipulation using [typed arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays).

```js
const f2b = (x) => new Uint8Array(new Float64Array([x]).buffer);
const b2f = (x) => new Float64Array(x.buffer)[0];
// Get a byte representation of NaN
const n = f2b(NaN);
const m = f2b(NaN);
// Change the sign bit, which doesn't matter for NaN
n[7] += 2 ** 7;
// n[0] += 2**7; for big endian processors
const nan2 = b2f(n);
console.log(nan2); // NaN
console.log(Object.is(nan2, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan2)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 255]
// Change the first bit, which is the least significant bit of the mantissa and doesn't matter for NaN
m[0] = 1;
// m[7] = 1; for big endian processors
const nan3 = b2f(m);
console.log(nan3); // NaN
console.log(Object.is(nan3, NaN)); // true
console.log(f2b(NaN)); // Uint8Array(8) [0, 0, 0, 0, 0, 0, 248, 127]
console.log(f2b(nan3)); // Uint8Array(8) [1, 0, 0, 0, 0, 0, 248, 127]
```

### Silently escaping NaN

`NaN` propagates through mathematical operations, so it's usually sufficient to test for `NaN` once at the end of calculation to detect error conditions. The only case where `NaN` gets silently escaped is when using [exponentiation](/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) with an exponent of `0`, which immediately returns `1` without testing the base's value.

```js
NaN ** 0 === 1; // true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN()")}}
