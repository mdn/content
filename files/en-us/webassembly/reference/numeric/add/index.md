---
title: "add: Wasm text instruction"
short-title: add
slug: WebAssembly/Reference/Numeric/add
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`add`** instruction is used for adding up two numbers, similar to the **`+`** operator in other languages.

{{InteractiveExample("Wat Demo: add", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `10` and `3` onto the stack
    i32.const 10
    i32.const 3

    i32.add ;; add up both numbers
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
value_type.add
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `add`:
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
- `add`
  - : The `add` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first value to be added.
- `input2`
  - : The second value to be added.
- `output`
  - : The sum of the two input values.

For a non-SIMD `add`, these will be basic numeric values such as `3` or `3.5`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `add`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 0x9 0xa 0xb 0xc`.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `i32.add`   | `0x6a`         | `i32.add` => `0x6a`             |
| `i64.add`   | `0x7c`         | `i64.add` => `0x7c`             |
| `f32.add`   | `0x92`         | `f32.add` => `0x92`             |
| `f64.add`   | `0xa0`         | `f64.add` => `0xa0`             |
| `i8x16.add` | `0xfd 110:u32` | `i8x16.add` => `0xfd 0x6e`      |
| `i16x8.add` | `0xfd 142:u32` | `i16x8.add` => `0xfd 0x8e 0x01` |
| `i32x4.add` | `0xfd 174:u32` | `i32x4.add` => `0xfd 0xae 0x01` |
| `i64x2.add` | `0xfd 206:u32` | `i64x2.add` => `0xfd 0xce 0x01` |
| `f32x4.add` | `0xfd 228:u32` | `f32x4.add` => `0xfd 0xe4 0x01` |
| `f64x2.add` | `0xfd 240:u32` | `f64x2.add` => `0xfd 0xf0 0x01` |

## Examples

### SIMD addition

In this example, we demonstrate adding two SIMD values together and outputting one of the lane values.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_add
<p></p>
```

```js live-sample___simd_add
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i32x4` values, then add them together using `i32x4.add`. Finally we extract the value stored in lane `3` of the sum of the addition using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_add
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 9 10 11 12
    v128.const i32x4 9 10 11 12

    i32x4.add ;; add the two values
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_add", "100%", 100)}}

The result is `24`, because the value stored in lane `3` of each of the input values is `12`. Once added together, the output value's lane `3` will contain the value `24`.

## See also

- [`add_sat_s`](#)
- [`add_sat_u`](#)
