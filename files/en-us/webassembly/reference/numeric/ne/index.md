---
title: "ne: Wasm text instruction"
short-title: ne
slug: WebAssembly/Reference/Numeric/ne
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ne`** instruction, short for _not equal_, checks if two numbers are not equal. If the numbers are not equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

{{InteractiveExample("Wat Demo: ne", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.ne ;; check if `10` is not equal to `2`
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: true
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```plain
value_type.ne
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `ne`:
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
- `ne`
  - : The `ne` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : An value indicating whether the two input values are not equal.

For a non-SIMD `ne`, the input values will be basic numeric values such as `3` or `3.5` and the output value pushed onto the stack will be `0` or `1`

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `ne`, the input values will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 0x9 0xa 0xb 0xc`, and the output value pushed onto the stack will be a `v128` value interpretation with all its lanes filled with `0` or `1`. The equality of each lane is checked separately.

### Binary encoding

| Instruction | Binary format  | Example text => binary         |
| ----------- | -------------- | ------------------------------ |
| `i32.ne`    | `0x47`         | `i32.ne` => `0x47`             |
| `i64.ne`    | `0x52`         | `i64.ne` => `0x52`             |
| `f32.ne`    | `0x5c`         | `f32.ne` => `0x5c`             |
| `f64.ne`    | `0x62`         | `f64.ne` => `0x62`             |
| `i8x16.ne`  | `0xfd 36:u32`  | `i8x16.ne` => `0xfd 0x24`      |
| `i16x8.ne`  | `0xfd 46:u32`  | `i16x8.ne` => `0xfd 0x2e`      |
| `i32x4.ne`  | `0xfd 56:u32`  | `i32x4.ne` => `0xfd 0x38`      |
| `i64x2.ne`  | `0xfd 215:u32` | `i64x2.ne` => `0xfd 0xd7 0x01` |
| `f32x4.ne`  | `0xfd 66:u32`  | `f32x4.ne` => `0xfd 0x42`      |
| `f64x2.ne`  | `0xfd 72:u32`  | `f64x2.ne` => `0xfd 0x48`      |

## Examples

### SIMD non-equality testing

In this example, we demonstrate checking two SIMD values for non-equality.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_ne
<p></p>
```

```js live-sample___simd_ne
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f64` parameter. We then declare two SIMD `f64x2` values and use `f64x2.ne` to check whether they are equal. Finally we extract the value stored in lane `1` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_ne
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i64)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i64x2 20 12
    v128.const i64x2 20 400000

    i64x2.ne ;; check non-equality
    i64x2.extract_lane 1 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_ne", "100%", 100)}}

`1` is output because the values in lane `1` of the two input values are not equal.
