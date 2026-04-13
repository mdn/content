---
title: "eq: Wasm text instruction"
short-title: eq
slug: WebAssembly/Reference/Numeric/eq
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`eq`** instruction, short for _equal_, checks if two numbers are equal.

{{InteractiveExample("Wat Demo: eq", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.eq ;; check if `10` is equal to `2`
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.eq
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `eq`:
    - `i32`
    - `i64`
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
      - `f32x4`
      - `f64x2`
- `eq`
  - : The `eq` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value, which will be an integer type.

For a non-SIMD `eq`, the inputs will be basic numeric values such as `1` or `3.5`. If the input values are equal, `1` will be pushed on to the stack as an output, otherwise `0` will be pushed on to the stack.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `eq`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 0x9 0xa 0xb 0xc`. Each lane of the output pushed to the stack is a `1` or `0` indicating the equality of the corresponding lanes in the input values.

### Binary encoding

| Instruction | Binary format  | Example text => binary         |
| ----------- | -------------- | ------------------------------ |
| `i32.eq`    | `0x46`         | `i32.eq` => `0x46`             |
| `i64.eq`    | `0x51`         | `i64.eq` => `0x51`             |
| `f32.eq`    | `0x5b`         | `f32.eq` => `0x5b`             |
| `f64.eq`    | `0x61`         | `f64.eq` => `0x61`             |
| `i8x16.eq`  | `0xfd 35:u32`  | `i8x16.eq` => `0xfd 0x23`      |
| `i16x8.eq`  | `0xfd 45:u32`  | `i16x8.eq` => `0xfd 0x2d`      |
| `i32x4.eq`  | `0xfd 55:u32`  | `i32x4.eq` => `0xfd 0x37`      |
| `i64x2.eq`  | `0xfd 214:u32` | `i64x2.eq` => `0xfd 0xd6 0x01` |
| `f32x4.eq`  | `0xfd 65:u32`  | `f32x4.eq` => `0xfd 0x41`      |
| `f64x2.eq`  | `0xfd 71:u32`  | `f64x2.eq` => `0xfd 0x47`      |

## Examples

### SIMD `eq` example

In this example, we demonstrate using `eq` to test whether a lane value from two separate SIMD values are equal.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_eq
<p></p>
```

```js live-sample___simd_eq
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i16x8` values, then check whether they are equal using `i16x8.eq`. Finally we extract the value stored in lane `7` of the output value using the [`extract_lane_s`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_eq
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 20 12 15 100 9 8 -7 8
    v128.const i16x8 20 12 15 100 9 8 -7 4

    i16x8.eq ;; check whether the values are equal
    i16x8.extract_lane_s 7 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_eq", "100%", 100)}}

The result is `0` because the values stored in lane `7` of the two input values are not equal.
