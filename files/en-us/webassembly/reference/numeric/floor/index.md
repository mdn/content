---
title: "floor: Wasm text instruction"
short-title: floor
slug: WebAssembly/Reference/Numeric/floor
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`floor`** instruction is used for getting the value of a number rounded down to the next integer.

`floor` differs from [**`trunc`**](/en-US/docs/WebAssembly/Reference/Numeric/trunc) when used on negative numbers — `floor` will round down in those cases while `trunc` will round up.

{{InteractiveExample("Wat Demo: floor", "tabbed-standard")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.floor ;; round down
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
value_type.floor
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `floor`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `floor`
  - : The `floor` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

For a non-SIMD `floor`, these will be basic numeric values such as `14.3` or `3.0`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `floor`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 100.5 6.0 7.8 83.1`.

### Binary encoding

| Instruction   | Binary format  | Example text => binary       |
| ------------- | -------------- | ---------------------------- |
| `f32.floor`   | `0x8e`         | `f32.floor` => `0x8e`        |
| `f64.floor`   | `0x9c`         | `f64.floor` => `0x9c`        |
| `f32x4.floor` | `0xfd 104:u32` | `f32x4.floor` => `0xfd 0x68` |
| `f64x2.floor` | `0xfd 117:u32` | `f64x2.floor` => `0xfd 0x75` |

## Examples

### SIMD `floor` example

In this example, we demonstrate running `floor` on a SIMD value and outputting one of the lane values of the result.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_floor
<p></p>
```

```js live-sample___simd_floor
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f64` parameter. We then declare a SIMD `f64x2` value and use `f64x2.floor` to round each lane down to the nearest integer. Finally we extract the value stored in lane `0` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_floor
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 3.9 2000.1

    f64x2.floor ;; Round each value down
    f64x2.extract_lane 0 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_floor", "100%", 100)}}

`3` is output because this is the result of rounding down lane 0 of the input value (`3.9`) to the nearest integer.
