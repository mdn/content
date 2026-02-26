---
title: "splat: Wasm SIMD conversion instruction"
short-title: splat
slug: WebAssembly/Reference/SIMD/conversion/splat
page-type: webassembly-instruction
browser-compat: webassembly.simd.splat
sidebar: webassemblysidebar
---

The **`splat`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) copies the same value to all lanes of a `v128` value interpretation.

{{InteractiveExample("Wat Demo: splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    (local $s v128)
    (f32x4.splat (f32.const 16))
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
[value] -> [v128]
```

- `value`
  - : The value you want to copy to all lanes of the `v128`, for example `(f32.const 16)`.
- `v128`
  - : The resulting `v128` value after all lanes of the initial `v128` value have been updated with the `value`.

### Binary encoding

| Instruction   | Binary equivalent | Example text => binary                           |
| ------------- | ----------------- | ------------------------------------------------ |
| `i8x16.splat` | `𝟶𝚡𝙵𝙳  15:𝚞𝟹𝟸`    | `i8x16.splat (f32.const 15)` => `0xfd 0x0f 0x0f` |
| `i16x8.splat` | `𝟶𝚡𝙵𝙳  16:𝚞𝟹𝟸`    | `i16x8.splat (f32.const 15)` => `0xfd 0x10 0x0f` |
| `i32x4.splat` | `𝟶𝚡𝙵𝙳  17:𝚞𝟹𝟸`    | `i32x4.splat (f32.const 15)` => `0xfd 0x11 0x0f` |
| `i64x2.splat` | `𝟶𝚡𝙵𝙳  18:𝚞𝟹𝟸`    | `i64x2.splat (f32.const 15)` => `0xfd 0x12 0x0f` |
| `f32x4.splat` | `𝟶𝚡𝙵𝙳  19:𝚞𝟹𝟸`    | `f32x4.splat (f32.const 15)` => `0xfd 0x13 0x0f` |
| `f64x2.splat` | `𝟶𝚡𝙵𝙳  20:𝚞𝟹𝟸`    | `f64x2.splat (f32.const 15)` => `0xfd 0x14 0x0f` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
