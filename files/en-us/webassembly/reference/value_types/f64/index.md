---
title: "f64: Wasm value type"
short-title: f64
slug: WebAssembly/Reference/Value_types/f64
page-type: webassembly-instruction
browser-compat: webassembly.types.f64
sidebar: webassemblysidebar
---

The **`f64`** value type holds a 64-bit double-precision floating-point value.

## Syntax

```wat
;; Function returning an f64 constant
(func (result f64)
  f64.const 3.141592653589793)

;; f64 parameter and local
(func (param $p f64) (local $tmp f64)
  ;; ...
)

;; Mutable f64 global
(global $ratio (mut f64) (f64.const 1.0))
```

## Description

`f64` values follow the [IEEE 754](https://en.wikipedia.org/wiki/IEEE_754) binary64 (double-precision) format: one sign bit, eleven exponent bits, and fifty-two significand bits. They cover roughly fifteen to seventeen decimal digits of precision over the range ±1.8 × 10³⁰⁸, plus the special values ±0, ±∞, and NaN.

Arithmetic instructions ([`f64.add`](/en-US/docs/WebAssembly/Reference/Numeric/add), [`f64.mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul), and so on) follow IEEE 754 round-to-nearest-ties-to-even semantics. The exact bit pattern of a NaN produced by arithmetic is non-deterministic, so do not rely on specific NaN payloads being the same across implementations or architectures.

`f64` is _transparent_: its bit pattern is observable, and `f64` values may be stored in [linear memory](/en-US/docs/WebAssembly/Reference/Memory). `f64.reinterpret_i64` and its inverse let you move bits between `f64` and `i64` without conversion.

### JavaScript boundary

`f64` matches the representation of JavaScript [`Number`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) exactly, so values cross the boundary without loss of precision (with the one exception that JavaScript has only a single NaN value).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`f32`](/en-US/docs/WebAssembly/Reference/Value_types/f32)
- [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32), [`i64`](/en-US/docs/WebAssembly/Reference/Value_types/i64)
- [Numeric instructions](/en-US/docs/WebAssembly/Reference/Numeric)
