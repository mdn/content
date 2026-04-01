---
title: "and: Wasm text instruction"
short-title: and
slug: WebAssembly/Reference/Numeric/and
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`and`** instruction is used for performing a bitwise AND, similar to the **`&`** operator in other languages.

{{InteractiveExample("Wat Demo: and", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "and") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `and` both numbers and return the result
    i32.and
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const and = result.instance.exports.and;

    const res = and(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "00000010"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```plain
value_type.and
```

- `value_type`
  - : The type of value the instruction is being run on. The following types support `and`:
    - `i32`
    - `i64`
    - [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128)
- `and`
  - : The `and` instruction. Must always be included after the `value_type` and a period (`.`).

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

For a non-SIMD `and`, these will be basic numeric values such as `14` or `3`.

For a [SIMD](/en-US/docs/WebAssembly/Reference/SIMD) `and`, these will be [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations, for example `i32x4 9 4 -16 100`.

### Binary encoding

| Instruction | Binary format | Example text => binary    |
| ----------- | ------------- | ------------------------- |
| `i32.and`   | `0x71`        | `i32.and` => `0x71`       |
| `i64.and`   | `0x83`        | `i64.and` => `0x83`       |
| `v128.and`  | `0xfd 78:u32` | `v128.and` => `0xfd 0x4e` |

## Examples

### SIMD and example

In this example, we demonstrate running `v128.and` on two SIMD values and outputting one of the lane values of the result.

#### JavaScript

In our script, we grab a reference to a {{htmlelement("p")}} element that we will output our result to, then define an object for import into Wasm containing a single function that writes a value to the output `<p>`. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the object in the process.

```html hidden live-sample___simd_and
<p></p>
```

```js live-sample___simd_and
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

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has an `i32` parameter. We then declare two SIMD `i32x4` values and use `v128.and` to "and" the bits of each value's binary representation. Finally we extract the value stored in lane `3` of the output value using the [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane) instruction, and output it to the DOM by calling the imported `output()` function.

```wat live-sample___simd_and
(module
  ;; Import output function
  (import "obj" "output" (func $output (param i32)))

  (func $main
    ;; load two SIMD values onto the stack
    v128.const i32x4 12 10 11 782
    v128.const i32x4 12 14 15 400

    v128.and ;; "and" the two values
    i32x4.extract_lane 3 ;; Extract a value from the result
    call $output
  )

  (start $main)
)
```

#### Result

The output is as follows:

{{embedlivesample("simd_and", "100%", 100)}}

`256` is output because this is the result of "and"ing lane 3 of the first value (`782`) and the second value (`400`). If you look at their binary equivalents, it is clear how this works:

```plain
782 = 0000 0011 0000 1110
400 = 0000 0001 1001 0000
      -------------------
AND = 0000 0001 0000 0000 = 256
```
