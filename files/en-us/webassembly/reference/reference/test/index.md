---
title: "test: Wasm reference instruction"
short-title: test
slug: WebAssembly/Reference/Reference/test
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_test
sidebar: webassemblysidebar
---

The **`ref.test`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) checks whether a reference matches a given reference type.

{{InteractiveExample("Wat Demo: ref.test", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (type $point (struct (field i32) (field i32)))

  (func $main
    (local $value anyref)
    (local.set $value (struct.new $point (i32.const 1) (i32.const 2)))

    (call $log (ref.test (ref $point) (local.get $value))) ;; log 1: it's a $point
    (call $log (ref.test (ref i31) (local.get $value))) ;; log 0: it isn't an i31

    (call $log (ref.test (ref $point) (ref.null any))) ;; log 0: null doesn't match (ref $point)
    (call $log (ref.test (ref null $point) (ref.null any))) ;; log 1: null matches (ref null $point)
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
ref.test ref_type
```

- `ref.test`
  - : The `ref.test` instruction.

### Immediates

- `ref_type`
  - : The reference type to test against, for example `(ref $my_struct_type)`, `(ref null $my_struct_type)` or `(ref i31)`.

### Operand stack

```plain
[input:input_type] -> [output:i32]
```

- `input`
  - : The reference to test. Its type must be in the same [type hierarchy](https://webassembly.github.io/spec/core/bikeshed/#heap-types%E2%91%A0) as `ref_type`. Wasm reference types form separate hierarchies: `anyref` (which covers structs, arrays and `i31ref`), `funcref`, `externref` and `exnref`. For example, you can test an `anyref` against a struct type, but you can't test a `funcref` against one.
- `output`
  - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) that is `1` if `input` matches `ref_type`, or `0` otherwise.

### Binary encoding

| Instruction              | Binary format              | Example text => binary                        |
| ------------------------ | -------------------------- | --------------------------------------------- |
| `ref.test (ref ht)`      | `0xfb 20:u32 ht:heap_type` | `ref.test (ref i31)` => `0xfb 0x14 0x6c`      |
| `ref.test (ref null ht)` | `0xfb 21:u32 ht:heap_type` | `ref.test (ref null i31)` => `0xfb 0x15 0x6c` |

## Description

The `ref.test` instruction checks the runtime type of a reference. This is useful when a value has a general static type, such as `anyref`, but you need to know whether it is a specific type before working with it.

If `ref_type` is nullable, for example `(ref null $point)`, a null reference matches it and `ref.test` returns `1`. If `ref_type` is non-nullable, a null reference doesn't match and `ref.test` returns `0`.

`ref.test` never traps. To convert a reference to a more specific type once you know it matches, use [`ref.cast`](/en-US/docs/WebAssembly/Reference/Reference/cast).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ref.cast`](/en-US/docs/WebAssembly/Reference/Reference/cast)
- [`ref.eq`](/en-US/docs/WebAssembly/Reference/Reference/eq)
- [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null)
