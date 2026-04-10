---
title: "div: Wasm text instruction"
short-title: div
slug: WebAssembly/Reference/Numeric/div
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`div`** instruction, short for _division_, is used for dividing one number by another, similar to the **`/`** operator in other languages.

{{InteractiveExample("Wat Demo: div", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load `12` and `3` onto the stack
    i32.const 12
    i32.const 3

    i32.div_u ;; divide one number by the other
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
value_type.div
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `div`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `div`
  - : The `div` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The dividend.
- `input2`
  - : The divisor.
- `output`
  - : The quotient of the two input values.

For a non-SIMD `div`, these will be basic numeric values such as `3` or `3.5`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `div`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 0x9 0xa 0xb 0xc`.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `f32.div`   | `0x95`         | `f32.div` => `0x95`             |
| `f64.div`   | `0xa3`         | `f64.div` => `0xa3`             |
| `f32x4.div` | `0xfd 231:u32` | `f32x4.div` => `0xfd 0xe7 0x01` |
| `f64x2.div` | `0xfd 243:u32` | `f64x2.div` => `0xfd 0xf3 0x01` |

## Examples

### SIMD division

In this example, we demonstrate dividing one SIMD value by another and outputting one of the lane values of the resulting quotient.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_div
<p></p>
```

```js live-sample___simd_div
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f32` parameter. We then declare two SIMD `f32x4` values, then divide the first by the second using `f32x4.div`. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_div
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 12 15 100
    v128.const f32x4 5 3 3 3

    f32x4.div ;; divide the first value by the second
    f32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_div", "100%", 100)}}

The result is `33.3...`, because the value stored in lane `3` of output value is the result of `100 / 3`.
