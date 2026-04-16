---
title: "pmax: Wasm SIMD arithmetic instruction"
short-title: pmax
slug: WebAssembly/Reference/SIMD/arithmetic/pmax
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`pmax`** instruction compares two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) floating point value interpretations and returns a new interpretation with each output lane set to the larger of the corresponding input lanes.

{{InteractiveExample("Wat Demo: pmax", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two v128 f32x4s onto the stack
    v128.const f32x4 52.6 101.2 78.0 9.9
    v128.const f32x4 51.9 102.0 78.1 -0.9

    ;; return a f32x4 containing the largest values from each input lane
    f32x4.pmax
    f32x4.extract_lane 3 ;; Extract a single lane
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
value_type.pmax
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `pmax`:
    - `f32x4`
    - `f64x2`
- `pmax`
  - : The `pmax` instruction. Must always be included after the `value_type` and a period (`.`).

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

| Instruction  | Binary format  | Example text => binary           |
| ------------ | -------------- | -------------------------------- |
| `f32x4.pmax` | `0xfd 235:u32` | `f32x4.pmax` => `0xfd 0xeb 0x01` |
| `f64x2.pmax` | `0xfd 247:u32` | `f64x2.pmax` => `0xfd 0xf7 0x01` |

## See also

- [`max`](/en-US/docs/WebAssembly/Reference/Numeric/max)
- [`max_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
- [`max_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
