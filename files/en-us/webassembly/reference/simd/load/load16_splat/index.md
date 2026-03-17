---
title: "load16_splat: Wasm SIMD load instruction"
short-title: load16_splat
slug: WebAssembly/Reference/SIMD/load/load16_splat
page-type: webassembly-instruction
browser-compat: webassembly.simd.load16_splat
sidebar: webassemblysidebar
---

The **`load16_splat`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into all lanes of a `v128` `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: load16_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load16_splat
    i16x8.extract_lane_s 6
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
v128.load16_splat
```

- `load16_splat`
  - : The `load16_splat` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` `i16x8` value interpretation.

### Binary encoding

| Instruction         | Binary equivalent                 | Example text => binary                         |
| ------------------- | --------------------------------- | ---------------------------------------------- |
| `v128.load16_splat` | `0xFD 8:u32 align:u32 offset:u32` | `v128.load16_splat 0` => `0xfd 0x08 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
