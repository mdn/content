---
title: "trunc: Wasm text instruction"
short-title: trunc
slug: WebAssembly/Reference/Numeric/trunc
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`trunc`** instruction, short for _truncate_, is used for getting the value of a floating point number without its fractional part.

`trunc` differs from [**`floor`**](/en-US/docs/WebAssembly/Reference/Numeric/floor) when used on negative numbers — `floor` will round down in those cases while `trunc` will round up.

There's are other types of `trunc` instruction (see [**`trunc_int`**](/en-US/docs/WebAssembly/Reference/Numeric/trunc_int)) that truncate the fractional part of a floating point and convert it to an integer.

{{InteractiveExample("Wat Demo: trunc", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main

    f32.const -2.7 ;; load a number onto the stack
    f32.trunc ;; discard everything after the decimal point
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
value_type.trunc
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `trunc`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `trunc`
  - : The `trunc` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

For a non-SIMD `trunc`, these will be basic numeric values such as `14.3` or `3.0`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `trunc`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 100.5 6.0 7.8 83.1`.

### Binary encoding

| Instruction   | Binary format  | Example text => binary       |
| ------------- | -------------- | ---------------------------- |
| `f32.trunc`   | `0x8f`         | `f32.trunc` => `0x8f`        |
| `f64.trunc`   | `0x9d`         | `f64.trunc` => `0x9d`        |
| `f32x4.trunc` | `0xfd 105:u32` | `f32x4.trunc` => `0xfd 0x69` |
| `f64x2.trunc` | `0xfd 122:u32` | `f64x2.trunc` => `0xfd 0x7a` |

## Examples

### SIMD `trunc` example

In this example, we demonstrate running `trunc` on a SIMD value and outputting one of the lane values of the result.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_trunc
<p></p>
```

```js live-sample___simd_trunc
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f64` parameter. We then declare a SIMD `f64x2` value and use `f64x2.trunc` to remove the fractional part of each lane. Finally we extract the value stored in lane `1` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_trunc
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f64)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const f64x2 3.9 2000.1

    f64x2.trunc ;; truncate each value
    f64x2.extract_lane 1 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_trunc", "100%", 100)}}

`2000` is output because this is the result of removing the fractional part from lane 1 of the input value (`2000.1`).
