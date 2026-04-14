---
title: "gt: Wasm text instruction"
short-title: gt
slug: WebAssembly/Reference/Numeric/gt
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`gt`** instruction, short for _greater than_, checks if a floating point number is greater than another floating point number.

Integer types have separate greater than signed ([**`gt_s`**](/en-US/docs/WebAssembly/Reference/Numeric/gt_s)) and unsigned ([**`gt_u`**](/en-US/docs/WebAssembly/Reference/Numeric/gt_u)) instructions.

{{InteractiveExample("Wat Demo: gt", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 2 onto the stack
    i32.const 10
    i32.const 2

    i32.gt ;; check if 10 is greater than 2
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
value_type.gt
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `gt`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `gt`
  - : The `gt` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `gt`, the inputs will be basic numeric values such as `3.0` or `3.5`. If the first input is greater than the second input, `1` will be pushed on to the stack as an output, otherwise `0` will be pushed on to the stack.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `gt`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 2.0 30 86.9 120`. Each lane of the output pushed to the stack is a `1` or `0` indicating whether the corresponding lane of the first input value is greater than the corresponding lane of the second input value.

### Binary encoding

| Instruction | Binary format | Example text => binary    |
| ----------- | ------------- | ------------------------- |
| `f32.gt`    | `0x5e`        | `f32.gt` => `0x5e`        |
| `f64.gt`    | `0x64`        | `f64.gt` => `0x64`        |
| `f32x4.gt`  | `0xfd 68:u32` | `f32x4.gt` => `0xfd 0x44` |
| `f64x2.gt`  | `0xfd 74:u32` | `f64x2.gt` => `0xfd 0x4a` |

## Examples

### SIMD `gt` example

In this example, we demonstrate using `gt` to test whether one SIMD lane value is greater than the same lane value in another SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_gt
<p></p>
```

```js live-sample___simd_gt
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `f32x4` values, then check whether the first one's lane values are greater than the second using `f32x4.gt`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_gt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 102
    v128.const f32x4 20 12 15 100

    ;; check whether the first value is greater than the second
    f32x4.gt
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_gt", "100%", 100)}}

The result is `1` because the value stored in lane `3` of the first input value is greater than the value stored in lane `3` of the second input value.

## See also

- [`gt_s`](/en-US/docs/WebAssembly/Reference/Numeric/gt_s)
- [`gt_u`](/en-US/docs/WebAssembly/Reference/Numeric/gt_u)
