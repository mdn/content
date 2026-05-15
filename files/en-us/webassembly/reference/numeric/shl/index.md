---
title: "shl: Wasm text instruction"
short-title: shl
slug: WebAssembly/Reference/Numeric/shl
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`shl`** instruction, short for _shift-left_, is used for performing a bitwise left-shift, similar to the **`<<`** operator in other languages.

{{InteractiveExample("Wat Demo: shl", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "shift_left") (param $num i32) (param $by i32) (result i32)
    ;; load the number to shift and the by how many spots
    local.get $num
    local.get $by

    ;; shift and return the result
    i32.shl
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const shift_left = result.instance.exports.shift_left;

    const res = shift_left(0b11100000_00000000_00000000_00000000, 1);
    console.log(numToBin(res));
    // Expected output: "11000000_00000000_00000000_00000000"
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
value_type.shl
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `shl`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) interpretations:
      - `i8x16`
      - `i16x8`
      - `i32x4`
      - `i64x2`
- `shl`
  - : The `shl` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `shl`, the `input` and `output` will be basic numeric values such as `3` or `10`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `shl`, the `input` and `output` will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 4 8 12 16`. Each lane of the output pushed to the stack contains the corresponding lane in the input value shifted to the left by the specified `shift_value`.

### Binary encoding

| Instruction | Binary format  | Example text => binary          |
| ----------- | -------------- | ------------------------------- |
| `i32.shl`   | `0x74`         | `i32.shl` => `0x74`             |
| `i64.shl`   | `0x86`         | `i64.shl` => `0x86`             |
| `i8x16.shl` | `0xfd 107:u32` | `i8x16.shl` => `0xfd 0x6b`      |
| `i16x8.shl` | `0xfd 139:u32` | `i16x8.shl` => `0xfd 0x8b 0x01` |
| `i32x4.shl` | `0xfd 171:u32` | `i32x4.shl` => `0xfd 0xab 0x01` |
| `i64x2.shl` | `0xfd 203:u32` | `i64x2.shl` => `0xfd 0xcb 0x01` |

## Examples

### Basic usage

```wat
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; left shift one spot

;; perform a bitwise left-shift
i32.shl

;; the top item on the stack will now be 14 (00001110)
```

### SIMD left shift

In this example, we demonstrate performing a left-shift on a SIMD value and outputting one of the lane values.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_shl
<p></p>
```

```js live-sample___simd_shl
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare a SIMD `i32x4` value, then left-shift it by 2 using `i32x4.shl`. Finally we extract the value stored in lane `3` of the output SIMD value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_shl
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 9 10 11 12
    i32.const 2

    i32x4.shl ;; shift-left by 2
    i32x4.extract_lane 3 ;; Extract a value from the result

    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_shl", "100%", 100)}}

The result is `48`, because the value stored in lane `3` of the input value is `12`. Once shifted left by two positions, the output value's lane `3` will contain the value `48`.

## See also

- [`shr_s`](/en-US/docs/WebAssembly/Reference/Numeric/shr_s)
- [`shr_u`](/en-US/docs/WebAssembly/Reference/Numeric/shr_u)
