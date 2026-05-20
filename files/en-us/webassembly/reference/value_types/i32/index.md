---
title: "i32: Wasm type"
short-title: i32
slug: WebAssembly/Reference/Value_types/i32
page-type: webassembly-instruction
spec-urls: https://webassembly.github.io/spec/core/syntax/types.html#syntax-numtype
sidebar: webassemblysidebar
---

The **`i32`** value type holds a 32-bit integer.

## Syntax

```wat
;; Function returning an i32 constant
(func (result i32)
  i32.const 42
)

;; i32 parameter and local
(func (param $p i32) (local $tmp i32)
  ;; ...
)

;; Mutable i32 global
(global $count (mut i32) (i32.const 0))
```

## Description

`i32` values are 32 bits wide and are not inherently signed or unsigned. The interpretation is chosen by each instruction: [`i32.div_s`](/en-US/docs/WebAssembly/Reference/Numeric/div) treats its operands as two's-complement signed integers, while `i32.div_u` treats them as unsigned. Where the distinction does not affect the result, such as addition, subtraction, multiplication, and bitwise operations, a single instruction handles both interpretations.

`i32` is the default address type for memory and table operations. Addresses, offsets, and sizes passed to instructions such as [`i32.load`](/en-US/docs/WebAssembly/Reference/Memory/load) and [`table.get`](/en-US/docs/WebAssembly/Reference/Table/get) are `i32` unless a module opts into a wider address type for the memory.

`i32` is _transparent_: its bit pattern is observable, and `i32` values may be stored in [linear memory](/en-US/docs/WebAssembly/Reference/Memory).

### JavaScript boundary

At the JavaScript boundary, `i32` values cross as JavaScript [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) values. Out-of-range JavaScript numbers wrap modulo 2³².

## Specifications

{{Specifications}}

## See also

- [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- [`f32`](/en-US/docs/WebAssembly/Reference/Value_types/f32), [`f64`](/en-US/docs/WebAssembly/Reference/Value_types/f64)
- [Numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
