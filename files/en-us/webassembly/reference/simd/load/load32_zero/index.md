---
title: "load32_zero: Wasm SIMD load instruction"
short-title: load32_zero
slug: WebAssembly/Reference/SIMD/load/load32_zero
page-type: webassembly-instruction
browser-compat: webassembly.simd.load32_zero
sidebar: webassemblysidebar
---

The **`load32_zero`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into the first lane of a `v128` `i32x4` value interpretation, and initializes the other lanes to `0`.

{{InteractiveExample("Wat Demo: load32_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load32_zero
    i32x4.extract_lane 0
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
v128.load32_zero
```

- `load32_zero`
  - : The `load32_zero` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` `i32x4` value interpretation.

### Binary encoding

| Instruction        | Binary equivalent                  | Example text => binary                        |
| ------------------ | ---------------------------------- | --------------------------------------------- |
| `v128.load32_zero` | `0xFD 92:u32 align:u32 offset:u32` | `v128.load32_zero 0` => `0xfd 0x5c 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
