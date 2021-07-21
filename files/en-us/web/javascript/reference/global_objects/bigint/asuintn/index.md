---
title: BigInt.asUintN()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/asUintN
tags:
  - BigInt
  - JavaScript
  - Method
  - Reference
  - asUintN
browser-compat: javascript.builtins.BigInt.asUintN
---
{{JSRef}}

The **`BigInt.asUintN`** static method clamps a BigInt value to an unsigned integer value, and returns that value.

{{EmbedInteractiveExample("pages/js/bigint-asuintn.html", "taller")}}

## Syntax

```js
BigInt.asUintN(bits, bigint);
```

### Parameters

- `bits`
  - : The amount of bits available for the integer size.
- `bigint`
  - : The BigInt value to clamp to fit into the supplied bits.

### Returns

The value of `bigint` modulo
2^`bits`, as an unsigned integer.

## Examples

### Staying in 64-bit ranges

The `BigInt.asUintN()` method can be useful to stay in the range of 64-bit
arithmetic.

```js
const max = 2n ** 64n - 1n;

BigInt.asUintN(64, max);
// ↪ 18446744073709551615n

BigInt.asUintN(64, max + 1n);
// ↪ 0n
// zero because of overflow
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{JSxRef("BigInt")}}
- {{JSxRef("BigInt.asIntN()")}}
