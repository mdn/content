---
title: "func: Wasm reference instruction"
short-title: func
slug: WebAssembly/Reference/Reference/func
page-type: webassembly-instruction
browser-compat: webassembly.instructions.ref_func
sidebar: webassemblysidebar
---

The **`ref.func`** [reference instruction](/en-US/docs/WebAssembly/Reference/Reference) creates a reference to a given function.

{{InteractiveExample("Wat Demo: ref.func", "tabbed-taller")}}

```wat interactive-example
(module
  (func $double (param i32) (result i32)
    (i32.mul (local.get 0) (i32.const 2))
  )
  ;; Make $double referenceable by ref.func
  (elem declare func $double)

  (func (export "getDouble") (result funcref)
    ref.func $double
  )
)
```

```js interactive-example
const url = "{%wasm-url%}";
const { instance } = await WebAssembly.instantiateStreaming(fetch(url));

// The returned funcref can be called like a JavaScript function
const double = instance.exports.getDouble();
console.log(double(21));
```

## WAT syntax

```plain
ref.func function
```

- `ref.func`
  - : The `ref.func` instruction.

### Immediates

- `function`
  - : The function to create a reference to. This can be the function's name, for example `$my_function`, or its index.

### Operand stack

```plain
[] -> [output:(ref function_type)]
```

- `output`
  - : A non-null reference to `function`. Its type is a reference to the function's type, which can be used anywhere a [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) is expected.

### Binary encoding

| Instruction | Binary format     | Example text => binary      |
| ----------- | ----------------- | --------------------------- |
| `ref.func`  | `0xd2 x:func_idx` | `ref.func 0` => `0xd2 0x00` |

## Description

The `ref.func` instruction creates a reference to a function defined in or imported into the module. You can store the reference in a table, pass it to another function, or return it to JavaScript, where it can be called like a regular JavaScript function.

A module only validates if every function used with `ref.func` inside a function body is also referenced somewhere outside the function bodies: for example, in an export, a [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global) initializer, or an [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem) segment. If a function isn't otherwise referenced, you can declare it with a declarative `elem` segment, such as `(elem declare func $my_function)`.

Because `ref.func` is a constant instruction, it can also be used in constant expressions, such as the initializer of a `global` or an item in an `elem` segment.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref)
- [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem)
- [`ref.null`](/en-US/docs/WebAssembly/Reference/Reference/null)
