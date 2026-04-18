---
title: "store64_lane: Wasm SIMD load/store instruction"
short-title: store64_lane
slug: WebAssembly/Reference/SIMD/load_store/store64_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.store64_lane
sidebar: webassemblysidebar
---

The **`store64_lane`** [SIMD load/store instruction](/en-US/docs/WebAssembly/Reference/SIMD/load_store) stores a specified lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i64x2` value interpretation at a given memory address.

{{InteractiveExample("Wat Demo: store64_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (func $main
    i32.const 0
    v128.const i64x2 8000001 16000001
    v128.store64_lane 1

    i32.const 0
    v128.load
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
;; Common usage
v128.store64_lane lane_idx

;; With optional immediate operands
v128.store64_lane mem_idx offset=int align=int lane_idx
```

- `v128.store64_lane`
  - : The `v128.store64_lane` instruction.
- `mem_idx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the address before storing. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1` and the default and maximum value is `8`. An `align` value has to be a power of `2`.
- `lane_idx`
  - : The index of the lane whose value you want to store.

### Type

```plain
[memory_address, input] -> []
```

- `memory_address`
  - : An integer representing the memory address to store the `input` at.
- `input`
  - : The `v128` type from which to extract a lane value to store.

### Binary encoding

| Instruction         | Binary format                                           | Example text => binary                                                 |
| ------------------- | ------------------------------------------------------- | ---------------------------------------------------------------------- |
| `v128.store64_lane` | `0xfd 91:u32 mem_idx:u8 offset:u32 align:u32 l:laneidx` | `v128.store64_lane 0 offset=0 align=8 1` => `0xfd 0x5b 0x03 0x00 0x01` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=8` is equivalent to `0x03` (`2^3`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load/store instructions](/en-US/docs/WebAssembly/Reference/SIMD/load_store)
