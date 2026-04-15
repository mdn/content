---
title: "load32_splat: Wasm SIMD load instruction"
short-title: load32_splat
slug: WebAssembly/Reference/SIMD/load/load32_splat
page-type: webassembly-instruction
browser-compat: webassembly.simd.load32_splat
sidebar: webassemblysidebar
---

The **`load32_splat`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given memory address into all lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` type value interpretation.

{{InteractiveExample("Wat Demo: load32_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load32_splat
    i32x4.extract_lane 3
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
v128.load32_splat

;; With optional immediate operands
v128.load32_splat mem_idx offset=int align=int
```

- `v128.load32_splat`
  - : The `v128.load32_splat` instruction.
- `mem_idx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the memory address before loading. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1` and the default and maximum value is `4`. An `align` value has to be a power of `2`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` type `i32x4` value interpretation.

### Binary encoding

| Instruction         | Binary format                                | Example text => binary                                          |
| ------------------- | -------------------------------------------- | --------------------------------------------------------------- |
| `v128.load32_splat` | `0xFD 9:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load32_splat 0 offset=0 align=4` => `0xfd 0x09 0x02 0x00` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=4` is equivalent to `0x02` (`2^2`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
