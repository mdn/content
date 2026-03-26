---
title: "neg: Wasm text instruction"
short-title: neg
slug: WebAssembly/Reference/Numeric/neg
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`neg`** instruction, short for _negate_, is used to negate a number. That is, it turns a positive number into a negative number and a negative number into a positive number.

{{InteractiveExample("Wat Demo: neg", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 10 ;; load a number onto the stack
    f32.neg ;; negate the values
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
value_type.neg
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `neg`:
    - `f32`
    - `f64`
    - `i8x16`
    - `i16x8`
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `neg`
  - : The `neg` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input2`
  - : The input value.
- `output`
  - : The output value.

For a non-SIMD `neg`, the values will be basic numeric values such as `3` or `-3.5`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `neg`, the values will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 8 -27.3 30 -0.5`.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `f32.neg`   | `0x8c`         | `f32.neg` => `0x8c`             |
| `f64.neg`   | `0x9a`         | `f64.neg` => `0x9a`             |
| `i8x16.neg` | `0xfd 97:u32`  | `i8x16.neg` => `0xfd 0x61`      |
| `i16x8.neg` | `0xfd 129:u32` | `i16x8.neg` => `0xfd 0x81 0x01` |
| `i32x4.neg` | `0xfd 161:u32` | `i32x4.neg` => `0xfd 0xa1 0x01` |
| `i64x2.neg` | `0xfd 193:u32` | `i64x2.neg` => `0xfd 0xc1 0x01` |
| `f32x4.neg` | `0xfd 225:u32` | `f32x4.neg` => `0xfd 0xe1 0x01` |
| `f64x2.neg` | `0xfd 237:u32` | `f64x2.neg` => `0xfd 0xed 0x01` |

## Examples

### SIMD negation

In this example, we demonstrate using `neg` to negate a SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_neg
<p></p>
```

```js live-sample___simd_neg
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare a SIMD `i8x16` value and use `i8x16.neg` to negate all its lane values. Finally we extract the value stored in lane `15` of the output value using the [`extract_lane_s`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_neg
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const i8x16 -1 0 3 8 15 -2 -32 -11 -2 1 5 8 -3 -5 0 -6

    i8x16.neg ;; Negate all the lanes
    i8x16.extract_lane_s 15 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_neg", "100%", 100)}}

`6` is output because it is the negation of the value in lane `15` of the input value.
