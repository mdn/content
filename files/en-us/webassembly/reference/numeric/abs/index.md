---
title: "abs: Wasm text instruction"
short-title: abs
slug: WebAssembly/Reference/Numeric/abs
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`abs`** instruction, short for _absolute_, is used to get the absolute value of a number. That is, it returns x if x is positive, and the negation of x if x is negative.

{{InteractiveExample("Wat Demo: abs", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -10 ;; load a number onto the stack
    f32.abs ;; calculate the absolute value
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
value_type.abs
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `abs`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `abs`
  - : The `abs` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input value.
- `output`
  - : The output value.

For a non-SIMD `abs`, the `input` and `output` will be basic numeric values such as `3.5` or `10`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `abs`, the `input` and `output` will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 4 8 12 16`. Each lane of the output pushed to the stack is the absolute value of the corresponding lane in the input.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `f32.abs`   | `0x8b`         | `f32.abs` => `0x8b`             |
| `f64.abs`   | `0x99`         | `f64.abs` => `0x99`             |
| `i8x16.abs` | `0xfd 96:u32`  | `i8x16.abs` => `0xfd 0x60`      |
| `i16x8.abs` | `0xfd 128:u32` | `i16x8.abs` => `0xfd 0x80 0x01` |
| `i32x4.abs` | `0xfd 160:u32` | `i32x4.abs` => `0xfd 0xa0 0x01` |
| `i64x2.abs` | `0xfd 192:u32` | `i64x2.abs` => `0xfd 0xc0 0x01` |
| `f32x4.abs` | `0xfd 224:u32` | `f32x4.abs` => `0xfd 0xe0 0x01` |
| `f64x2.abs` | `0xfd 236:u32` | `f64x2.abs` => `0xfd 0xec 0x01` |

## Examples

### SIMD abs

In this example, we demonstrate running the `abs` instruction on a SIMD value and outputting one of the resulting lane values.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_abs
<p></p>
```

```js live-sample___simd_abs
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare a SIMD `i32x4` value, then run `i32x4.abs`. Finally we extract the value stored in lane `3` of the output SIMD value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_abs
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 -9 -10 -11 -12

    i32x4.abs
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_abs", "100%", 100)}}

The result is `12`, because the value stored in lane `3` of the input value is `-12`, as we are outputting the absolute equivalent.
