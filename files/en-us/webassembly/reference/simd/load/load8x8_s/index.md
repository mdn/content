---
title: "load8x8_s: Wasm SIMD load instruction"
short-title: load8x8_s
slug: WebAssembly/Reference/SIMD/load/load8x8_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.load8x8_s
sidebar: webassemblysidebar
---

The **`load8x8_s`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads eight 8-bit integers from a given memory address and sign extends each one to a 16-bit lane, outputting a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) type `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: load8x8_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load8x8_s
    i16x8.extract_lane_s 7
    call $log
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
;; Common usage
v128.load8x8_s

;; With optional immediates
v128.load8x8_s memidx offset=int align=int
```

- `v128.load8x8_s`
  - : The `v128.load8x8_s` instruction.
- `memidx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the memory address before loading. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1` and the default and maximum value is `8`. An `align` value has to be a power of `2`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` type `i16x8` value interpretation.

### Binary encoding

| Instruction      | Binary format                               | Example text => binary                                       |
| ---------------- | ------------------------------------------- | ------------------------------------------------------------ |
| `v128.load8x8_s` | `0xFD 1:u32 memidx:u8 offset:u32 align:u32` | `v128.load8x8_s 0 offset=0 align=2` => `0xfd 0x01 0x01 0x00` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=8` is equivalent to `0x03` (`2^3`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
