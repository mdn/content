---
title: "ge_u: Wasm text instruction"
short-title: ge_u
slug: WebAssembly/Reference/Numeric/ge_u
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ge_u`** instruction, short for _greater or equal unsigned_, checks if an unsigned integer is greater than or equal to another unsigned integer.

There are other `ge` instructions available:

- [**`ge_s`**](/en-US/docs/WebAssembly/Reference/Numeric/ge_s) for comparing signed integers.
- [**`ge`**](/en-US/docs/WebAssembly/Reference/Numeric/ge) for comparing floating point numbers.

{{InteractiveExample("Wat Demo: ge_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.ge_u ;; check if 10 is greater than or equal to 3
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
value_type.ge_u
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `ge_u`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
- `ge_u`
  - : The `ge_u` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `ge_u`, the inputs will be basic numeric values such as `3` or `12`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `ge_u`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 2 30 86 120`. Each lane of the output pushed to the stack is a `1` or `0` indicating whether the corresponding lane of the first input value is greater than or equal to the corresponding lane of the second input value.

### Binary encoding

| Instruction  | Binary format | Example text => binary      |
| ------------ | ------------- | --------------------------- |
| `i32.ge_u`   | `0x4f`        | `i32.ge_u` => `0x4f`        |
| `i64.ge_u`   | `0x5a`        | `i64.ge_u` => `0x5a`        |
| `i8x16.ge_u` | `0xfd 44:u32` | `i8x16.ge_u` => `0xfd 0x2c` |
| `i16x8.ge_u` | `0xfd 54:u32` | `i16x8.ge_u` => `0xfd 0x36` |
| `i32x4.ge_u` | `0xfd 64:u32` | `i32x4.ge_u` => `0xfd 0x40` |

## Examples

### SIMD `ge_u` example

In this example, we demonstrate using `ge_u` to test whether one SIMD lane value is greater than or equal to the same lane value in another SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_ge_u
<p></p>
```

```js live-sample___simd_ge_u
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i32x4` values, then check whether the first one's lane values are greater than or equal to the second using `i32x4.ge_u`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_ge_u
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than or equal to the second
    i32x4.ge_u
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_ge_u", "100%", 100)}}

The result is `1` because the value stored in lane `3` of the first input value is greater than or equal to the value stored in lane `3` of the second input value.

## See also

- [`ge`](/en-US/docs/WebAssembly/Reference/Numeric/ge)
- [`ge_s`](/en-US/docs/WebAssembly/Reference/Numeric/ge_s)
