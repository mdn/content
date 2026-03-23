---
title: "convert_low_i32x4_u: Wasm SIMD conversion instruction"
short-title: convert_low_i32x4_u
slug: WebAssembly/Reference/SIMD/conversion/convert_low_i32x4_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.convert_low_i32x4_u
sidebar: webassemblysidebar
---

The **`convert_low_i32x4_u`** [SIMD conversion instruction](/en-US/docs/WebAssembly/Reference/SIMD/conversion) converts the first two lanes of an unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretation into an `f64x2` value interpretation.

{{InteractiveExample("Wat Demo: convert_low_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f64)))
  (func $main
    v128.const i32x4 0x3 0x3a 0xa9 0xff

    f64x2.convert_low_i32x4_u
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
value_type.convert_low_i32x4_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `convert_low_i32x4_u`:
    - `f64x2`
- `convert_low_i32x4_u`
  - : The `convert_low_i32x4_u` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `f64x2` value interpretation. The first two values of the input `i32x4` are included in the output `f64x2`.

### Binary encoding

| Instruction                 | Binary format  | Example text => binary                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `f64x2.convert_low_i32x4_u` | `0xfd 255:u32` | `f64x2.convert_low_i32x4_u` => `0xfd 0xff 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD conversion instructions](/en-US/docs/WebAssembly/Reference/SIMD/conversion)
