---
title: "load64_zero: Wasm SIMD load instruction"
short-title: load64_zero
slug: WebAssembly/Reference/SIMD/load/load64_zero
page-type: webassembly-instruction
browser-compat: webassembly.simd.load64_zero
sidebar: webassemblysidebar
---

The **`load64_zero`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads a single value from a given heap address into the first lane of a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i64x2` value interpretation, and initializes the other lane to `0`.

{{InteractiveExample("Wat Demo: load64_zero", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 1
    v128.load64_zero
    i64x2.extract_lane 0
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
v128.load64_zero
```

- `load64_zero`
  - : The `load64_zero` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` `i64x2` value interpretation.

### Binary encoding

| Instruction        | Binary format                      | Example text => binary                        |
| ------------------ | ---------------------------------- | --------------------------------------------- |
| `v128.load64_zero` | `0xFD 93:u32 align:u32 offset:u32` | `v128.load64_zero 0` => `0xfd 0x5d 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
