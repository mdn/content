---
title: "andnot: Wasm SIMD bitwise instruction"
short-title: andnot
slug: WebAssembly/Reference/SIMD/bitwise/andnot
page-type: webassembly-instruction
browser-compat: webassembly.simd.andnot
sidebar: webassemblysidebar
---

The **`andnot`** [SIMD bitwise instruction](/en-US/docs/WebAssembly/Reference/SIMD/bitwise) takes two [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) input values. It performs a bitwise AND on the first value and a second value equal to the result of performing a bitwise NOT on each byte of the second original value. It returns a new `v128` value containing the result.

{{InteractiveExample("Wat Demo: andnot", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    v128.const i16x8 10 23 56 15 25 29 92 45
    v128.const i16x8 12 42 58 25 55 91 192 4
    v128.andnot

    i8x16.extract_lane_u 6
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

In the above example, the input `i16x8 10 23 56 15 25 29 92 45` and `i16x8 12 42 58 25 55 91 192 4` values are stored as a series of 16 hex values in the `v128`s:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
```

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0C 00 2A 00 3A 00 19 00 37 00 5B 00 C0 00 04 00
```

When running `v128.andnot` on the value, the first thing that happens is that the second input value has a bitwise NOT performed on it, meaning that each byte `b` becomes `0xFF - b`:

```plain
Byte index     0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Hex value      0C 00 2A 00 3A 00 19 00 37 00 5B 00 C0 00 04 00
Hex after NOT  F3 FF D5 FF C5 FF E6 FF C8 FF A4 FF 3F FF FB FF
```

A bitwise AND is then performed on input 1 and NOT input 2:

```plain
Byte index               0  1  2  3  4  5  6  7  8  9  10 11 12 13 14 15
Input 1                  0A 00 17 00 38 00 0F 00 19 00 1D 00 5C 00 2D 00
NOT input 2              F3 FF D5 FF C5 FF E6 FF C8 FF A4 FF 3F FF FB FF
Input 1 AND NOT input 2  02 00 15 00 00 00 06 00 08 00 04 00 1C 00 29 00
```

The resulting output `v128` value is a `i8x16`, therefore `i8x16.extract_lane_u 6` outputs the value in lane `6`. This is equal to `6` (`0x06`), which is the equivalent of `15` (`0x0F`) ANDed with `230` (`0xE6`). `230` is the bitwise NOT of `25` (`0x19`).

In other words:

1. `15` (`0x0F`) in binary is `0 0 0 0 1 1 1 1`.
2. `25` (`0x19`) in binary is `0 0 0 1 1 0 0 1`.
3. Performing a bitwise not on the second value looks like this:
   ```plain
        0 0 0 1 1 0 0 1
   NOT  1 1 1 0 0 1 1 0
   ```
4. Performing a bitwise AND on the first value and the NOT of the second value looks like this:
   ```plain
        0 0 0 0 1 1 1 1
        1 1 1 0 0 1 1 0
   AND  0 0 0 0 0 1 1 0
   ```
5. `0 0 0 0 0 1 1 0` is equivalent to `6`.

## Syntax

```plain
v128.andnot
```

- `v128.andnot`
  - : The `v128.andnot` instruction.

### Type

```plain
[input1, input2] -> [output]
```

- `input1`
  - : The first input `v128` value interpretation.
- `input2`
  - : The second input `v128` value interpretation.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction   | Binary format | Example text => binary       |
| ------------- | ------------- | ---------------------------- |
| `v128.andnot` | `0xfd 79:u32` | `v128.andnot` => `0xfd 0x4f` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD bitwise instructions](/en-US/docs/WebAssembly/Reference/SIMD/bitwise)
