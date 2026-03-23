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
    v128.load64_lane 0 offset=0 align=0
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
v128.load64_lane memidx offset align laneidx
```

- `load64_lane`
  - : The `load64_lane` instruction. Must always be included after `v128.`.
- `memidx` {{optional_inline}}
  - : An integer representing the memory index, in cases where the module uses multiple memories.
- `offset` {{optional_inline}}
  - : An integer representing an offset value for [EDITORIAL: I'm not sure what to write here].
- `align` {{optional_inline}}
  - : An integer representing [EDITORIAL: I'm not sure what to write here].
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

| Instruction        | Binary format                                           | Example text => binary                                                     |
| ------------------ | ------------------------------------------------------- | -------------------------------------------------------------------------- |
| `v128.load64_lane` | `0xFD 87:u32 memidx:u8 offset:u64 align:u32 laneidx:u8` | `v128.load64_lane 0 offset=0 align=0 0` => `0xfd 0x57 0x00 0x00 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
