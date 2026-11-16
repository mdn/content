---
title: "is_null: Wasm reference instruction"
short-title: is_null
slug: WebAssembly/Reference/Reference/is_null
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_is_null
sidebar: webassemblysidebar
---

The **`ref.is_null`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) checks whether a reference is null.

{{InteractiveExample("Wat Demo: ref.is_null", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (func $f)
  (elem declare func $f)
  (func $main
    ref.null func
    ref.is_null
    call $log ;; log 1: the reference is null

    ref.func $f
    ref.is_null
    call $log ;; log 0: the reference isn't null
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), { console });
```

## WAT syntax

```plain
ref.is_null
```

- `ref.is_null`
  - : The `ref.is_null` instruction.

### Immediates

None.

### Operand stack

```plain
[input:(ref null heap_type)] -> [output:i32]
```

- `input`
  - : The reference to check. This can be a reference of any nullable reference type, for example a [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) or an [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref).
- `output`
  - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) that is `1` if `input` is null, or `0` otherwise.

### Binary encoding

| Instruction   | Binary format | Example text => binary  |
| ------------- | ------------- | ----------------------- |
| `ref.is_null` | `0xd1`        | `ref.is_null` => `0xd1` |

## Description

The `ref.is_null` instruction pops a reference off the stack and pushes `1` if it is null, or `0` if it isn't. It is typically used to check whether a nullable local, global or table element has been given a value yet, before using it with an instruction that would trap on a null reference.

To create a null reference, use [`ref.null`](/en-US/docs/WebAssembly/Reference/Reference/null). To convert a nullable reference into a non-nullable one, trapping if it is null, use [`ref.as_non_null`](/en-US/docs/WebAssembly/Reference/Reference/as_non_null).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ref.null`](/en-US/docs/WebAssembly/Reference/Reference/null)
- [`ref.as_non_null`](/en-US/docs/WebAssembly/Reference/Reference/as_non_null)
- [`ref.eq`](/en-US/docs/WebAssembly/Reference/Reference/eq)
