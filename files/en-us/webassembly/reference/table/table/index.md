---
title: "table: Wasm table instruction"
short-title: table
slug: WebAssembly/Reference/Table/table
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/modules.html#syntax-table
sidebar: webassemblysidebar
---

The **`table`** [Table instruction](/en-US/docs/WebAssembly/Reference/Table) creates a new table.

{{InteractiveExample("Wat Demo: table", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; table with 2 function slots
  (table $return_values 2 funcref)

  ;; Define functions of that type
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )
  (func $f2 (type $ret_i32)
    (i32.const 100)
  )

  ;; initialize table slots
  (elem (i32.const 0) $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (local.get $index)
    (call_indirect (type $ret_i32))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

## Syntax

```wat
table identifier size storage_type
```

- `table`
  - : The `table` instruction type. Must always be included first.
- `identifier` {{optional_inline}}
  - : An optional identifier for the table; must begin with a `$` symbol.
- `size`
  - : A number representing the initial size of the table
- `storage_type`
  - : The name of the function type to store. Possible values are:
    - `funcref`
      - : Stores references to functions defined inside Wasm.
    - `externref`
      - : Store references to external functions defined inside JavaScript.

### Opcodes

| Instruction | Binary opcode |
| ----------- | ------------- |
| `table`     | `????`        |

<!-- I'm not sure what this is, or how to find it out -->

## Description

WebAssembly tables allow storage function references, which can be later retrieved for efficient, indirect function access when needed. The `table` instruction creates a new table.

A table has to be given a size and storage type. This example creates a table wth two storage slots, which will only store references to functions created inside Wasm:

```wat
(table 2 funcref)
```

Optionally, you can also provide an identifier, which can be used to identify the table elsewhere. For example:

```wat
(table $mytable 2 funcref)
```

To call a function via a table later on, you have to reference the table and the index value the function refernce is stored at. The following example uses `call_indirect`:

```wat
(call_indirect (type $ret_i32) (local.get $index))
```

(TBD: This would make so much more sense if I could get table.get to work).

## Examples

### Creating a basic table

This example shows how to create a basic table, store a couple of functions in it, and then call a function from the table.

#### JavaScript

In our script, we start by grabbing a reference to a {{htmlelement("p")}} element that we will output results to. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method. When the result is returned, we invoke the exported Wasm `accessTable()` function available on the WebAssembly [`Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object, passing it the number `0` as a parameter. Finally, we set the `accessTable()` function's return value to the `<p>` element's `textContent` value so we can inspect it.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(0);
  output.textContent = value;
});
```

#### Wasm

In our Wasm module, we first define a function `type` called `$ret_i32`, which returns an `i32` value. We then define two functions based on this type called `$f1` and `$f2`, which return the values defined within. Next, we define a `table` called `$return_values` with two slots, which stores function references (hence `funcref` being specified), and initialize it by filling the two slots with references to the `$f1` and `$f2` functions.

Finally, we export the `accessTable()` function, which takes an `i32` named `$index` as a parameter, and returns an `i32`. Inside the function body, we use `call_indirect` to call the function referenced in the table at the index value `$index`.

```wat live-sample___basic-usage
(module
  (type $ret_i32 (func (result i32)))
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )
  (func $f2 (type $ret_i32)
    (i32.const 100)
  )

  (table $return_values 2 funcref)
  (elem (i32.const 0) $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (call_indirect (type $ret_i32) (local.get $index))
  )
)
```

#### Result

The outputted value is as follows:

{{embedlivesample("basic-usage", "100%", 100)}}

This makes sense, as the exported `accessTable()` function has an index value passed into it. Inside the Wasm module, we call the function availale at that index in the defined table, which returns the value we see output.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> The `multiMemory` compatibility table indicates versions in which `grow` can be used with a specified memory.
