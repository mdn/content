---
title: "min_s: Wasm SIMD arithmetic instruction"
short-title: min_s
slug: WebAssembly/Reference/SIMD/arithmetic/min_s
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`min_s`** instruction compares two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) signed integer value interpretations and returns a new interpretation with each lane set to the lower of that lane index's value on the two inputs.

{{InteractiveExample("Wat Demo: min_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the smallest values from each input
    i16x8.min_s
    i16x8.extract_lane_s 5 ;; Extract a single lane
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## Syntax

```plain
value_type.min_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `min_s`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `min_s`
  - : The `min_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value. A new `v128` of the same type as the inputs, with each lane set to the lower of that lane index's value on the two inputs.

### Binary encoding

| Instruction   | Binary format  | Example text => binary            |
| ------------- | -------------- | --------------------------------- |
| `i8x16.min_s` | `0xfd 118:u32` | `i8x16.min_s` => `0xfd 0x76`      |
| `i16x8.min_s` | `0xfd 150:u32` | `i16x8.min_s` => `0xfd 0x96 0x01` |
| `i32x4.min_s` | `0xfd 182:u32` | `i32x4.min_s` => `0xfd 0xb6 0x01` |

## See also

- [`min`](/en-US/docs/WebAssembly/Reference/Numeric/min)
- [`min_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/min_u)
