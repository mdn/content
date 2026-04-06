---
title: "load8_lane: Wasm SIMD load instruction"
short-title: load8_lane
slug: WebAssembly/Reference/SIMD/load/load8_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.load8_lane
sidebar: webassemblysidebar
---

The **`load8_lane`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given memory address into the specified lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) type `i8x16` value interpretation.

{{InteractiveExample("Wat Demo: load8_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i8x16 10 4 6 5 8 7 11 3 8 12 9 7 2 31 9 1
    v128.load8_lane 9
    i8x16.extract_lane_s 9
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
v128.load8_lane lane_value

;; With optional immediates
v128.load8_lane memidx offset=int align=int lane_value
```

- `v128.load8_lane`
  - : The `v128.load8_lane` instruction.
- `memidx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the memory address before loading. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum, default, and maximum value is `1`.
- `lane_value`
  - : The lane to load a value into.

### Type

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `input`
  - : The input `v128` type `i8x16` value interpretation.
- `output`
  - : The output `v128` type `i8x16` value interpretation.

### Binary encoding

| Instruction       | Binary format                                           | Example text => binary                                               |
| ----------------- | ------------------------------------------------------- | -------------------------------------------------------------------- |
| `v128.load8_lane` | `0xFD 84:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load8_lane 0 offset=0 align=1 9` => `0xfd 0x54 0x00 0x00 0x09` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So `align=1` is equivalent to `0x00` (`2^0`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
