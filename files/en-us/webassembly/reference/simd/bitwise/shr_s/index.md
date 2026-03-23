---
title: "shr_s: Wasm SIMD bitwise instruction"
short-title: shr_s
slug: WebAssembly/Reference/SIMD/bitwise/shr_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.shr_s
sidebar: webassemblysidebar
---

The **`shr_s`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) shifts the bits in each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation to the right by the same specified amount, outputting signed values. This is an arithmetic right shift.

{{InteractiveExample("Wat Demo: shr_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 8 16 32 64
    i32.const 3

    i32x4.shr_s
    i32x4.extract_lane 3
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
value_type.shr_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `shr_s`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `shr_s`
  - : The `shr_s` instruction. Must always be included after the `value_type` and a period (`.`).

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

| Instruction   | Binary format  | Example text => binary            |
| ------------- | -------------- | --------------------------------- |
| `i8x16.shr_s` | `0xfd 108:u32` | `i8x16.shr_s` => `0xfd 0x6c`      |
| `i16x8.shr_s` | `0xfd 140:u32` | `i16x8.shr_s` => `0xfd 0x8c 0x01` |
| `i32x4.shr_s` | `0xfd 172:u32` | `i32x4.shr_s` => `0xfd 0xac 0x01` |
| `i64x2.shr_s` | `0xfd 204:u32` | `i64x2.shr_s` => `0xfd 0xcc 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shl`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/shl)
- [`shr_u`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/shr_u)
