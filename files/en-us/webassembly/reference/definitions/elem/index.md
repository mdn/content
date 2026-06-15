---
title: "elem: Wasm definition"
short-title: elem
slug: WebAssembly/Reference/Definitions/elem
page-type: webassembly-instruction
browser-compat: webassembly.definitions.elem
sidebar: webassemblysidebar
---

The **`elem`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) declares an **element segment**, which is a series of references that can be copied into a Wasm [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table). They provide a way to initialize a table on instantiation, analogous to [data segments](/en-US/docs/WebAssembly/Reference/Definitions/data) for Wasm [memories](/en-US/docs/WebAssembly/Reference/Definitions/memory).

{{InteractiveExample("Wat Demo: elem", "tabbed-taller")}}

```wat interactive-example
(module
  ;; table with 2 slots
  (table $return_values 2 funcref)

  ;; Define functions
  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  ;; initialize table slots actively
  (elem (table 0) (offset i32.const 0) func $f1 $f2)

  (func (export "accessTable") (param $index i32) (result i32)
    (local.get $index)
    (call_indirect (result i32))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

In the above example, we define a table with two slots, define two functions, then initialize the table immediately using an `elem` definition written in the active form, specifying the index value of the `table`. We then declare and export a function called `accessTable()`, which calls one of the functions referenced in our table, specifying the element number to call as its parameter. We invoke that function in JavaScript, then log the returned value to the console.

## Syntax

```plain
;; Active form, table initialized on instantiation
elem name table_identifier offset value_type element_list

;; Passive form, initialized later via table.init
elem name value_type element_list

;; Declaration form, declares already existing reference(s)
elem name declare value_type element_list
```

- `elem`
  - : The `elem` definition type. Must always be included first.
- `name` {{optional_inline}}
  - : An optional identifying name for the elem. This must begin with a `$` symbol, for example `$my_table`. If this is omitted, the `elem` can be identified (for example when calling `elem.drop`) by its index, for example `0` for the first `elem` in the wasm script, `1` for the second, etc.
- `table_identifier` {{optional_inline}}
  - : An identifier representing the `table` instance to place the table elements into, which must be preceded by the `table` keyword to be interpreted as a `table_identifier`. This can be one of:
    - `name`
      - : An identifying name [set for the `table`](/en-US/docs/WebAssembly/Reference/Definitions/table#name) when it was first defined. This must begin with a `$` symbol and be preceded by a `table` keyword, for example `(table $my_table)`.
    - `index`
      - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) value representing the index number of the table, for example `(table 0)` for the first table in the module, `(table 1)` for the second, etc.

    > [!NOTE]
    > When writing an active form `elem` definition, the `offset` must be included, but the `table_identifier` can be omitted, in which case it defaults to `(table 0)`.

- `offset` {{optional_inline}}
  - : An integer representing the offset at which to start placing the elements into the `table`. This value can be any [constant expression](https://webassembly.github.io/spec/core/valid/instructions.html#valid-constant), meaning that it can include structures like arithmetic expressions as well as numeric values.

    The full syntax includes the `offset` keyword before the value, for example `(offset i32.const 0)`, although the keyword can be omitted in the abbreviated form, for example `(i32.const 0)`.

- `declare` {{optional_inline}}
  - : A keyword that identifies the `elem` definition as being of the declarative form, meaning that it declares references that will be used at runtime (for example, by `ref.func`), without them being inserted into a table.
- `value_type`
  - : A value type that defines which type of reference will be stored in this table. All references in the `element_list` must match this type. The value can be any reference type, such as:
    - `func`: An abbreviation that more concisely declares a list of non-nullable function references. For example `func $my_func` is equivaent to `(ref func) (ref.func $my_func)`.
    - [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref): Function references, for example `(ref.func $my_func)`, `(ref null func)`, `(ref func)`.
    - [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref): External value references, for example `(ref.null extern)`, `(ref null extern)`.
    - [`exnref`](/en-US/docs/WebAssembly/Reference/Value_types/exnref): Exception references, for example `(ref.null extern)`.
    - `eqref`, `structref`, `arrayref`, `anyref`: References to garbage collection (GC) values.
    - `nullref`, `nullfuncref`, `nullexternref`: Null references.
- `element_list`
  - : A space-separated list of references to be stored in the `table`.

## Description

Wasm `elem` definitions define a series of references that can be copied into a previously-defined [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table). There are three forms of `elem` definition that you should know about:

- [Active form](#active_form)
- [Passive form](#passive_form)
- [Declarative form](#declarative_form)

### Active form

An active element segment will be written into its table on instantiation. In active form, as seen in the live example earlier on, a table first needs to be defined:

```wat
(table $return_values 2 funcref)
```

You then declare an `elem` definition that includes the references to store. In this case, we are storing function references in the `table`:

```wat
(func $f1 (result i32)
  i32.const 42
)
(func $f2 (result i32)
  i32.const 100
)

(elem (table $return_values) (i32.const 0) func $f1 $f2)
```

This `elem` definition includes the `value_type` to be stored (`func`), and the `element_list` to store in the table (`$f1 $f2`). Most significantly, it includes a number indicating the offset to start writing the references at — `(i32.const 0)` — which indicates the first slot of the table.

We've also included a `table_identifier` — `(table $return_values)` — to indicate the table to write the references to, although in this basic example there is only one table, so this is not necessary.

### Passive form

In passive form, the `elem` definition declares the references that should be stored in the table in the same way as in active form. The main difference is that, in passive form, you don't specify the `table_index` or `offset` value. This means that the references are not stored in the `table` immediately. Instead, this part of the process is handled manually using a [`table.init`](/en-US/docs/WebAssembly/Reference/Table/init) instruction.

Let's see what this looks like in code. We include the `elem` definition in a similar manner to the active form example, except that this time we don't include the `table_index`. Instead, we include a `name` value (`$funcs`) to identify the `elem` later on.

```wat
(elem $funcs funcref (ref.func $f1) (ref.func $f2))
```

We can then call `table.init`, referencing the `elem` `name`, to copy the references into the specified table:

```wat
(func (export "init")
  i32.const 0    ;; destination table index
  i32.const 0    ;; offset into elem segment
  i32.const 2    ;; number of elements to copy
  table.init $funcs
)
```

You can see a full working example at [Passive `elem` example](#passive_elem_example).

### Declarative form

The declarative form of `elem` is needed when you want to use a reference in your code without putting it into a table. It allows you to create a reference that can be referenced via `ref.func`:

```wat
(module
  ;; Create a reference to the $add function
  (elem declare func $add)

  (func $add (param i32 i32) (result i32)
    local.get 0
    local.get 1
    i32.add
  )

  (func (export "getRef") (result funcref)
    ;; only valid because of the declarative elem above
    ref.func $add
  )
)
```

This was added to the language because normally you can only reference functions with `ref.func` that have been made referencable, for example in a [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global) definition or by being imported from the JavaScript host. Declarative `elem` definitions exist to make some functions referencable that otherwise wouldn't be.

## Examples

### Passive `elem` example

This example shows how you can use the passive form of `elem` to not immediately copy the specified references to the table, instead copying them later on via the [`table.init`](/en-US/docs/WebAssembly/Reference/Table/init) instruction.

#### JavaScript

In our script, we start by grabbing a reference to a {{htmlelement("p")}} element that we will output results to. We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method. When the result is returned, we invoke the exported Wasm `init()` function (which as you'll see later, runs `table.init`), then run the exported `accessTable()` function, passing it the number `0` as a parameter. Finally, we set the `accessTable()` function's return value to the `<p>` element's `textContent` value so we can inspect it.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const output = document.querySelector("p");

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const value = result.instance.exports.accessTable(1);
  output.textContent = value;
});
```

#### Wasm

In our Wasm module, we first define a `table` with two slots, then define two functions called `$f1` and `$f2`, which return the values defined within. Next, we include an `elem` definition called `$funcs`, which references the `$f1` and `$f2` functions.

Finally, we export two functions:

- `init()`: Runs a `table.init` instruction to store the functions referenced in the `$funcs` `elem` in the `table`.
- `accessTable()`: Takes an `i32` named `$index` as a parameter, and returns an `i32`. Inside the function body, we use `call_indirect` to call the function referenced in the table at the index value `$index`.

```wat live-sample___basic-usage
(module
  (table $return_values 2 funcref)

  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  (elem $funcs funcref (ref.func $f1) (ref.func $f2))

  (func (export "init")
    i32.const 0    ;; destination table index
    i32.const 0    ;; offset into elem segment
    i32.const 2    ;; number of elements to copy
    table.init $funcs
  )

  (func (export "accessTable") (param $index i32) (result i32)
    local.get $index
    call_indirect (result i32)
  )
)
```

#### Result

The outputted value is as follows:

{{embedlivesample("basic-usage", "100%", 100)}}

This makes sense, as the exported `accessTable()` function has an index value passed into it. Inside the Wasm module, we call the function available at that index in the defined table, which returns the value we see output.

Note that we have to call `init()` before we call `accessTable()`, to initialize the table with references. If we didn't do that, the program would error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table`](WebAssembly/Reference/Definitions/table) definition
- [WebAssembly table instructions](/en-US/docs/WebAssembly/Reference/Table)
