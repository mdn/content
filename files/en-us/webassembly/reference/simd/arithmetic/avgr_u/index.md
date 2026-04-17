---
title: "avgr_u: Wasm SIMD arithmetic instruction"
short-title: avgr_u
slug: WebAssembly/Reference/SIMD/arithmetic/avgr_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.avgr_u
sidebar: webassemblysidebar
---

The **`avgr_u`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) performs a rounding average of two unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations. Each lane of the output value is `(a + b + 1) / 2`, i.e. the mean average of the corresponding lanes of the input values, rounded up (ceiling division).

{{InteractiveExample("Wat Demo: avgr_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 4 6 16 8 23 65 82 9
    v128.const i16x8 0 25 2 30 2 34 45 80

    i16x8.avgr_u
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
value_type.avgr_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `avgr_u`:
    - `i8x16`
    - `i16x8`
- `avgr_u`
  - : The `avgr_u` instruction. Must always be included after the `value_type` and a period (`.`).

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

| Instruction    | Binary format  | Example text => binary             |
| -------------- | -------------- | ---------------------------------- |
| `i8x16.avgr_u` | `0xfd 123:u32` | `i8x16.avgr_u` => `0xfd 0x7b`      |
| `i16x8.avgr_u` | `0xfd 155:u32` | `i16x8.avgr_u` => `0xfd 0x9b 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
