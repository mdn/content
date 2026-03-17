---
title: "load8x8_u: Wasm SIMD load instruction"
short-title: load8x8_u
slug: WebAssembly/Reference/SIMD/load/load8x8_u
page-type: webassembly-instruction
browser-compat: webassembly.simd.load8x8_u
sidebar: webassemblysidebar
---

The **`load8x8_u`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads eight 8-bit integers from a given heap address and zero extends each one to a 16-bit lane, outputting a `v128` `i16x8` value interpretation.

{{InteractiveExample("Wat Demo: load8x8_u", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load8x8_u
    i16x8.extract_lane_s 7
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
v128.load8x8_u
```

- `load8x8_u`
  - : The `load8x8_u` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : an integer representing the memory address to load from.
- `output`
  - : The output `v128` `i16x8` value interpretation.

### Binary encoding

| Instruction      | Binary equivalent                 | Example text => binary                      |
| ---------------- | --------------------------------- | ------------------------------------------- |
| `v128.load8x8_u` | `0xFD 2:u32 align:u32 offset:u32` | `v128.load8x8_u 0` => `0xfd 0x02 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
