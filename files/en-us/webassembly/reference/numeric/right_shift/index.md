---
title: Right shift
slug: WebAssembly/Reference/Numeric/Right_shift
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`shr`** instructions, short for _shift-right_, are used for performing a bitwise right-shift, similar to the **`>>>`** operator in other languages.

{{InteractiveExample("Wat Demo: shr", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "shift_right") (param $num i32) (param $by i32) (result i32)
    ;; load the number to shift and the by how many spots
    local.get $num
    local.get $by

    ;; shift and return the result
    i32.shr_u
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

```wasm
;; load two numbers onto the stack
i32.const 7   ;; 00000111
i32.const 1   ;; right shift one spot

;; perform a bitwise right-shift
i32.shr_u

;; the top item on the stack will now be 3 (00000011)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.shr_s` | `0x75`        |
| `i32.shr_u` | `0x76`        |
| `i64.shr_s` | `0x87`        |
| `i64.shr_u` | `0x88`        |
