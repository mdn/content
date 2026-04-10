---
title: "xor: Wasm text instruction"
short-title: xor
slug: WebAssembly/Reference/Numeric/xor
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`xor`** instruction is used for performing a bitwise XOR, similar to the **`^`** operator in other languages.

{{InteractiveExample("Wat Demo: xor", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "xor") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `xor` both numbers and return the result
    i32.xor
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const xor = result.instance.exports.xor;

    const res = xor(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "11101101"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```plain
value_type.xor
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `xor`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128)
- `xor`
  - : The `xor` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `xor`, these will be basic numeric values such as `14` or `3`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `xor`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 9 4 -16 100`. Each lane of the output pushed to the stack is the bitwise XOR of the corresponding lanes in the input values.

### Binary encoding

| Instruction | Binary format | Example text => binary    |
| ----------- | ------------- | ------------------------- |
| `i32.xor`   | `0x73`        | `i32.xor` => `0x73`       |
| `i64.xor`   | `0x85`        | `i64.xor` => `0x85`       |
| `v128.xor`  | `0xfd 81:u32` | `v128.xor` => `0xfd 0x51` |

## Examples

### SIMD xor example

In this example, we demonstrate running `v128.xor` on two SIMD values and outputting one of the lane values of the result.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_xor
<p></p>
```

```js live-sample___simd_xor
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i32x4` values and use `v128.xor` to "xor" the bits of each value's binary representation. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_xor
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 12 10 11 782
    v128.const i32x4 12 14 15 400

    v128.xor ;; "xor" the two values
    i32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_xor", "100%", 100)}}

`670` is output because this is the result of "xor"ing lane 3 of the first value (`782`) and the second value (`400`). If you look at their binary equivalents, it is clear how this works:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
XOR = 0000 0010 1001 1110 = 670
```
