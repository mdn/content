---
title: "any_true: Wasm SIMD bitwise instruction"
short-title: any_true
slug: WebAssembly/Reference/SIMD/bitwise/any_true
page-type: webassembly-instruction
browser-compat: webassembly.simd.any_true
sidebar: webassemblysidebar
---

The **`any_true`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) tests whether an `v128` input value contains any non-zero bits.

{{InteractiveExample("Wat Demo: any_true", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const f32x4 0 0 0 1.2
    v128.any_true

    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
v128.any_true
```

- `v128.any_true`
  - : The `v128.any_true` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` value interpretation. This can be an integer type (for example, `i16x8`) or floating point type (for example, `f32x4`).
- `output`
  - : The output value. This is an `i32` type equal to `1` if the `v128` input contains any non-zero bits, or `0` if all bits are `0`.

### Binary encoding

| Instruction     | Binary format | Example text => binary         |
| --------------- | ------------- | ------------------------------ |
| `v128.any_true` | `0xfd 83:u32` | `v128.any_true` => `0xfd 0x53` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD bitwise instructions](/en-US/docs/WebAssembly/Reference/SIMD/bitwise)
