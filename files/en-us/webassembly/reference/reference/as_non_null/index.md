---
title: "as_non_null: Wasm reference instruction"
short-title: as_non_null
slug: WebAssembly/Reference/Reference/as_non_null
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_as_non_null
sidebar: webassemblysidebar
---

The **`ref.as_non_null`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) converts a nullable reference into a non-nullable one, trapping if the reference is null.

{{InteractiveExample("Wat Demo: ref.as_non_null", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param externref)))
  (global $greeting (import "js" "greeting") externref)

  ;; Only accepts non-null references
  (func $log_non_null (param $value (ref extern))
    (call $log (local.get $value))
  )

  (func $main
    ;; $greeting is nullable, so convert it before passing it on
    (call $log_non_null
      (ref.as_non_null (global.get $greeting))
    )
  )
  (start $main)
)
```

```js interactive-example
const url = "{%wasm-url%}";
await WebAssembly.instantiateStreaming(fetch(url), {
  console,
  js: { greeting: "Hello!" },
});
```

## WAT syntax

```plain
ref.as_non_null
```

- `ref.as_non_null`
  - : The `ref.as_non_null` instruction.

### Immediates

None.

### Operand stack

```plain
[input:(ref null heap_type)] -> [output:(ref heap_type)]
```

- `input`
  - : A nullable reference, for example a [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) or an [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref).
- `output`
  - : The same reference, typed as non-nullable.

### Traps

If the operand is a null reference, the instruction traps.

### Binary encoding

| Instruction       | Binary format | Example text => binary      |
| ----------------- | ------------- | --------------------------- |
| `ref.as_non_null` | `0xd4`        | `ref.as_non_null` => `0xd4` |

## Description

The `ref.as_non_null` instruction checks that a reference isn't null and gives it a non-nullable type, such as `(ref extern)` instead of `(ref null extern)`. Use it when you have a nullable reference that you need to pass to a function, store in a local, or return from a function whose type only accepts non-null references. Examples of such nullable references include references to nullable globals, locals, or table elements.

If the reference is null, `ref.as_non_null` traps. When Wasm code is called from JavaScript, a trap is reported as a [`WebAssembly.RuntimeError`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/RuntimeError) exception. In the example above, passing `null` as the `greeting` value would cause instantiation to fail with a `RuntimeError`, because the trap happens in the start function.

To check whether a reference is null without trapping, use [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null)
- [`ref.null`](/en-US/docs/WebAssembly/Reference/Reference/null)
- [`ref.cast`](/en-US/docs/WebAssembly/Reference/Reference/cast)
