---
title: "lt_u: Wasm text instruction"
short-title: lt_u
slug: WebAssembly/Reference/Numeric/lt_u
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`lt_u`** instruction, short for _less than unsigned_, checks if an unsigned integer is less than another unsigned integer.

There are other `lt` instructions available:

- [**`lt_s`**](/en-US/docs/WebAssembly/Reference/Numeric/lt_s) for comparing signed integers.
- [**`lt`**](/en-US/docs/WebAssembly/Reference/Numeric/lt) for comparing floating point numbers.

{{InteractiveExample("Wat Demo: lt_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.lt_u ;; check if 10 is greater than 3
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
value_type.lt_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `lt_u`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `lt_u`
  - : The `lt_u` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `lt_u`, the inputs will be basic numeric values such as `3` or `12`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `lt_u`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 2 30 86 120`.

### Binary encoding

| Instruction  | Binary format | Example text => binary      |
| ------------ | ------------- | --------------------------- |
| `i32.lt_u`   | `0x49`        | `f32.lt_u` => `0x49`        |
| `i64.lt_u`   | `0x54`        | `f64.lt_u` => `0x54`        |
| `i8x16.lt_u` | `0xfd 38:u32` | `i8x16.lt_u` => `0xfd 0x26` |
| `i16x8.lt_u` | `0xfd 48:u32` | `i16x8.lt_u` => `0xfd 0x30` |
| `i32x4.lt_u` | `0xfd 58:u32` | `i32x4.lt_u` => `0xfd 0x3a` |

## Examples

### SIMD `lt_u` example

In this example, we demonstrate using `lt_u` to test whether one SIMD lane value is less than the same lane value in another SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_lt_u
<p></p>
```

```js live-sample___simd_lt_u
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i32x4` values, then check whether the first one's lane values are less than the second using `i32x4.lt_u`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_lt_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is less than the second
    i32x4.lt_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_lt_u", "100%", 100)}}

The result is `0` because the value stored in lane `3` of the first input value is not less than the value stored in lane `3` of the second input value.

## See also

- [`lt`](/en-US/docs/WebAssembly/Reference/Numeric/lt)
- [`lt_s`](/en-US/docs/WebAssembly/Reference/Numeric/lt_s)
