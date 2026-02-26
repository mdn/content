---
title: "extract_lane_s: Wasm SIMD extract instruction"
short-title: extract_lane_s
slug: WebAssembly/Reference/SIMD/extract/extract_lane_s
page-type: webassembly-instruction
browser-compat: webassembly.simd.extract_lane_s
sidebar: webassemblysidebar
---

The **`extract_lane_s`** [SIMD extract instruction](/en-US/docs/WebAssembly/Reference/SIMD/extract) extracts the value contained within the specified lane of a `v128` value interpretation as a signed integer.

{{InteractiveExample("Wat Demo: extract_lane_s", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $main
    ;; load a SIMD value onto the stack
    (v128.const i16x8 1 0 -2 -1 -4 -2 -2 3)

    i16x8.extract_lane_s 6 ;; Extract a scalar value from the result
    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), { console });
```

## Syntax

```plain
value_type.extract_lane_s
```

- `value_type`
  - : The type of value the instruction is being run on. The following [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretations support `extract_lane_s`:
    - `i8x16`
    - `i16x8`
- `extract_lane_s`
  - : The `extract_lane_s` instruction. Must always be included after the `value_type` and a period (`.`).

### Type

```plain
[lane] -> []
```

- `lane`
  - : The index of the lane whose value you wish to extract, for example `0`.

### Traps

?

### Opcodes

| Instruction            | Binary opcode             | Example text => binary                        |
| ---------------------- | ------------------------- | --------------------------------------------- |
| `i8x16.extract_lane_s` | `𝟶𝚡𝙵𝙳  21:𝚞𝟹𝟸  𝑙:𝚕𝚊𝚗𝚎𝚒𝚍𝚡` | `i8x16.extract_lane_s 11` => `0xfd 0x15 0x0b` |
| `i16x8.extract_lane_s` | `𝟶𝚡𝙵𝙳  24:𝚞𝟹𝟸  𝑙:𝚕𝚊𝚗𝚎𝚒𝚍𝚡` | `i16x8.extract_lane_s 7` => `0xfd 0x18 0x07`  |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`extract_lane`](/en-US/docs/WebAssembly/Reference/SIMD/extract/extract_lane)
