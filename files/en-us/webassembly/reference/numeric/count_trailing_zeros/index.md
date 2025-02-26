---
title: Count trailing zeros
slug: WebAssembly/Reference/Numeric/Count_trailing_zeros
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`ctz`** instructions, short for _count trailing zeros_, are used to count the amount of zeros at the end of the numbers binary representation.

{{InteractiveExample("Wat Demo: ctz", "tabbed-taller")}}

```wat interactive-example
(module

  (func (export "trailing0") (param $num i32) (result i32)
    ;; load  number onto the stack
    local.get $num

    ;; check how many trailing zeros and return the result
    i32.ctz
  )

)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console }).then(
  (result) => {
    const trailing0 = result.instance.exports.trailing0;

    console.log(
      `Trailing zeros: ${trailing0(0b00000000_10000000_00000000_00000000)}`,
    );
    // Expected output: "Trailing zeros: 23"
  },
);
```

## Syntax

```wasm
;; load a number onto the stack
i32.const 8388608 ;; 00000000_10000000_00000000_00000000

;; count trailing zeros
i32.ctz

;; the top item on the stack will now be 23
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.ctz`   | `0x68`        |
| `i64.ctz`   | `0x7a`        |
