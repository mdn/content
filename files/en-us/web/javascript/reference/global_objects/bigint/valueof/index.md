---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
page-type: javascript-instance-method
browser-compat: javascript.builtins.BigInt.valueOf
---

{{JSRef}}

The **`valueOf()`** method of {{jsxref("BigInt")}} values returns the wrapped primitive value
of a {{jsxref("BigInt")}} object.

{{InteractiveExample("JavaScript Demo: BigInt.valueOf()", "shorter")}}

```js interactive-example
console.log(typeof Object(1n));
// Expected output: "object"

console.log(typeof Object(1n).valueOf());
// Expected output: "bigint"
```

## Syntax

```js-nolint
valueOf()
```

### Parameters

None.

### Return value

A BigInt representing the primitive value of the specified {{jsxref("BigInt")}} object.

## Examples

### Using `valueOf`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{jsxref("BigInt.prototype.toString()")}}
