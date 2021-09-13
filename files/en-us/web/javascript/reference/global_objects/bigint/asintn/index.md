---
title: BigInt.asIntN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asIntN
tags:
  - BigInt
  - JavaScript
  - Method
  - Reference
  - asIntN
browser-compat: javascript.builtins.BigInt.asIntN
---
{{JSRef}}

The **`BigInt.asIntN`** static method clamps a BigInt value to a signed integer value, and returns that value.

{{EmbedInteractiveExample("pages/js/bigint-asintn.html", "taller")}}

## Syntax

```js
BigInt.asIntN(bits, bigint);
```

### Parameters

- `bits`
  - : The amount of bits available for the integer size.
- `bigint`
  - : The BigInt value to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo
2^`bits`, as a signed integer.

## Examples

### Staying in 64-bit ranges

The `BigInt.asIntN()` method can be useful to stay in the range of 64-bit
arithmetic.

```js
const max = 2n ** (64n - 1n) - 1n;

BigInt.asIntN(64, max);
// ↪ 9223372036854775807n

BigInt.asIntN(64, max + 1n);
// ↪ -9223372036854775808n
// negative because of overflow
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asUintN()")}}
