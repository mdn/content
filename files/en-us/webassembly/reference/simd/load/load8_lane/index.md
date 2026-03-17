---
title: "load8_lane: Wasm SIMD load instruction"
short-title: load8_lane
slug: WebAssembly/Reference/SIMD/load/load8_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.load8_lane
sidebar: webassemblysidebar
---

The **`load8_lane`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into the specified lane of a `v128` `i8x16` value interpretation.

{{InteractiveExample("Wat Demo: load8_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.const i8x16 10 4 6 5 8 7 11 3 8 12 9 7 2 31 9 1
    v128.load8_lane 9
    i8x16.extract_lane_s 9
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
v128.load8_lane lane_value
```

- `load8_lane`
  - : The `load8_lane` instruction. Must always be included after `v128.`.
- `lane_value`
  - : The lane to load a value into.

### Type

```plain
[memory_address, input] -> [output]
```

- `memory_address`
  - : an integer representing the memory address to load from.
- `input`
  - : The input `v128` `i8x16` value interpretation.
- `output`
  - : The output `v128` `i8x16` value interpretation.

### Binary encoding

| Instruction       | Binary equivalent       | Example text => binary                   |
| ----------------- | ----------------------- | ---------------------------------------- |
| `v128.load8_lane` | `0xFD 84:u32 𝑖:laneidx` | `v128.load8_lane 0` => `0xfd 0x54 0 0 0` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
