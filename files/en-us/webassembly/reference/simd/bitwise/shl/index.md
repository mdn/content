---
title: "shl: Wasm SIMD bitwise instruction"
short-title: shl
slug: WebAssembly/Reference/SIMD/bitwise/shl
page-type: webassembly-instruction
browser-compat: webassembly.simd.shl
sidebar: webassemblysidebar
---

The **`shl`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) shifts the bits in each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation to the left by the same specified amount.

{{InteractiveExample("Wat Demo: shl", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 1 2 4 6
    i32.const 3

    i32x4.shl
    i32x4.extract_lane 1
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
value_type.shl
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `shl`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `shl`
  - : The `shl` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input, shift_value] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `shift_value`
  - : The value that you want to shift the lanes by.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `i8x16.shl` | `0xfd 107:u32` | `i8x16.shl` => `0xfd 0x6b`      |
| `i16x8.shl` | `0xfd 139:u32` | `i16x8.shl` => `0xfd 0x8b 0x01` |
| `i32x4.shl` | `0xfd 171:u32` | `i32x4.shl` => `0xfd 0xab 0x01` |
| `i64x2.shl` | `0xfd 203:u32` | `i64x2.shl` => `0xfd 0xcb 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shr_s`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/shr_s)
- [`shr_u`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/shr_u)
