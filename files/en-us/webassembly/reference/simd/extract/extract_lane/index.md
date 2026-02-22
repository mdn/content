---
title: "extract_lane: Wasm SIMD extract instruction"
short-title: extract_lane
slug: WebAssembly/Reference/SIMD/extract/extract_lane
page-type: webassembly-instruction
browser-compat: webassembly.simd.extract_lane
sidebar: webassemblysidebar
---

The **`extract_lane`** [SIMD extract instruction](/en-US/docs/WebAssembly/Reference/SIMD/extract) extracts the value contained within the specified lane of a `v128` value interpretation.

{{InteractiveExample("Wat Demo: extract_lane", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param f32)))
  (func $main
    ;; load two SIMD values onto the stack
    (v128.const f32x4 0x9 0xa 0xb 0xc)
    (v128.const f32x4 0x10 0x11 0x12 0x13)

    f32x4.add ;; add the two values
    f32x4.extract_lane 0 ;; Extract a float value from the result
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
interpretation.extract_lane
```

- `interpretation`
  - : The [`v128`](/en-US/docs/WebAssembly/Reference/Types/v128) value interpretation the instruction is being run on. The following interpretations support `extract_lane`:
    - `i32x4`
    - `i64x2`
    - `f32x4`
    - `f64x2`
- `extract_lane`
  - : The `extract_lane` instruction. Must always be included after the `interpretation` and a period (`.`).

### Type

```plain
[lane] -> []
```

- `lane`
  - : The index of the lane whose value you wish to extract, for example `0`.

### Traps

?

### Opcodes

| Instruction          | Binary opcode                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------- |
| `i32x4.extract_lane` | `0x1b` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `i64x2.extract_lane` | `0x1d` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `f32x4.extract_lane` | `0x1f` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |
| `f64x2.extract_lane` | `0x21` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`replace_lane`](/en-US/docs/WebAssembly/Reference/SIMD/replace/replace_lane)
