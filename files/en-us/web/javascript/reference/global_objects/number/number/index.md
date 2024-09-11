---
title: Number() constructor
slug: Web/JavaScript/Reference/Global_Objects/Number/Number
page-type: javascript-constructor
browser-compat: javascript.builtins.Number.Number
---

{{JSRef}}

The **`Number()`** constructor creates {{jsxref("Number")}} objects. When called as a function, it returns primitive values of type Number.

## Syntax

```js-nolint
new Number(value)
Number(value)
```

> **Note:** `Number()` can be called with or without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new), but with different effects. See [Return value](#return_value).

### Parameters

- `value`
  - : The numeric value of the object being created.

### Return value

When `Number()` is called as a function (without [`new`](/en-US/docs/Web/JavaScript/Reference/Operators/new)), it returns `value` [coerced to a number primitive](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#number_coercion). Specially, [BigInts](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values are converted to numbers instead of throwing. If `value` is absent, it becomes `0`.

When `Number()` is called as a constructor (with `new`), it uses the coercion process above and returns a wrapping {{jsxref("Number")}} object, which is **not** a primitive.

> [!WARNING]
> You should rarely find yourself using `Number` as a constructor.

## Examples

### Creating Number objects

```js
const a = new Number("123"); // a === 123 is false
const b = Number("123"); // b === 123 is true
a instanceof Number; // is true
b instanceof Number; // is false
typeof a; // "object"
typeof b; // "number"
```

### Using Number() to convert a BigInt to a number

`Number()` is the only case where a BigInt can be converted to a number without throwing, because it's very explicit.

```js example-bad
+1n; // TypeError: Cannot convert a BigInt value to a number
0 + 1n; // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

```js example-good
Number(1n); // 1
```

Note that this may result in loss of precision, if the BigInt is too large to be [safely represented](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger).

```js
BigInt(Number(2n ** 54n + 1n)) === 2n ** 54n + 1n; // false
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Polyfill of modern `Number` behavior (with support binary and octal literals) in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("NaN")}}
- {{jsxref("Math")}}
- {{jsxref("BigInt")}}
