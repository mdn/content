---
title: "gt_s: Wasm text instruction"
short-title: gt_s
slug: WebAssembly/Reference/Numeric/gt_s
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`gt_s`** instruction, short for _greater than signed_, checks if a signed integer is greater than another signed integer.

There are other `gt` instructions available:

- [**`gt_u`**](/en-US/docs/WebAssembly/Reference/Numeric/gt_u) for comparing unsigned integers.
- [**`gt`**](/en-US/docs/WebAssembly/Reference/Numeric/gt) for comparing floating point numbers.

{{InteractiveExample("Wat Demo: gt_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load 10 and 3 onto the stack
    i32.const 10
    i32.const 3

    i32.gt_s ;; check if 10 is greater than 3
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
value_type.gt_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `gt_s`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `gt_s`
  - : The `gt_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value. If the first input is greater than the second input, `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack. The output values are integers.

For a non-SIMD `gt_s`, the inputs will be basic numeric values such as `3` or `12`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `gt_s`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 2 30 86 120`.

### Binary encoding

| Instruction  | Binary format  | Example text => binary           |
| ------------ | -------------- | -------------------------------- |
| `i32.gt_s`   | `0x4a`         | `f32.gt_s` => `0x4a`             |
| `i64.gt_s`   | `0x55`         | `f64.gt_s` => `0x55`             |
| `i8x16.gt_s` | `0xfd 39:u32`  | `i8x16.gt_s` => `0xfd 0x27`      |
| `i16x8.gt_s` | `0xfd 49:u32`  | `i16x8.gt_s` => `0xfd 0x31`      |
| `i32x4.gt_s` | `0xfd 59:u32`  | `i32x4.gt_s` => `0xfd 0x3b`      |
| `i64x2.gt_s` | `0xfd 217:u32` | `i64x2.gt_s` => `0xfd 0xd9 0x01` |

## Examples

### SIMD `gt_s` example

In this example, we demonstrate using `gt_s` to test whether one SIMD lane value is greater than the same lane value in another SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_gt_s
<p></p>
```

```js live-sample___simd_gt_s
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i32x4` values, then check whether the first one's lane values are greater than the second using `i32x4.gt_s`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_gt_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 20 12 15 102
    v128.const i32x4 20 12 15 100

    ;; check whether the first value is greater than the second
    i32x4.gt_s
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_gt_s", "100%", 100)}}

The result is `1` because the value stored in lane `3` of the first input value is greater than the value stored in lane `3` of the second input value.

## See also

- [`gt`](/en-US/docs/WebAssembly/Reference/Numeric/gt)
- [`gt_u`](/en-US/docs/WebAssembly/Reference/Numeric/gt_u)
