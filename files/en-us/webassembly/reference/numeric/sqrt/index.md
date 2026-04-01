---
title: "sqrt: Wasm text instruction"
short-title: sqrt
slug: WebAssembly/Reference/Numeric/sqrt
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`sqrt`** instruction, short for _square root_, is used to get the square root of a number.

{{InteractiveExample("Wat Demo: sqrt", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const 2 ;; load a number onto the stack
    f32.sqrt ;; calculate the square root
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
value_type.sqrt
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `sqrt`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `sqrt`
  - : The `sqrt` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input value.
- `output`
  - : The output value. Successful results will only be returned for positive numbers; trying to calculate the square root of a negative number will yield an output value of {{jsxref("NaN")}}.

For a non-SIMD `sqrt`, these will be basic numeric values such as `3.5` or `9`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `sqrt`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 9 3.8 -16 101`.

### Binary encoding

| Instruction  | Binary format  | Example text => binary           |
| ------------ | -------------- | -------------------------------- |
| `f32.sqrt`   | `0x91`         | `f32.sqrt` => `0x91`             |
| `f64.sqrt`   | `0x9f`         | `f64.sqrt` => `0x9f`             |
| `f32x4.sqrt` | `0xfd 227:u32` | `f32x4.sqrt` => `0xfd 0xe3 0x01` |
| `f64x2.sqrt` | `0xfd 239:u32` | `f64x2.sqrt` => `0xfd 0xef 0x01` |

## Examples

### SIMD sqrt usage

In this example, we demonstrate using `sqrt` to calculate the square roots of all of a SIMD value's lane contents.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_sqrt
<p></p>
```

```js live-sample___simd_sqrt
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f64` parameter. We then declare a SIMD `f64x2` value and use `f64x2.sqrt` to calculate the square roots of all its lanes. Finally we extract the value stored in lane `1` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_sqrt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 811.5 9

    f64x2.sqrt ;; output all square roots in a new f64x2 value
    f64x2.extract_lane 0 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_sqrt", "100%", 100)}}

`28.48683906648823` is output because this is the square root of the value in lane 1 of the input value (`811.5`).
