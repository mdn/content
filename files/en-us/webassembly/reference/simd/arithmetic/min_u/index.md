---
title: "min_u: Wasm SIMD arithmetic instruction"
short-title: min_u
slug: WebAssembly/Reference/SIMD/arithmetic/min_u
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`min_u`** instruction compares two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) unsigned integer value interpretations and returns a new interpretation with each lane set to the lower of that lane index's value on the two inputs.

{{InteractiveExample("Wat Demo: min_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the smallest values from each input
    i16x8.min_u
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
value_type.min_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `min_u`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `min_u`
  - : The `min_u` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value. A new `v128` of the same type as the inputs, with each lane set to the greater of that lane index's value on the two inputs.

### Binary encoding

| Instruction   | Binary format  | Example text => binary            |
| ------------- | -------------- | --------------------------------- |
| `i8x16.min_u` | `0xfd 119:u32` | `i8x16.min_u` => `0xfd 0x77`      |
| `i16x8.min_u` | `0xfd 151:u32` | `i16x8.min_u` => `0xfd 0x97 0x01` |
| `i32x4.min_u` | `0xfd 183:u32` | `i32x4.min_u` => `0xfd 0xb7 0x01` |

## See also

- [`min`](/en-US/docs/WebAssembly/Reference/Numeric/min)
- [`min_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/min_s)
