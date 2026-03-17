---
title: "load: Wasm SIMD load instruction"
short-title: load
slug: WebAssembly/Reference/SIMD/load/load
page-type: webassembly-instruction
browser-compat: webassembly.simd.load
sidebar: webassemblysidebar
---

The **`load`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a `v128` value interpretation from a given heap address.

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
v128.load
```

- `load`
  - : The `load` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` value interpretation.

### Binary encoding

| Instruction | Binary equivalent                 | Example text => binary                 |
| ----------- | --------------------------------- | -------------------------------------- |
| `v128.load` | `0xfd 0:u32 align:u32 offset:u32` | `v128.load 0` => `0xfd 0x00 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
