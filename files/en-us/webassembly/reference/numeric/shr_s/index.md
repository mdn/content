---
title: "shr_s: Wasm text instruction"
short-title: shr_s
slug: WebAssembly/Reference/Numeric/shr_s
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`shr_s`** instructions, short for _shift-right signed_, are used for performing a bitwise right-shift on signed integers, similar to the **`>>>`** operator in other languages.

{{InteractiveExample("Wat Demo: shr_s", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "shift_right") (param $num i32) (param $by i32) (result i32)
    ;; load the number to shift and the by how many spots
    local.get $num
    local.get $by

    ;; shift and return the result
    i32.shr_s
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const shift_right = result.instance.exports.shift_right;

    const res = shift_right(0b00000000_00000000_00000000_00000111, 1);
    console.log(numToBin(res));
    // Expected output: "00000000_00000000_00000000_00000011"
  },
);

function numToBin(num) {
  return (num >>> 0)
    .toString(2)
    .padStart(32, "0")
    .match(/.{1,8}/g)
    .join("_");
}
```

## Syntax

```plain
value_type.shr_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `shr_s`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shr_s`
  - : The `shr_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[input, shift_value] -> [output]
```

- `input`
  - : The input value.
- `shift_value`
  - : The value that you want to shift the value by.
- `output`
  - : The output value.

For a non-SIMD `shr_s`, the `input` and `output` will be basic numeric values such as `3` or `12`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `shr_s`, the `input` and `output` will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 2 30 86 120`. Each lane of the output pushed to the stack contains the corresponding lane in the input value shifted to the right by the specified `shift_value`.

### Binary encoding

| Instruction   | Binary format  | Example text => binary            |
| ------------- | -------------- | --------------------------------- |
| `i32.shr_s`   | `0x75`         | `i32.shr_s` => `0x75`             |
| `i64.shr_s`   | `0x87`         | `i64.shr_s` => `0x87`             |
| `i8x16.shr_s` | `0xfd 108:u32` | `i8x16.shr_s` => `0xfd 0x6c`      |
| `i16x8.shr_s` | `0xfd 140:u32` | `i16x8.shr_s` => `0xfd 0x8c 0x01` |
| `i32x4.shr_s` | `0xfd 172:u32` | `i32x4.shr_s` => `0xfd 0xac 0x01` |
| `i64x2.shr_s` | `0xfd 204:u32` | `i64x2.shr_s` => `0xfd 0xcc 0x01` |

### SIMD right shift

In this example, we demonstrate performing a right-shift on a SIMD value and outputting one of the lane values.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_shr_s
<p></p>
```

```js live-sample___simd_shr_s
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare a SIMD `i16x8` value, then right-shift it by 2 using `i16x8.shr_s`. Finally we extract the value stored in lane `6` of the output SIMD value using the [`extract_lane_s`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane_s) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_shr_s
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i16x8 9 10 11 12 89 90 91 92
    i32.const 2

    i16x8.shr_s ;; shift-right by 2
    i16x8.extract_lane_s 6 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_shr_s", "100%", 100)}}

The result is `22`, because the value stored in lane `6` of the input value is `91`. Once shifted right by two positions, the output value's lane `6` will contain the value `22`.

## See also

- [`shl`](/en-US/docs/WebAssembly/Reference/Numeric/shl)
- [`shr_u`](/en-US/docs/WebAssembly/Reference/Numeric/shr_u)
