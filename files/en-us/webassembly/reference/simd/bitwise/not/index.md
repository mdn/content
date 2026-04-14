---
title: "not: Wasm SIMD bitwise instruction"
short-title: not
slug: WebAssembly/Reference/SIMD/bitwise/not
page-type: webassembly-instruction
browser-compat: webassembly.simd.not
sidebar: webassemblysidebar
---

The **`not`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) performs a bitwise NOT on each byte of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value and returns a new `v128` value containing the result.

{{InteractiveExample("Wat Demo: not", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 10 23 56 15 25 29 92 45
    v128.not

    i8x16.extract_lane_u 15
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, the `i16x8 10 23 56 15 25 29 92 45` value is stored as a series of 16 hex values in the `v128`:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
```

When running `v128.not` on the value, each value has a bitwise NOT performed on it, meaning that each byte `b` becomes `0xFF - b`:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
Hex after NOT  F5 FF E8 FF C7 FF F0 FF E6 FF E2 FF A3 FF D2 FF
```

The resulting output `v128` value is a `i8x16`, therefore `i8x16.extract_lane_u 15` outputs the value in the last lane. This is equal to `255` (`0xff`), which is the bitwise NOT of `00` (`0x00`).

In other words:

```plain
    0 0 0 0 0 0 0 0
NOT 1 1 1 1 1 1 1 1
```

## Syntax

```plain
v128.not
```

- `v128.not`
  - : The `v128.not` instruction.

### Type

```plain
[input] -> [output]
```

- `input`
  - : The input `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction | Binary format | Example text => binary    |
| ----------- | ------------- | ------------------------- |
| `v128.not`  | `0xfd 77:u32` | `v128.not` => `0xfd 0x4d` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD bitwise instructions](/en-US/docs/WebAssembly/Reference/SIMD/bitwise)
