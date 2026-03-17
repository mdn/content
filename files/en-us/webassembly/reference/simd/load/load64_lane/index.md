---
title: "load64_lane: Wasm SIMD load instruction"
short-title: load64_lane
slug: WebAssembly/Reference/SIMD/load/load64_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.load64_lane
sidebar: webassemblysidebar
---

The **`load64_lane`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into the specified lane of a `v128` `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: load64_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i64x2 90000000 216000
    v128.load64_lane 1
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
v128.load64_lane lane_value
```

- `load64_lane`
  - : The `load64_lane` instruction. Must always be included after `v128.`.
- `lane_value`
  - : The lane to load a value into.

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

| Instruction        | Binary equivalent                            | Example text => binary                               |
| ------------------ | -------------------------------------------- | ---------------------------------------------------- |
| `v128.load64_lane` | `0xFD 87:u32 align:u32 offset:u32 𝑖:laneidx` | `v128.load64_lane 0 0` => `0xfd 0x57 0x00 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
