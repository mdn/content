---
title: "load16x4_s: Wasm SIMD load instruction"
short-title: load16x4_s
slug: WebAssembly/Reference/SIMD/load/load16x4_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.load16x4_s
sidebar: webassemblysidebar
---

The **`load16x4_s`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads four 16-bit integers from a given heap address and sign extends each one to a 32-bit lane, outputting a `v128` `i32x4` value interpretation.

{{InteractiveExample("Wat Demo: load16x4_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load16x4_s
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
v128.load16x4_s
```

- `load16x4_s`
  - : The `load16x4_s` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction       | Binary equivalent                 | Example text => binary                       |
| ----------------- | --------------------------------- | -------------------------------------------- |
| `v128.load16x4_s` | `0xFD 3:u32 align:u32 offset:u32` | `v128.load16x4_s 0` => `0xfd 0x03 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
