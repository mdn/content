---
title: OR
slug: WebAssembly/Reference/Numeric/OR
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`or`** instructions, are used for performing a bitwise OR, similar to the **`|`** operator in other languages.

{{InteractiveExample("Wat Demo: or", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "or") (param $a i32) (param $b i32) (result i32)
    ;; load both numbers onto the stack
    local.get $a
    local.get $b

    ;; `or` both numbers and return the result
    i32.or
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const or = result.instance.exports.or;

    const res = or(0b10000010, 0b01101111);
    console.log(numToBin(res));
    // Expected output: "11101111"
  },
);

function numToBin(num) {
  return (num >>> 0).toString(2).padStart(8, "0");
}
```

## Syntax

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise OR
i32.or

;; the top item on the stack will now be 7 (00000111)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.or`    | `0x72`        |
| `i64.or`    | `0x84`        |
