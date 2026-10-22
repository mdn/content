---
title: "null: Wasm reference instruction"
short-title: "null"
slug: WebAssembly/Reference/Reference/null
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_null
sidebar: webassemblysidebar
---

The **`ref.null`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) creates a null reference of a given heap type.

{{InteractiveExample("Wat Demo: ref.null", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param externref)))
  (func $main
    ref.null extern
    call $log ;; log a null externref
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
ref.null heap_type
```

- `ref.null`
  - : The `ref.null` instruction.

### Immediates

- `heap_type`
  - : The heap type of the null reference to create. This can be an abstract heap type such as `func`, `extern` or `any`, or the name or index of a type defined in the module, for example `$my_struct_type`.

### Operand stack

```plain
[] -> [output:(ref null heap_type)]
```

- `output`
  - : A null reference of type `(ref null heap_type)`. For example, `ref.null func` produces a null [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref), and `ref.null extern` produces a null [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref).

### Binary encoding

| Instruction | Binary format       | Example text => binary           |
| ----------- | ------------------- | -------------------------------- |
| `ref.null`  | `0xd0 ht:heap_type` | `ref.null extern` => `0xd0 0x6f` |

## Description

The `ref.null` instruction creates a reference that points to nothing. Null references are commonly used to initialize nullable reference-typed locals, globals, and table elements before a real reference is available, or to represent "no value" when calling functions that take a nullable reference.

Because `ref.null` is a constant instruction, it can be used in constant expressions, such as the initializer of a [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global) or an item in an [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem) segment.

When a null reference is passed to JavaScript, it is converted to [`null`](/en-US/docs/Web/JavaScript/Reference/Operators/null).

To check whether a reference is null, use [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null)
- [`ref.as_non_null`](/en-US/docs/WebAssembly/Reference/Reference/as_non_null)
- [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref)
- [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref)
