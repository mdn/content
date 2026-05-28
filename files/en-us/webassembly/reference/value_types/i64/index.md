---
title: "i64: Wasm value type"
short-title: i64
slug: WebAssembly/Reference/Value_types/i64
page-type: webassembly-instruction
spec-urls: https://webassembly.github.io/spec/core/syntax/types.html#syntax-numtype
sidebar: webassemblysidebar
---

The **`i64`** value type holds a 64-bit integer.

## Syntax

```wat
;; Function returning an i64 constant
(func (result i64)
  i64.const 9000000000
)

;; i64 parameter and local
(func (param $p i64) (local $tmp i64)
  ;; ...
)

;; Mutable i64 global
(global $count (mut i64) (i64.const 0))
```

## Description

`i64` values are 64 bits wide and are not inherently signed or unsigned. Each instruction chooses its interpretation: signed variants such as `i64.div_s` treat operands as two's-complement, whereas unsigned variants such as `i64.div_u` do not. Operations whose result is unaffected by signedness, such as addition, subtraction, multiplication, and bitwise operations, have a single instruction.

`i64` is _transparent_: its bit pattern is observable, and `i64` values may be stored in [linear memory](/en-US/docs/WebAssembly/Reference/Memory).

### `i64` intergration with JavaScript BigInt

JavaScript's `Number` type cannot losslessly represent the full `i64` range, therefore `i64` values are converted to [`BigInt`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) values (and vice versa) when they cross the JavaScript boundary; for example, when exporting or importing functions involving `i64` parameters or return values.

When exporting a Wasm function with the signature: `[i64] -> [i64]`, the parameter has to be expressed as a `BigInt` value:

```js
const result = wasmInstance.exports.myFunc(42n);
console.log(result); // also a BigInt
```

An `i64` return value becomes a `BigInt` in JavaScript automatically.

When moving from JavaScript over to Wasm, a `BigInt` passed as an `i64` argument is truncated to 64 bits, wrapped modulo 2⁶⁴. Passing a plain `Number` where an `i64` is expected throws a `TypeError`.

An `i64` value stored in a Wasm [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) is also exposed as a `BigInt` when exported to JavaScript

## Specifications

{{Specifications}}

## See also

- [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32)
- [`f32`](/en-US/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/en-US/docs/WebAssembly/Reference/Value_types/f64)
- [Numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
