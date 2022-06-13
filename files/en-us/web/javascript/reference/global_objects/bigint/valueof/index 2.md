---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
tags:
  - BigInt
  - JavaScript
  - Method
  - Prototype
  - valueOf()
browser-compat: javascript.builtins.BigInt.valueOf
---
{{JSRef}}

The **`valueOf()`** method returns the wrapped primitive value
of a {{jsxref("BigInt")}} object.

{{EmbedInteractiveExample("pages/js/bigint-valueof.html","shorter")}}

## Syntax

```js
bigIntObj.valueOf()
```

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
