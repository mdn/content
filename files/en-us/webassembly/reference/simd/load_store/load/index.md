---
title: "load: Wasm SIMD load/store instruction"
short-title: load
slug: WebAssembly/Reference/SIMD/load_store/load
page-type: webassembly-instruction
browser-compat: webassembly.simd.load
sidebar: webassemblysidebar
---

The **`load`** [SIMD load/store instruction](/en-US/docs/WebAssembly/Reference/SIMD/load_store) loads all lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation with values from a given memory address.

{{InteractiveExample("Wat Demo: load", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\00\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 5
    v128.load
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
v128.load

;; With optional immediate operands
v128.load mem_idx offset=int align=int
```

- `v128.load`
  - : The `v128.load` instruction.
- `mem_idx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the memory address before loading. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1` and the default and maximum value is `16`. An `align` value has to be a power of `2`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` type.

### Binary encoding

| Instruction | Binary format                                | Example text => binary                                   |
| ----------- | -------------------------------------------- | -------------------------------------------------------- |
| `v128.load` | `0xfd 0:u32 mem_idx:u8 offset:u32 align:u32` | `v128.load 0 offset=0 align=16` => `0xfd 0x00 0x04 0x00` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=16` is equivalent to `0x04` (`2^4`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load/store instructions](/en-US/docs/WebAssembly/Reference/SIMD/load_store)
