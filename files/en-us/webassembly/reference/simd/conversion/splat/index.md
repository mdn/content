---
title: "splat: Wasm SIMD conversion instruction"
short-title: splat
slug: WebAssembly/Reference/SIMD/conversion/splat
page-type: webassembly-instruction
browser-compat: webassembly.simd.splat
sidebar: webassemblysidebar
---

The **`splat`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) copies the same value to all lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation.

{{InteractiveExample("Wat Demo: splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    (local $s v128)
    f32.const 16.2
    f32x4.splat
    local.set $s

    local.get $s
    f32x4.extract_lane 0
    call $log ;; log the result

    local.get $s
    f32x4.extract_lane 1
    call $log ;; log the result

    local.get $s
    f32x4.extract_lane 2
    call $log ;; log the result

    local.get $s
    f32x4.extract_lane 3
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
value_type.splat
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `splat`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `splat`
  - : The `splat` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input, value] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `value`
  - : The value you want to copy to all lanes of the `v128`.
- `output`
  - : The resulting `v128` value interpretation after all lanes of the input value have been set to the `value`.

### Binary encoding

| Instruction   | Binary format | Example text => binary       |
| ------------- | ------------- | ---------------------------- |
| `i8x16.splat` | `0xfd 15:u32` | `i8x16.splat` => `0xfd 0x0f` |
| `i16x8.splat` | `0xfd 16:u32` | `i16x8.splat` => `0xfd 0x10` |
| `i32x4.splat` | `0xfd 17:u32` | `i32x4.splat` => `0xfd 0x11` |
| `i64x2.splat` | `0xfd 18:u32` | `i64x2.splat` => `0xfd 0x12` |
| `f32x4.splat` | `0xfd 19:u32` | `f32x4.splat` => `0xfd 0x13` |
| `f64x2.splat` | `0xfd 20:u32` | `f64x2.splat` => `0xfd 0x14` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
