---
title: "popcnt: Wasm text instruction"
short-title: popcnt
slug: WebAssembly/Reference/Numeric/popcnt
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`popcnt`** instruction, short for _population count_, is used to count the amount of `1`s in a number's binary representation.

{{InteractiveExample("Wat Demo: popcnt", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "count1s") (param $num i32) (result i32)
    ;; load the number onto the stack
    local.get $num

    ;; count the amount of 1s and return the result
    i32.popcnt
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const count1s = result.instance.exports.count1s;

    console.log(count1s(0b10000010));
    // Expected output: 2
  },
);
```

## Syntax

```plain
value_type.popcnt
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `popcnt`:
    - `i32`
    - `i64`
    - `i8x16` [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretation
- `popcnt`
  - : The `popcnt` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input value.
- `output`
  - : The output value.

For a non-SIMD `popcnt`, these will be basic numeric values such as `3`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `popcnt`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i8x16 0 1 34 12 2 2 2 8 19 20 3 -1 -45 0 0 30`.

### Binary encoding

| Instruction    | Binary format | Example text => binary        |
| -------------- | ------------- | ----------------------------- |
| `i32.popcnt`   | `0x69`        | `i32.popcnt` => `0x69`        |
| `i64.popcnt`   | `0x7b`        | `i64.popcnt` => `0x7b`        |
| `i8x16.popcnt` | `0xfd 98:u32` | `i8x16.popcnt` => `0xfd 0x62` |

## Examples

### SIMD popcnt usage

In this example, we demonstrate using `popcnt` to count the amount of `1`s in the binary representation of a SIMD value's lane contents.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_popcnt
<p></p>
```

```js live-sample___simd_popcnt
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare a SIMD `i8x16` value and use `i8x16.popcnt` to count the binary `1`s in all its lanes. Finally we extract the value stored in lane `15` of the output value using the [`extract_lane_s`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_popcnt
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load a SIMD value onto the stack
    v128.const i8x16 0 1 34 12 2 2 2 8 19 20 3 -1 -45 0 0 30

    i8x16.popcnt ;; count 1s in all the lanes and output as a new i8x16 value
    i8x16.extract_lane_s 15 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_popcnt", "100%", 100)}}

`4` is output because the value in lane 15 of the input value is `30`. `30` in binary is `00011110`, which has 4 `1`s in it.
