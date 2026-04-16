---
title: "add_sat_s: Wasm SIMD arithmetic instruction"
short-title: add_sat_s
slug: WebAssembly/Reference/SIMD/arithmetic/add_sat_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.add_sat_s
sidebar: webassemblysidebar
---

The **`add_sat_s`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) performs a saturated addition of two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations. Each lane of the output value is the result of adding the corresponding lanes of the input value.

{{InteractiveExample("Wat Demo: add_sat_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.add_sat_s
    i16x8.extract_lane_s 7
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
value_type.add_sat_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `add_sat_s`:
    - `i8x16`
    - `i16x8`
- `add_sat_s`
  - : The `add_sat_s` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `i8x16.add_sat_s` | `0xfd 111:u32` | `i8x16.add_sat_s` => `0xfd 0x6f`      |
| `i16x8.add_sat_s` | `0xfd 143:u32` | `i16x8.add_sat_s` => `0xfd 0x8f 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`add`](/en-US/docs/WebAssembly/Reference/Numeric/add)
- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
