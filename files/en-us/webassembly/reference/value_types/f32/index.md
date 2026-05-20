---
title: "f32: Wasm type"
short-title: f32
slug: WebAssembly/Reference/Value_types/f32
page-type: webassembly-instruction
spec-urls: https://webassembly.github.io/spec/core/syntax/types.html#syntax-numtype
sidebar: webassemblysidebar
---

The **`f32`** value type holds a 32-bit single-precision floating-point value.

## Syntax

```wat
;; Function returning an f32 constant
(func (result f32)
  f32.const 3.14)

;; f32 parameter and local
(func (param $p f32) (local $tmp f32)
  ;; ...
)

;; Mutable f32 global
(global $ratio (mut f32) (f32.const 1.0))
```

## Description

`f32` values follow the [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) binary32 (single-precision) format: one sign bit, eight exponent bits, twenty-three significand bits. They cover roughly seven decimal digits of precision over the range ±3.4 × 10³⁸, plus the special values ±0, ±∞, and NaN.

Arithmetic instructions ([`f32.add`](/en-US/docs/WebAssembly/Reference/Numeric/add), [`f32.mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul), and so on) follow IEEE 754 round-to-nearest-ties-to-even semantics. The exact bit pattern of a NaN produced by arithmetic is non-deterministic, so do not rely on specific NaN payloads being the same across implementations or architectures.

`f32` is _transparent_: its bit pattern is observable, and `f32` values may be stored in [linear memory](/en-US/docs/WebAssembly/Reference/Memory). `f32.reinterpret_i32` and its inverse let you move bits between `f32` and `i32` without conversion.

### JavaScript boundary

`f32` values cross the JavaScript boundary as JavaScript [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) values. Values from JavaScript are rounded to the nearest representable `f32`.

## Specifications

{{Specifications}}

## See also

- [`f64`](/en-US/docs/WebAssembly/Reference/Value_types/f64)
- [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- [Numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
