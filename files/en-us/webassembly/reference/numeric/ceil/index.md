---
title: "ceil: Wasm text instruction"
short-title: ceil
slug: WebAssembly/Reference/Numeric/ceil
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ceil`** instruction is used for getting the value of a number rounded up to the next integer.

{{InteractiveExample("Wat Demo: ceil", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.ceil ;; round up
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
value_type.ceil
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `ceil`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `ceil`
  - : The `ceil` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input value.
- `output`
  - : The output value.

For a non-SIMD `ceil`, these will be basic numeric values such as `14.3` or `3.0`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `ceil`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 1.9 2.5 0.5 12.1`. Each lane of the output pushed to the stack is the rounded up value of the corresponding lane in the input.

### Binary encoding

| Instruction  | Binary format  | Example text => binary      |
| ------------ | -------------- | --------------------------- |
| `f32.ceil`   | `0x8d`         | `f32.ceil` => `0x8d`        |
| `f64.ceil`   | `0x9b`         | `f64.ceil` => `0x9b`        |
| `f32x4.ceil` | `0xfd 103:u32` | `f32x4.ceil` => `0xfd 0x67` |
| `f64x2.ceil` | `0xfd 116:u32` | `f64x2.ceil` => `0xfd 0x74` |

## Examples

### SIMD `ceil` example

In this example, we demonstrate running `ceil` on a SIMD value and outputting one of the lane values of the result.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_ceil
<p></p>
```

```js live-sample___simd_ceil
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f64` parameter. We then declare a SIMD `f64x2` value and use `f64x2.ceil` to round each lane up to the nearest integer. Finally we extract the value stored in lane `1` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_ceil
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 3.9 2000.1

    f64x2.ceil ;; round up each value
    f64x2.extract_lane 1 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_ceil", "100%", 100)}}

`2001` is output because this is the result of rounding up lane 1 of the input value (`2000.1`) to the nearest integer.
