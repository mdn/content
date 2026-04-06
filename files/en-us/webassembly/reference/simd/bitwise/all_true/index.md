---
title: "all_true: Wasm SIMD bitwise instruction"
short-title: all_true
slug: WebAssembly/Reference/SIMD/bitwise/all_true
page-type: webassembly-instruction
browser-compat: webassembly.simd.all_true
sidebar: webassemblysidebar
---

The **`all_true`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) tests whether all the bits of a `v128` input value are non-zero.

{{InteractiveExample("Wat Demo: all_true", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0
    i8x16.all_true

    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
value_type.all_true
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `all_true`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `all_true`
  - : The `all_true` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input1`
  - : The input `v128` value interpretation.
- `output`
  - : The output value. This is an `i32` type equal to `1` if the `v128` input contains all non-zero bits, or `0` if any of the bits are `0`.

### Binary encoding

| Instruction      | Binary format  | Example text => binary               |
| ---------------- | -------------- | ------------------------------------ |
| `i8x16.all_true` | `0xfd 99:u32`  | `i8x16.all_true` => `0xfd 0x63`      |
| `i16x8.all_true` | `0xfd 131:u32` | `i16x8.all_true` => `0xfd 0x83 0x01` |
| `i32x4.all_true` | `0xfd 163:u32` | `i32x4.all_true` => `0xfd 0xa3 0x01` |
| `i64x2.all_true` | `0xfd 195:u32` | `i64x2.all_true` => `0xfd 0xc3 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD bitwise instructions](/en-US/docs/WebAssembly/Reference/SIMD/bitwise)
