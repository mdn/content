---
title: "nearest: Wasm text instruction"
short-title: nearest
slug: WebAssembly/Reference/Numeric/nearest
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`nearest`** instruction is used for rounding the value of a floating point number to the nearest whole number.

{{InteractiveExample("Wat Demo: nearest", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2.7 ;; load a number onto the stack
    f32.nearest ;; round to the nearest integer
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
value_type.nearest
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `nearest`:
    - `f32`
    - `f64`
    - `f32x4`
    - `f64x2`
- `nearest`
  - : The `nearest` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input value.
- `output`
  - : The output value.

For a non-SIMD `nearest`, these will be basic numeric values such as `3.5` or `3`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `nearest`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 3.5 6.0 10.1 40.9`.

### Binary encoding

| Instruction     | Binary format  | Example text => binary              |
| --------------- | -------------- | ----------------------------------- |
| `f32.nearest`   | `0x90`         | `f32.nearest` => `0x90`             |
| `f64.nearest`   | `0x9e`         | `f64.nearest` => `0x9e`             |
| `f32x4.nearest` | `0xfd 106:u32` | `f32x4.nearest` => `0xfd 0x6a`      |
| `f64x2.nearest` | `0xfd 148:u32` | `f64x2.nearest` => `0xfd 0x94 0x01` |

## Examples

### SIMD nearest rounding

In this example, we demonstrate using `nearest` to round a SIMD value.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_nearest
<p></p>
```

```js live-sample___simd_nearest
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f32` parameter. We then declare a SIMD `f32x4` value and use `f32x4.nearest` to round all its lanes to the nearest integer. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_nearest
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f32x4 400.3 28.5 79.9 80.1

    f32x4.nearest ;; convert lanes to nearest integer
    f32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_nearest", "100%", 100)}}

`80` is output because it is the nearest whole number to the value in lane `3` of the input value (`80.1`).
