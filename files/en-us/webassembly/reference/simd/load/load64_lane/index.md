---
title: "load64_lane: Wasm SIMD load instruction"
short-title: load64_lane
slug: WebAssembly/Reference/SIMD/load/load64_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.load64_lane
sidebar: webassemblysidebar
---

The **`load64_lane`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into the specified lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: load64_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i64x2 90000000 216000
    v128.load64_lane offset=0 align=1 0
    i64x2.extract_lane 0
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
v128.load64_lane memidx offset=int align=int laneidx
```

- `load64_lane`
  - : The `load64_lane` instruction. Must always be included after `v128.`.
- `memidx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=number` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the memory address before loading. The default is `0`.
- `align=number` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1`, the default is `8`, and `align` values have to be a power of `2`.
    > [!NOTE]
    > While Wasm text format specifies the literal alignment number, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=8` is equivalent to `0x03` (`2^3`).
- `laneidx`
  - : An integer representing the index of the lane to load a value into.

### Type

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `input`
  - : The input `v128` `i64x2` value interpretation.
- `output`
  - : The output `v128` `i64x2` value interpretation.

### Binary encoding

| Instruction        | Binary format                                           | Example text => binary                                                |
| ------------------ | ------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load64_lane` | `0xFD 87:u32 memidx:u8 offset:u32 align:u32 laneidx:u8` | `v128.load64_lane 0 offset=0 align=8 0` => `0xfd 0x57 0x03 0x00 00x0` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
