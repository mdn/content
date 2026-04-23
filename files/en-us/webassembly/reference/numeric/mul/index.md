---
title: "mul: Wasm text instruction"
short-title: mul
slug: WebAssembly/Reference/Numeric/mul
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`mul`** instruction, short for _multiplication_, is used for multiplying one number by another number, similar to the **`*`** operator in other languages.

{{InteractiveExample("Wat Demo: mul", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.mul ;; multiply one number by the other
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
value_type.mul
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `mul`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `mul`
  - : The `mul` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The product of the two input values.

For a non-SIMD `mul`, these will be basic numeric values such as `3` or `3.5`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `mul`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 0x9 0xa 0xb 0xc`. Each lane of the output pushed to the stack is the product of the two inputs' corresponding lane values being multiplied together.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `i32.mul`   | `0x6c`         | `i32.mul` => `0x6c`             |
| `i64.mul`   | `0x7e`         | `i64.mul` => `0x7e`             |
| `f32.mul`   | `0x94`         | `f32.mul` => `0x94`             |
| `f64.mul`   | `0xa2`         | `f64.mul` => `0xa2`             |
| `i16x8.mul` | `0xfd 149:u32` | `i16x8.mul` => `0xfd 0x95 0x01` |
| `i32x4.mul` | `0xfd 181:u32` | `i32x4.mul` => `0xfd 0xb5 0x01` |
| `i64x2.mul` | `0xfd 213:u32` | `i64x2.mul` => `0xfd 0xd5 0x01` |
| `f32x4.mul` | `0xfd 230:u32` | `f32x4.mul` => `0xfd 0xe6 0x01` |
| `f64x2.mul` | `0xfd 242:u32` | `f64x2.mul` => `0xfd 0xf2 0x01` |

## Examples

### SIMD multiplication

In this example, we demonstrate multiplying one SIMD value by another and outputting one of the lane values of the resulting product.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_mul
<p></p>
```

```js live-sample___simd_mul
const outputElem = document.querySelector("p");

const obj = {
  output(val) {
    outputElem.textContent += val;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  obj,
});
```

#### Wasm

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i16x8` values, then multiply the first by the second using `i16x8.mul`. Finally we extract the value stored in lane `7` of the output value using the [`extract_lane_s`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_mul
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 20 12 15 2 400 2 1 12
    v128.const i16x8 18 34 3 5 9 20 21 9

    i16x8.mul ;; multiply the two values
    i16x8.extract_lane_s 7 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_mul", "100%", 100)}}

The result is `108`, because the value stored in lane `3` of output value is the result of `12 * 9`.
