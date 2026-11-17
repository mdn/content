---
title: "eq: Wasm reference instruction"
short-title: eq
slug: WebAssembly/Reference/Reference/eq
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_eq
sidebar: webassemblysidebar
---

The **`ref.eq`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) checks whether two references are equal.

{{InteractiveExample("Wat Demo: ref.eq", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (type $point (struct (field i32) (field i32)))

  (func $main
    (local $a (ref $point))
    (local $b (ref $point))
    (local.set $a (struct.new $point (i32.const 1) (i32.const 2)))
    (local.set $b (struct.new $point (i32.const 1) (i32.const 2)))

    (call $log (ref.eq (local.get $a) (local.get $a))) ;; log 1: same struct instance
    (call $log (ref.eq (local.get $a) (local.get $b))) ;; log 0: different struct instances
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
ref.eq
```

- `ref.eq`
  - : The `ref.eq` instruction.

### Immediates

None.

### Operand stack

```plain
[input1:eqref input2:eqref] -> [output:i32]
```

- `input1`
  - : The first reference to compare. This must be an `eqref` (`(ref null eq)`) or a subtype of it, such as a reference to a struct or array type, or an `i31ref`.
- `input2`
  - : The second reference to compare, with the same type requirements as `input1`.
- `output`
  - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) that is `1` if both references are equal, or `0` otherwise.

### Binary encoding

| Instruction | Binary format | Example text => binary |
| ----------- | ------------- | ---------------------- |
| `ref.eq`    | `0xd3`        | `ref.eq` => `0xd3`     |

## Description

Struct and array references are compared by identity, not by their field values. In the example above, `$a` and `$b` are separate struct instances with the same field values, so comparing them returns `0`, while comparing `$a` with itself returns `1`.

Two null references are equal to each other. Two `i31ref` values are equal if they hold the same integer.

`ref.eq` can only compare references that are [subtypes of `eqref`](https://webassembly.github.io/spec/core/bikeshed/#heap-types%E2%91%A0). `eqref` covers references that can be compared for equality: `i31ref`, `structref`, `arrayref`, references to struct and array types defined in the module, and null references of those types. You can't use it to compare [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) or [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref) values; a module that does so fails to validate.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null)
- [`ref.test`](/en-US/docs/WebAssembly/Reference/Reference/test)
