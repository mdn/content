---
title: "replace_lane: Wasm SIMD conversion instruction"
short-title: replace_lane
slug: WebAssembly/Reference/SIMD/conversion/replace_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.replace_lane
sidebar: webassemblysidebar
---

The **`replace_lane`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) replaces the specified lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation with a new value and returns the resulting `v128` value interpretation.

{{InteractiveExample("Wat Demo: replace_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const f64x2 1200000 3456789
    f64.const 777777

    f64x2.replace_lane 1
    f64x2.extract_lane 1
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
value_type.replace_lane index
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `replace_lane`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `replace_lane`
  - : The `replace_lane` instruction. Must always be included after the `value_type` and a period (`.`).
- `index`
  - : The index of the lane that you want to replace.

### Type

```plain
[input, replace_value] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `replace_value`
  - : The value that you want to replace the lane with.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction          | Binary format           | Example text => binary                     |
| -------------------- | ----------------------- | ------------------------------------------ |
| `i8x16.replace_lane` | `0xfd 23:u32 l:laneidx` | `i8x16.replace_lane 3` => `0xfd 0x17 0x03` |
| `i16x8.replace_lane` | `0xfd 26:u32 l:laneidx` | `i16x8.replace_lane 3` => `0xfd 0x1a 0x03` |
| `i32x4.replace_lane` | `0xfd 28:u32 l:laneidx` | `i32x4.replace_lane 3` => `0xfd 0x1c 0x03` |
| `i64x2.replace_lane` | `0xfd 30:u32 l:laneidx` | `i64x2.replace_lane 1` => `0xfd 0x1e 0x01` |
| `f32x4.replace_lane` | `0xfd 32:u32 l:laneidx` | `f32x4.replace_lane 3` => `0xfd 0x20 0x03` |
| `f64x2.replace_lane` | `0xfd 34:u32 l:laneidx` | `f64x2.replace_lane 1` => `0xfd 0x22 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
