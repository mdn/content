---
title: "max_u: Wasm SIMD arithmetic instruction"
short-title: max_u
slug: WebAssembly/Reference/SIMD/arithmetic/max_u
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`max_u`** instruction compares two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) unsigned integer value interpretations and returns a new interpretation with each lane set to the greater of that lane index's value on the two inputs.

{{InteractiveExample("Wat Demo: max_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load two v128 i16x8s onto the stack
    v128.const i16x8 10 400 0 86 87 9000 -5 19
    v128.const i16x8 200 20 0 -5 80 9 -6 283

    ;; return a i16x8 containing the greatest values from each input
    i16x8.max_u
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
value_type.max_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `max_u`:
    - `i8x16`
    - `i16x8`
    - `i32x4`
- `max_u`
  - : The `max_u` instruction. Must always be included after the `value_type` and a period (`.`).

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
| `i8x16.max_u` | `0xfd 121:u32` | `i8x16.max_u` => `0xfd 0x79`      |
| `i16x8.max_u` | `0xfd 153:u32` | `i16x8.max_u` => `0xfd 0x99 0x01` |
| `i32x4.max_u` | `0xfd 185:u32` | `i32x4.max_u` => `0xfd 0xb9 0x01` |

## See also

- [`max`](/en-US/docs/WebAssembly/Reference/Numeric/max)
- [`max_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
