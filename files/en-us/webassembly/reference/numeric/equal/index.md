---
title: Equal
slug: WebAssembly/Reference/Numeric/Equal
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

The **`eq`** instructions, short for _equal_, check if two numbers are equal. If both numbers are equal `1` will be pushed on to the stack, otherwise `0` will be pushed on to the stack.

Similarly, the **`eqz`** instructions check if a number is equal to zero, the **`eqz`** instructions are only available for the integer types and not for the floating point types.

{{InteractiveExample("Wat Demo: eq", "tabbed-taller")}}

```wat interactive-example
(module
  (import "env" "log_bool" (func $log_bool (param i32)))
  (func $main
    ;; load `10` and `2` onto the stack
    i32.const 10
    i32.const 2

    i32.eq ;; check if `10` is equal to `2`
    call $log_bool ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";

function log_bool(value) {
  console.log(Boolean(value));
  // Expected output: false
}

await WebAssembly.instantiateStreaming(fetch(url), {
  env: { log_bool },
});
```

## Syntax

```wasm
;; load 2 numbers on to the stack
local.get $num
i32.const 2

;; check if $num is equal to '2'
i32.eq

;; if $num is equal to `2`, `1` will be pushed on to the stack,
;; otherwise `0` will be pushed on to the stack.
```

| Instruction | Binary opcode |
| ----------- | ------------- |
| `i32.eqz`   | `0x45`        |
| `i32.eq`    | `0x46`        |
| `i64.eqz`   | `0x50`        |
| `i64.eq`    | `0x51`        |
| `f32.eq`    | `0x5b`        |
| `f64.eq`    | `0x61`        |
