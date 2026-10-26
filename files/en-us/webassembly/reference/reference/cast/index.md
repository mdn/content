---
title: "cast: Wasm reference instruction"
short-title: cast
slug: WebAssembly/Reference/Reference/cast
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_cast
sidebar: webassemblysidebar
---

The **`ref.cast`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) casts a reference to a given reference type, trapping if the cast fails.

{{InteractiveExample("Wat Demo: ref.cast", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (type $point (struct (field $x i32) (field $y i32)))

  (func $main
    (local $value anyref)
    (local.set $value (struct.new $point (i32.const 3) (i32.const 4)))

    ;; An anyref doesn't give access to struct fields,
    ;; so cast it to (ref $point) first
    (call $log
      (struct.get $point $x
        (ref.cast (ref $point) (local.get $value))
      )
    ) ;; log 3
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
ref.cast ref_type
```

- `ref.cast`
  - : The `ref.cast` instruction.

### Immediates

- `ref_type`
  - : The reference type to cast to, for example `(ref $my_struct_type)`, `(ref null $my_struct_type)` or `(ref i31)`.

### Operand stack

```plain
[input:input_type] -> [output:ref_type]
```

- `input`
  - : The reference to cast. Its type must be in the same [type hierarchy](https://webassembly.github.io/spec/core/bikeshed/#heap-types%E2%91%A0) as `ref_type`. Wasm reference types form separate hierarchies: `anyref` (which covers structs, arrays and `i31ref`), `funcref`, `externref` and `exnref`. For example, you can cast an `anyref` to a struct type, but you can't cast a `funcref` to one.
- `output`
  - : The same reference, typed as `ref_type`.

### Traps

If the operand's runtime type doesn't match the target reference type, the instruction traps. A null operand also traps unless the target type is nullable.

### Binary encoding

| Instruction              | Binary format              | Example text => binary                        |
| ------------------------ | -------------------------- | --------------------------------------------- |
| `ref.cast (ref ht)`      | `0xfb 22:u32 ht:heap_type` | `ref.cast (ref i31)` => `0xfb 0x16 0x6c`      |
| `ref.cast (ref null ht)` | `0xfb 23:u32 ht:heap_type` | `ref.cast (ref null i31)` => `0xfb 0x17 0x6c` |

## Description

The `ref.cast` instruction checks the runtime type of a reference and, if it matches `ref_type`, gives it that more specific static type. This is needed to use instructions that require a specific type, for example reading a struct field from a value whose static type is `anyref`.

If the reference doesn't match `ref_type`, `ref.cast` traps. When Wasm code is called from JavaScript, a trap is reported as a [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) exception.

If `ref_type` is nullable, for example `(ref null $point)`, a null reference passes the cast. If `ref_type` is non-nullable, casting a null reference traps.

To check whether a reference matches a type without trapping, use [`ref.test`](/en-US/docs/WebAssembly/Reference/Reference/test).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ref.test`](/en-US/docs/WebAssembly/Reference/Reference/test)
- [`ref.as_non_null`](/en-US/docs/WebAssembly/Reference/Reference/as_non_null)
