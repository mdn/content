---
title: "extmul_high_i16x8_s: Wasm SIMD arithmetic instruction"
short-title: extmul_high_i16x8_s
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i16x8_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.extmul_high_i16x8_s
sidebar: webassemblysidebar
---

The **`extmul_high_i16x8_s`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) takes lanes 4–7 of two signed [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i16x8` value interpretations, multiplies the equivalent lanes of each value together, and outputs the products of those operations into an `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: extmul_high_i16x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 3 3 3 3 6 6 6 6
    v128.const i16x8 2 2 2 2 4 4 4 4

    i32x4.extmul_high_i16x8_s
    i32x4.extract_lane 3
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, lanes 4–7 of the two `i16x8` input values are multiplied together and the products output as an `i32x4`. Lane `4` of the first input is multiplied by lane `4` of the second input, and the product becomes lane `0` of the output, and so on. As a result, each lane of the output contains the value `24` (`6 * 4`).

The `extmul_high_i16x8_s` instruction is a more performant equivalent to passing the results of two [`extend_high_i16x8_s`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i16x8_s) instructions into a [`mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul) instruction.

In other words:

```wat
(i32x4.extmul_high_i16x8_s
  (input1)
  (input2)
)
```

is equivalent to

```wat
(i32x4.mul
  (i32x4.extend_high_i16x8_s
    (input1)
  )
  (i32x4.extend_high_i16x8_s
    (input2)
  )
)
```

## Syntax

```plain
i32x4.extmul_high_i16x8_s
```

- `i32x4.extmul_high_i16x8_s`
  - : The `i32x4.extmul_high_i16x8_s` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i16x8` value interpretation.
- `input2`
  - : The second input `v128` `i16x8` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction                 | Binary format  | Example text => binary                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i32x4.extmul_high_i16x8_s` | `0xfd 189:u32` | `i32x4.extmul_high_i16x8_s` => `0xfd 0xbd 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
