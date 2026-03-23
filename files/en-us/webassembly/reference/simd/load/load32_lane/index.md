---
title: "load32_lane: Wasm SIMD load instruction"
short-title: load32_lane
slug: WebAssembly/Reference/SIMD/load/load32_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.load32_lane
sidebar: webassemblysidebar
---

The **`load32_lane`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into the specified lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i32x4` value interpretation.

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
v128.load32_lane lane_value
```

- `load32_lane`
  - : The `load32_lane` instruction. Must always be included after `v128.`.
- `lane_value`
  - : The lane to load a value into.

### Type

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `input`
  - : The input `v128` `i32x4` value interpretation.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction        | Binary format                                | Example text => binary                               |
| ------------------ | -------------------------------------------- | ---------------------------------------------------- |
| `v128.load32_lane` | `0xFD 86:u32 align:u32 offset:u32 𝑖:laneidx` | `v128.load32_lane 0 0` => `0xfd 0x56 0x00 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
