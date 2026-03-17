---
title: "load8_splat: Wasm SIMD load instruction"
short-title: load8_splat
slug: WebAssembly/Reference/SIMD/load/load8_splat
page-type: webassembly-instruction
browser-compat: webassembly.simd.load8_splat
sidebar: webassemblysidebar
---

The **`load8_splat`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into all lanes of a `v128` `i8x16` value interpretation.

{{InteractiveExample("Wat Demo: load8_splat", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load8_splat
    i8x16.extract_lane_s 15
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
v128.load8_splat
```

- `load8_splat`
  - : The `load8_splat` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : an integer representing the memory address to load from.
- `output`
  - : The output `v128` `i8x16` value interpretation.

### Binary encoding

| Instruction        | Binary equivalent | Example text => binary            |
| ------------------ | ----------------- | --------------------------------- |
| `v128.load8_splat` | `0xFD 7:u32`      | `v128.load8_splat` => `0xfd 0x07` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
