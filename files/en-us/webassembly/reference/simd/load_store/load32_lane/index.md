---
title: "load32_lane: Wasm SIMD load/store instruction"
short-title: load32_lane
slug: WebAssembly/Reference/SIMD/load_store/load32_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.load32_lane
sidebar: webassemblysidebar
---

The **`load32_lane`** [SIMD load/store instruction](/en-US/docs/WebAssembly/Reference/SIMD/load_store) loads a single value from a given memory address into the specified lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) type `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: load32_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i32x4 216 830 6 9000
    v128.load32_lane 3
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
v128.load32_lane lane_value

;; With optional immediate operands
v128.load32_lane mem_idx offset=int align=int lane_value
```

- `v128.load32_lane`
  - : The `v128.load32_lane` instruction.
- `mem_idx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories. The default is `0`.
- `offset=int` {{optional_inline}}
  - : An integer representing a constant number of bytes to add to the memory address before loading. The default is `0`.
- `align=int` {{optional_inline}}
  - : An integer representing a hint to the Wasm engine about what alignment to expect for the final address. The minimum value is `1` and the default and maximum value is `4`. An `align` value has to be a power of `2`.
- `lane_value`
  - : The lane to load a value into.

### Type

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `input`
  - : The input `v128` type `i32x4` value interpretation.
- `output`
  - : The output `v128` type `i32x4` value interpretation.

### Binary encoding

| Instruction        | Binary format                                             | Example text => binary                                                |
| ------------------ | --------------------------------------------------------- | --------------------------------------------------------------------- |
| `v128.load32_lane` | `0xFD 86:u32 mem_idx:u8 offset:u32 align:u32 lane_idx:u8` | `v128.load32_lane 0 offset=0 align=4 3` => `0xfd 0x56 0x02 0x00 0x03` |

> [!NOTE]
> While Wasm text format specifies the literal `align` value, the binary equivalent represents the exponent of the formula `2^x` used to calculate the alignment. So for example, `align=1` is equivalent to `0x00` (`2^0`), while `align=4` is equivalent to `0x02` (`2^2`).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load/store instructions](/en-US/docs/WebAssembly/Reference/SIMD/load_store)
