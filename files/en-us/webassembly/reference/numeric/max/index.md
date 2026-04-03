---
title: "max: Wasm text instruction"
short-title: max
slug: WebAssembly/Reference/Numeric/max
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`max`** instruction is used for getting the higher of two floating point numbers.

{{InteractiveExample("Wat Demo: max", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load 10 and 2 onto the stack
    f32.const 10
    f32.const 2

    f32.max ;; calculate the higher number
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
value_type.max
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `max`:
    - `f32`
    - `f64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `f32x4`
      - `f64x2`
- `max`
  - : The `max` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input value.
- `input2`
  - : The second input value.
- `output`
  - : The output value.

For a non-SIMD `max`, the inputs will be basic numeric values such as `3.0` or `3.5`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `max`, the inputs will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `f32x4 2.0 30 86.9 120`.

The `output` will be the greater of `input1` and `input2` in the case of a non-SIMD `max`, or a new SIMD value with the lanes set to the higher value lane from `input1` and `input2` in each case, for a SIMD-`max`.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `f32.max`   | `0x97`         | `f32.max` => `0x97`             |
| `f64.max`   | `0xa5`         | `f64.max` => `0xa5`             |
| `f32x4.max` | `0xfd 233:u32` | `f32x4.max` => `0xfd 0xe9 0x01` |
| `f64x2.max` | `0xfd 245:u32` | `f64x2.max` => `0xfd 0xf5 0x01` |

## Examples

### SIMD `max` example

In this example, we demonstrate using `max` to return the greater value of the same lane index from two SIMD values.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_max
<p></p>
```

```js live-sample___simd_max
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `f32` parameter. We then declare two SIMD `f32x4` values, then use `f32x4.max` to return a new `f32x4` value that contains the higher lane value out of the two inputs in each case. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_max
(module
  ;; Import output function
  (import "obj" "output" (func $output (param f32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const f32x4 20 0 1015 1000
    v128.const f32x4 4 38 15 108

    ;; Return a new f32x4 containing the highest lane value in each case
    f32x4.max
    f32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_max", "100%", 100)}}

The result is `1000`. This is because the value stored in lane `3` of the first input value is `1000`, and the value stored in lane `3` of the second input value is `108`. Since `1000` is greater than `108`, the new `f32x4` value outputted by the `f32x4.max` instruction has `1000` set in lane `3`, which we then extract and output to the DOM.

## See also

- [`max_s`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_s)
- [`max_u`](/en-US/docs/WebAssembly/Reference/SIMD/arithmetic/max_u)
