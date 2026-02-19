---
title: "table: Wasm definition"
short-title: table
slug: WebAssembly/Reference/Definitions/table
page-type: webassembly-instruction
spec-urls: https://webassembly.github.io/spec/core/syntax/modules.html#syntax-table
sidebar: webassemblysidebar
---

The **`table`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) creates a new table.

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

```plain
table name initial_size max_size type
```

- `table`
  - : The `table` definition type. Must always be included first.
- `name` {{optional_inline}}
  - : An optional identifying name for the table. This must begin with a `$` symbol, for example `$my_table`. If this is omitted, the table can be identified by its index, for example `0` for the first table in the wasm script, `1` for the second, etc.
- `initial_size`
  - : An integer representing the initial size of the table.
- `max_size` {{optional_inline}}
  - : An integer representing the maximum size the table is allowed to grow to. If this is not included, the table has no maximum size, and its growth is limited only by system constraints such as available memory.
- `type`
  - : The name of the function type to store. Possible values are:
    - [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)
      - : Stores references to functions defined inside Wasm.
    - [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref)
      - : Store references to external values defined inside JavaScript.

## Description

WebAssembly tables allow storage of reference values separate from byte-oriented WebAssembly memories. The primary use-case is for storing function references that can be used with `call_indirect` to support indirect function calls for languages that have them. The `table` definition creates a new table.

A table has to be given an initial size and storage type. This example creates a table wth two storage slots, which will only store references to functions created inside Wasm (signified by [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)):

```wat
(table 2 funcref)
```

Optionally, you can also provide an identifier, which can be used to identify the table elsewhere, and a maximum growth size. For example:

```wat
(table $mytable 2 10 funcref)
```

The following defines a function type, defines a basic function with that type that returns an `i32`, and forward-declares it using `(elem declare func $f1)` so it can be referenced later on.

```wat
(type $ret_i32 (func (result i32)))

(func $f1 (type $ret_i32)
  (i32.const 42)
)

(elem declare func $f1)
```

To call a function referenced in a table, you have to reference the table and the index value the function reference is stored at. The following example uses `call_indirect`:

```wat
(call_indirect (type $ret_i32) (local.get $index))
```

It is possible to mutate tables at runtime using instructions like [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set) and [`table.fill`](/en-US/docs/WebAssembly/Reference/Table/fill), and retrieve values using [`table.get`](/en-US/docs/WebAssembly/Reference/Table/get).

### External references

You can also store external references defined in JavaScript inside a Wasm table, by specifying the [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref) keyword. For example:

```wat
(table $mytable 2 10 externref)
```

### Multiple tables

You can create multiple tables in the same Wasm module, for example:

```wat
(table $table_1 1 2 funcref)

(table $table_2 1 2 funcref)
```

You could use a function like this to populate each table with a different function:

```wat
(func $populate
  (table.set $table_1
    (i32.const 0)
    (ref.func $f1)
  )
  (table.set $table_2
    (i32.const 0)
    (ref.func $f2)
  )
)
```

You could then call the `$populate` function and use `call_indirect` to call the functions referenced in each table. The following snippet references the tables by their [identifying name](#name):

```wat
(func (export "accessTable")
  (call $populate)
  (call_indirect $table_1 (type $ret_i32) (i32.const 0))
  (call_indirect $table_2 (type $ret_i32) (i32.const 0))

  ...
)
```

But you could instead reference the tables by their index values (`0` specifies the first table in the module, `1` the second table, etc.):

```wat
(call_indirect 0 (type $ret_i32) (i32.const 0))
(call_indirect 1 (type $ret_i32) (i32.const 0))
```

If you don't specify an identifying name _or_ an index, the index `0` is assumed:

```wat
;; Accesses the table with index 0
(call_indirect (type $ret_i32) (i32.const 0))
```

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

## See also

- [`table.fill`](/en-US/docs/WebAssembly/Reference/Table/fill)
- [`table.get`](/en-US/docs/WebAssembly/Reference/Table/get)
- [`table.grow`](/en-US/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/en-US/docs/WebAssembly/Reference/Table/size)
