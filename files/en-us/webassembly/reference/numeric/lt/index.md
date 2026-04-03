---
title: "lt: Wasm text instruction"
short-title: lt
slug: WebAssembly/Reference/Numeric/lt
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`lt`** instruction, short for _less than_, checks if a floating point number is less than another floating point number.

Integer types have separate less than signed ([**`lt_s`**](/en-US/docs/WebAssembly/Reference/Numeric/lt_s)) and unsigned ([**`lt_u`**](/en-US/docs/WebAssembly/Reference/Numeric/lt_u)) instructions.

{{InteractiveExample("Wat Demo: lt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10.1 and 3.5 onto the stack
    f32.const 10.1
    f32.const 3.5

    f32.lt ;; check if 10.1 is less than 3.5
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
value_type.lt
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `lt`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `lt`
  - : The `lt` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value. If the first input is less than the second input, `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack. The output values are integers.

For a non-SIMD `lt`, the inputs will be basic numeric values such as `3.0` or `3.5`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `lt`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 2.0 30 86.9 120`.

### Binary encoding

| Instruction | Binary format | Example text => binary    |
| ----------- | ------------- | ------------------------- |
| `f32.lt`    | `0x5d`        | `f32.lt` => `0x5d`        |
| `f64.lt`    | `0x63`        | `f64.lt` => `0x63`        |
| `f32x4.lt`  | `0xfd 67:u32` | `f32x4.lt` => `0xfd 0x43` |
| `f64x2.lt`  | `0xfd 73:u32` | `f64x2.lt` => `0xfd 0x49` |

## Examples

### SIMD `lt` example

In this example, we demonstrate using `lt` to test whether one SIMD lane value is less than the same lane value in another SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_lt
<p></p>
```

```js live-sample___simd_lt
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `f32x4` values, then check whether the first one's lane values are less than the second using `f32x4.lt`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_lt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is less than the second
    f32x4.lt
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_lt", "100%", 100)}}

The result is `0` because the value stored in lane `3` of the first input value is not less than the value stored in lane `3` of the second input value.

## See also

- [`lt_s`](/en-US/docs/WebAssembly/Reference/Numeric/lt_s)
- [`lt_u`](/en-US/docs/WebAssembly/Reference/Numeric/lt_u)
