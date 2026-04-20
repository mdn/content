---
title: "extmul_low_i8x16_u: Wasm SIMD arithmetic instruction"
short-title: extmul_low_i8x16_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_low_i8x16_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.extmul_low_i8x16_u
sidebar: webassemblysidebar
---

The **`extmul_low_i8x16_u`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) takes lanes 0–7 of two unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i8x16` value interpretations, multiplies the values in the corresponding lanes, and outputs the result of those operations into an `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: extmul_low_i8x16_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i8x16 2 2 2 2 2 2 2 2 3 3 3 3 3 3 3 3
    v128.const i8x16 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5

    i16x8.extmul_low_i8x16_u
    i16x8.extract_lane_s 7
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, lanes 0–7 of the two `i8x16` input values are multiplied together and the products output as an `i16x8`. Lane `0` of the first input is multiplied by lane `0` of the second input, and the product becomes lane `0` of the output, and so on. As a result, each lane of the output contains the value `8` (`2 * 4`).

The `extmul_low_i8x16_u` instruction is a more performant equivalent to passing the results of two [`extend_low_i8x16_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/extend_low_i8x16_u) instructions into a [`mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul) instruction.

In other words:

```wat
(i16x8.extmul_low_i8x16_u
  (input1)
  (input2)
)
```

is equivalent to

```wat
(i16x8.mul
  (i16x8.extend_low_i8x16_u
    (input1)
  )
  (i16x8.extend_low_i8x16_u
    (input2)
  )
)
```

## Syntax

```plain
i16x8.extmul_low_i8x16_u
```

- `i16x8.extmul_low_i8x16_u`
  - : The `i16x8.extmul_low_i8x16_u` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i8x16` value interpretation.
- `input2`
  - : The second input `v128` `i8x16` value interpretation.
- `output`
  - : The output `v128` `i16x8` value interpretation.

### Binary encoding

| Instruction                | Binary format  | Example text => binary                         |
| -------------------------- | -------------- | ---------------------------------------------- |
| `i16x8.extmul_low_i8x16_u` | `0xfd 158:u32` | `i16x8.extmul_low_i8x16_u` => `0xfd 0x9e 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
