---
title: "load32x2_s: Wasm SIMD load instruction"
short-title: load32x2_s
slug: WebAssembly/Reference/SIMD/load/load32x2_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.load32x2_s
sidebar: webassemblysidebar
---

The **`load32x2_s`** [SIMD load instruction](/en-US/docs/WebAssembly/Reference/SIMD/load) loads two 32-bit integers from a given heap address and sign extends each one to a 64-bit lane, outputting a [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) `i64x2` value interpretation.

{{InteractiveExample("Wat Demo: load32x2_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i64)))
  (memory $memory 1)
  (data (i32.const 0) "\01\02\03\04\05\06\07\08\09\0a\0b\0c\0d\0e\0f\00\01\02\03")
  (func $main
    i32.const 0
    v128.load32x2_s
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
v128.load32x2_s
```

- `load32x2_s`
  - : The `load32x2_s` instruction. Must always be included after `v128.`.

### Type

```plain
[memory_address] -> [output]
```

- `memory_address`
  - : An integer representing the memory address to load from.
- `output`
  - : The output `v128` `i64x2` value interpretation.

### Binary encoding

| Instruction       | Binary format                     | Example text => binary                       |
| ----------------- | --------------------------------- | -------------------------------------------- |
| `v128.load32x2_s` | `0xFD 5:u32 align:u32 offset:u32` | `v128.load32x2_s 0` => `0xfd 0x05 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [SIMD load instructions](/en-US/docs/WebAssembly/Reference/SIMD/load)
