---
title: Right rotate
slug: WebAssembly/Reference/Numeric/Right_rotate
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`rotr`** instructions, short for _rotate-right_, are used for performing a bitwise right-rotate.

{{InteractiveExample("Wat Demo: rotr", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "rotate_right") (param $num i32) (param $by i32) (result i32)
    ;; load the number to rotate and the by how many spots
    local.get $num
    local.get $by

    ;; rotate and return the result
    i32.rotr
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const rotate_right = result.instance.exports.rotate_right;

    const res = rotate_right(0b00000000_00000000_00000000_00000111, 1);
    console.log(numToBin(res));
    // Expected output: "10000000_00000000_00000000_00000011"
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
i32.const 7   ;; 00000000_00000000_00000000_00000111
i32.const 1   ;; right rotate one spot

;; perform a bitwise right-rotate
i32.rotr

;; the top item on the stack will now be 2147483651
;; (10000000_00000000_00000000_00000011)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.rotr`  | `0x78`        |
| `i64.rotr`  | `0x8a`        |
