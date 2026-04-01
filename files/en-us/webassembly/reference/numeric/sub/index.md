---
title: "sub: Wasm text instruction"
short-title: sub
slug: WebAssembly/Reference/Numeric/sub
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`sub`** instruction, short for _subtraction_, is used for subtracting one number from another number, similar to the **`-`** operator in other languages.

{{InteractiveExample("Wat Demo: sub", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.sub ;; subtract on number from the other
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
value_type.sub
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `sub`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `18x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `sub`
  - : The `sub` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `sub`, these will be basic numeric values such as `14` or `3.1`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `sub`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 9 3.8 -16 101`.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `i32.sub`   | `0x6b`         | `i32.sub` => `0x6b`             |
| `i64.sub`   | `0x7d`         | `i64.sub` => `0x7d`             |
| `f32.sub`   | `0x93`         | `f32.sub` => `0x93`             |
| `f64.sub`   | `0xa1`         | `f64.sub` => `0xa1`             |
| `i8x16.sub` | `0xfd 113:u32` | `i8x16.sub` => `0xfd 0x71`      |
| `i16x8.sub` | `0xfd 145:u32` | `i16x8.sub` => `0xfd 0x91 0x01` |
| `i32x4.sub` | `0xfd 177:u32` | `i32x4.sub` => `0xfd 0xb1 0x01` |
| `i64x2.sub` | `0xfd 209:u32` | `i64x2.sub` => `0xfd 0xd1 0x01` |
| `f32x4.sub` | `0xfd 229:u32` | `f32x4.sub` => `0xfd 0xe5 0x01` |
| `f64x2.sub` | `0xfd 241:u32` | `f64x2.sub` => `0xfd 0xf1 0x01` |

## Examples

### SIMD subtraction

In this example, we demonstrate subtracting one SIMD value by another and outputting one of the lane values of the result.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_sub
<p></p>
```

```js live-sample___simd_sub
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i16x8` values and use `i16x8.sub` to subtract the second one from the first one. Finally we extract the value stored in lane `7` of the output value using the [`extract_lane_s`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_sub
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 0 450 18 -20 7001 834 -825 6
    v128.const i16x8 0 200 -34 40 7000 835 -825 30

    i16x8.sub ;; Subtract the second SIMD value from the first
    i16x8.extract_lane_s 7 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_sub", "100%", 100)}}

`-24` is output because this is the result of subtracting lane 7 of the second value (`30`) from lane 7 of the first value (`6`).
