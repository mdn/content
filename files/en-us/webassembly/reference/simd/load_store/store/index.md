---
title: "store: Wasm SIMD load/store instruction"
short-title: store
slug: WebAssembly/Reference/SIMD/load_store/store
page-type: webassembly-instruction
browser-compat: webassembly.simd.store
sidebar: webassemblysidebar
---

The **`store`** [SIMD load/store instruction](/en-US/docs/WebAssembly/Reference/SIMD/load_store) stores all lanes of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation at a given memory address.

{{InteractiveExample("Wat Demo: store", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i16x8 20 30 40 50 60 70 80 90
    v128.store

    i32.const 0
    v128.load
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
v128.store

;; With optional immediate operands
v128.store mem_idx offset=int align=int
```

- `v128.store`
  - : The `v128.store` instruction.
- `mem_idx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the value before storing. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1` and the default and maximum value is `16`. An `align` value has to be a power of `2`.

### Type

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : An integer representing the memory address to store the `input` at.
- `input`
  - : The `v128` type to store.

### Binary encoding

| Instruction  | Binary format                                 | Example text => binary                                    |
| ------------ | --------------------------------------------- | --------------------------------------------------------- |
| `v128.store` | `0xfd 11:u32 mem_idx:u8 offset:u32 align:u32` | `v128.store 0 offset=0 align=16` => `0xfd 0x0b 0x04 0x00` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=16` is equivalent to `0x04` (`2^4`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load/store instructions](/en-US/docs/WebAssembly/Reference/SIMD/load_store)
