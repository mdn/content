---
title: "convert_i32x4_u: Wasm SIMD conversion instruction"
short-title: convert_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/convert_i32x4_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.convert_i32x4_u
sidebar: webassemblysidebar
---

The **`convert_i32x4_u`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts the lanes of an unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretation into an `f32x4` value interpretation.

{{InteractiveExample("Wat Demo: convert_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f32x4.convert_i32x4_u
    f32x4.extract_lane 2
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
value_type.convert_i32x4_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `convert_i32x4_u`:
    - `f32x4`
- `convert_i32x4_u`
  - : The `convert_i32x4_u` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `f32x4` value interpretation.

### Binary encoding

| Instruction             | Binary format  | Example text => binary                      |
| ----------------------- | -------------- | ------------------------------------------- |
| `f32x4.convert_i32x4_u` | `0xfd 251:u32` | `f32x4.convert_i32x4_u` => `0xfd 0xfb 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
