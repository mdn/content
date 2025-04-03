---
title: AND
slug: WebAssembly/Reference/Numeric/AND
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`and`** instructions, are used for performing a bitwise AND, similar to the **`&`** operator in other languages.

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

```wasm
;; load two numbers onto the stack
i32.const 5   ;; 00000101
i32.const 3   ;; 00000011

;; perform a bitwise AND
i32.and

;; the top item on the stack will now be 1 (00000001)
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.and`   | `0x71`        |
| `i64.and`   | `0x83`        |
