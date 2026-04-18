---
title: "extmul_high_i32x4_u: Wasm SIMD arithmetic instruction"
short-title: extmul_high_i32x4_u
slug: WebAssembly/Reference/SIMD/arithmetic/extmul_high_i32x4_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.extmul_high_i32x4_u
sidebar: webassemblysidebar
---

The **`extmul_high_i32x4_u`** [SIMD arithmetic instruction](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic) takes lanes 2–3 of two unsigned [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretations, multiplies the equivalent lanes of each value together, and outputs the products of those operations into an `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: extmul_high_i32x4_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (func $main
    v128.const i32x4 25 25 50 50
    v128.const i32x4 20 20 40 40

    i64x2.extmul_high_i32x4_u
    i64x2.extract_lane 1
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, lanes 2–3 of the two `i32x4` input values are multiplied together and the products output as an `i64x2`. Lane `2` of the first input is multiplied by lane `2` of the second input, and the product becomes lane `0` of the output, and so on. As a result, each lane of the output contains the value `2000` (`50 * 40`).

The `extmul_high_i32x4_u` instruction is a more performant equivalent to passing the results of two [`extend_high_i32x4_u`](/en-US/docs/WebAssembly/Reference/SIMD/conversion/extend_high_i32x4_u) instructions into a [`mul`](/en-US/docs/WebAssembly/Reference/Numeric/mul) instruction.

In other words:

```wat
(i64x2.extmul_high_i32x4_u
  (input1)
  (input2)
)
```

is equivalent to

```wat
(i64x2.mul
  (i64x2.extend_high_i32x4_u
    (input1)
  )
  (i64x2.extend_high_i32x4_u
    (input2)
  )
)
```

## Syntax

```plain
i64x2.extmul_high_i32x4_u
```

- `i64x2.extmul_high_i32x4_u`
  - : The `i64x2.extmul_high_i32x4_u` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` `i32x4` value interpretation.
- `input2`
  - : The second input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `i64x2` value interpretation.

### Binary encoding

| Instruction                 | Binary format  | Example text => binary                          |
| --------------------------- | -------------- | ----------------------------------------------- |
| `i64x2.extmul_high_i32x4_u` | `0xfd 223:u32` | `i64x2.extmul_high_i32x4_u` => `0xfd 0xdf 0x01` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD arithmetic instructions](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic)
