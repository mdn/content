---
title: call
slug: WebAssembly/Reference/Control_flow/call
page-type: webassembly-instruction
sidebar: webassemblysidebar
---

**`call`** calls a function, `return_call` being the tail-call version of it. `call_indirect` calls a function in a table with the `return_call_indirect` tail-call version as well.

## Examples

Calling the `greet` function imported from JavaScript using `call`:

{{InteractiveExample("Wat Demo: call", "tabbed-standard")}}

```wat interactive-example
(module
  ;; Import the `greet` function from the environment
  (import "env" "greet" (func $greet))

  (func
    ;; Call the imported `greet` function
    call $greet
  )

  ;; Automatically run the first function when the module starts
  (start 1)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), {
  env: {
    greet: function () {
      console.log("Hello");
      // Expected output: "Hello"
    },
  },
});
```

Calculating factorial for a number using `return_call` and logging the result using the exported `fac` function:

{{InteractiveExample("Wat Demo: return_call", "tabbed-standard")}}

```wat interactive-example
(module
  ;; Calculate the factorial of a number
  (func $fac (export "fac") (param $x i64) (result i64)
    ;; Call the `fac-aux` function with $x and 1 parameters
    (return_call $fac-aux (local.get $x) (i64.const 1))
  )

  ;; Perform the factorial calculation
  (func $fac-aux (param $x i64) (param $r i64) (result i64)
    ;; If $x is zero, return the accumulated result $r
    (if (result i64) (i64.eqz (local.get $x))
      (then (return (local.get $r)))
      (else
        ;; Otherwise, recursively call `fac-aux` with $x-1 and $x*$r
        (return_call $fac-aux
          (i64.sub (local.get $x) (i64.const 1))
          (i64.mul (local.get $x) (local.get $r))
        )
      )
    )
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
const { instance } = await WebAssembly.instantiateStreaming(fetch(url));
const result = instance.exports.fac(5n);

console.log(result);
// Expected output: 120n
```

## Syntax

```wasm
call $greet
```

| Instruction            | Binary opcode |
| ---------------------- | ------------- |
| `call`                 | `0x10`        |
| `call_indirect`        | `0x11`        |
| `return_call`          | `0x12`        |
| `return_call_indirect` | `0x13`        |

## See also

- [Tail Call Extension proposal overview](https://github.com/WebAssembly/tail-call/blob/main/proposals/tail-call/Overview.md)
- [V8 on WebAssembly tail calls support](https://v8.dev/blog/wasm-tail-call)
