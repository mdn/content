---
title: "ge: Wasm text instruction"
short-title: ge
slug: WebAssembly/Reference/Numeric/ge
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ge`** instruction, short for _greater or equal_, checks if a floating point number is greater than or equal to another floating point number.

Integer types have separate greater than or equal to signed ([**`ge_s`**](/en-US/docs/WebAssembly/Reference/Numeric/ge_s)) and unsigned ([**`ge_u`**](/en-US/docs/WebAssembly/Reference/Numeric/ge_u)) instructions.

{{InteractiveExample("Wat Demo: ge", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10.0 and 3.5 onto the stack
    f32.const 10.0
    f32.const 3.5

    f32.ge ;; check if 10.0 is greater than or equal to 3.5
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
value_type.ge
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `ge`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `ge`
  - : The `ge` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `ge`, the inputs will be basic numeric values such as `3.0` or `3.5`. If the first input is greater than or equal to the second input, `1` will be pushed on to the stack as an output, otherwise `0` will be pushed on to the stack.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `ge`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 2.0 30 86.9 120`. Each lane of the output pushed to the stack is a `1` or `0` indicating whether the corresponding lane of the first input value is greater than or equal to the corresponding lane of the second input value.

### Binary encoding

| Instruction | Binary format | Example text => binary    |
| ----------- | ------------- | ------------------------- |
| `f32.ge`    | `0x60`        | `f32.ge` => `0x60`        |
| `f64.ge`    | `0x66`        | `f64.ge` => `0x66`        |
| `f32x4.ge`  | `0xfd 70:u32` | `f32x4.ge` => `0xfd 0x46` |
| `f64x2.ge`  | `0xfd 76:u32` | `f64x2.ge` => `0xfd 0x4c` |

## Examples

### SIMD `ge` example

In this example, we demonstrate using `ge` to test whether one SIMD lane value is greater than or equal to the same lane value in another SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_ge
<p></p>
```

```js live-sample___simd_ge
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `f32x4` values, then check whether the first one's lane values are greater than or equal to the second using `f32x4.ge`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_ge
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is greater than or equal to the second
    f32x4.ge
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_ge", "100%", 100)}}

The result is `1` because the value stored in lane `3` of the first input value is greater than or equal to the value stored in lane `3` of the second input value.

## See also

- [`ge_s`](/en-US/docs/WebAssembly/Reference/Numeric/ge_s)
- [`ge_u`](/en-US/docs/WebAssembly/Reference/Numeric/ge_u)
