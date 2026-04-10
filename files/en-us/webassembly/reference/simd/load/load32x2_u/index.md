---
title: "load32x2_u: Wasm SIMD load instruction"
short-title: load32x2_u
slug: WebAssembly/Reference/SIMD/load/load32x2_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.load32x2_u
sidebar: webassemblysidebar
---

The **`load32x2_u`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads two 32-bit integers from a given memory address and zero extends each one to a 64-bit lane, outputting a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) type `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: load32x2_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load32x2_u
    i64x2.extract_lane 1
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
v128.load32x2_u

;; With optional immediate operands
v128.load32x2_u mem_idx offset=int align=int
```

- `v128.load32x2_u`
  - : The `v128.load32x2_u` instruction.
- `mem_idx` {{optional_inline}}
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
  - : The output `v128` type `i64x2` value interpretation.

### Binary encoding

| Instruction       | Binary format                                | Example text => binary                                        |
| ----------------- | -------------------------------------------- | ------------------------------------------------------------- |
| `v128.load32x2_u` | `0xFD 6:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32x2_u 0 offset=0 align=8` => `0xfd 0x06 0x03 0x00` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=8` is equivalent to `0x03` (`2^3`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
