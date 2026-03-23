---
title: "shr_u: Wasm SIMD bitwise instruction"
short-title: shr_u
slug: WebAssembly/Reference/SIMD/bitwise/shr_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.shr_u
sidebar: webassemblysidebar
---

The **`shr_u`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) shifts the bits in each lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation to the right by the same specified amount, outputting unsigned values. This is a logical right shift.

{{InteractiveExample("Wat Demo: shr_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i32x4 8 16 32 64
    i32.const 3

    i32x4.shr_u
    i32x4.extract_lane 2
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
value_type.shr_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `shr_u`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
- `shr_u`
  - : The `shr_u` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `i8x16.shr_u` | `0xfd 109:u32` | `i8x16.shr_u` => `0xfd 0x6d`      |
| `i16x8.shr_u` | `0xfd 141:u32` | `i16x8.shr_u` => `0xfd 0x8d 0x01` |
| `i32x4.shr_u` | `0xfd 173:u32` | `i32x4.shr_u` => `0xfd 0xad 0x01` |
| `i64x2.shr_u` | `0xfd 205:u32` | `i64x2.shr_u` => `0xfd 0xcd 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`shl`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/shl)
- [`shr_s`](/en-US/docs/WebAssembly/Reference/SIMD/bitwise/shr_s)
