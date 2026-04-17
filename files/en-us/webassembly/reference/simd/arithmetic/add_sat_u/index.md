---
title: "add_sat_u: Wasm SIMD arithmetic instruction"
short-title: add_sat_u
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.add_sat_u
sidebar: webassemblysidebar
---

The **`add_sat_u`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) performs a [saturating](https://en.wikipedia.org/wiki/Saturation_arithmetic) addition of two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations. Each lane of the output value is the result of adding the corresponding lanes of the input value.

{{InteractiveExample("Wat Demo: add_sat_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.add_sat_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

Saturation means that output values are clamped to within a certain range:

- `i8x16.add_sat_u`: `0` to `255` (the full range of an unsigned 8-bit integer)
- `i16x8.add_sat_u`: `0` to `65,535` (the full range of an unsigned 16-bit integer)

## Syntax

```plain
value_type.add_sat_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `add_sat_u`:
    - `i8x16`
    - `i16x8`
- `add_sat_u`
  - : The `add_sat_u` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value.

### Binary encoding

| Instruction       | Binary format  | Example text => binary                |
| ----------------- | -------------- | ------------------------------------- |
| `i8x16.add_sat_u` | `0xfd 112:u32` | `i8x16.add_sat_u` => `0xfd 0x70`      |
| `i16x8.add_sat_u` | `0xfd 144:u32` | `i16x8.add_sat_u` => `0xfd 0x90 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`add`](/en-US/docs/WebAssembly/Reference/Numeric/add)
- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
