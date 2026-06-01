---
title: "elem: Wasm definition"
short-title: elem
slug: WebAssembly/Reference/Definitions/elem
page-type: webassembly-instruction
browser-compat: webassembly.definitions.elem
sidebar: webassemblysidebar
---

The **`elem`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) declares a series of function references that can be copied into a Wasm [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table).

{{InteractiveExample("Wat Demo: elem", "tabbed-taller")}}

```wat interactive-example
(module
  ;; table with 2 function slots
  (table $return_values 2 funcref)

  ;; Define functions
  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  ;; initialize table slots actively
  (elem (i32.const 0) func $f1 $f2)

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

In the above example, we define a table with two function slots, define two functions, then initialize the table immediately using an `elem` definition written in the active form, specifying the index value of the `table`. We then declare and export a function called `accessTable()`, which calls one of the functions referenced in our table, specifying the element number to call as its parameter. We invoke that function in JavaScript, then log the returned value to the console.

## Syntax

```plain
;; Active form, table initialized immediately
elem name table_index offset value_type element_list

;; Passive form, initialized later via table.init
elem name value_type element_list

;; Declaration form, declares already existing reference(s)
elem name declare value_type element_list
```

- `elem`
  - : The `elem` definition type. Must always be included first.
- `name` {{optional_inline}}
  - : An optional identifying name for the elem. This must begin with a `$` symbol, for example `$my_table`. If this is omitted, the `elem` can be identified (for example when calling `elem.drop`) by its index, for example `0` for the first `elem` in the wasm script, `1` for the second, etc.
- `table_index`
  - : An integer representing the index number of the `table` instance to place the table elements into to. This can be written as a Wasm [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) value (for example `(i32.const 0)`) or as a `table` keyword followed by a number (for example `(table 0)`), in which case an `offset` value is included after it.
- `offset` {{optional_inline}}
  - : An integer representing the offset at which to start placing the elements into the `table`. This is written as a Wasm [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) value (for example `(i32.const 0)`), and is only included if the `table_index` is written in `(table num)` form.
- `declare` {{optional_inline}}
  - : A keyword that identifies the `elem` definition as being of the declaration form, meaning that it identifies function references that may have already been taken.
- `value_type` {{optional_inline}}
  - : A value type that defines which type of reference will be stored in this table. All references in the `element_list` must match this type. The value can be:
    - `func`: Function names, for example `$my_func`.
    - [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref): Full function references, for example `(ref.func $my_func)`.
    - [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref): External value references, for example `(ref.null extern)`.

      Defaults to `func`.

- `element_list`
  - : A space-separated list of function references indicating the function references to be stored in the `table`. These can take the form of:
    - A specific function reference, for example `(ref.func $my_func)`, or the shorthand version that lists the function name only, for example `$my_func`. In the shorthand version, the function name is implicitly wrapped in `(ref.func)`.
    - A null `funcref`, for example `(ref.null func)`.
    - A null `externref`, for example `(ref.null extern)`.

## Description

Wasm `elem` definitions define a series of function references that can be copied into a previously-defined [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table). There are three forms of `elem` definition that you should know about:

- [Active form](#active_form)
- [Passive form](#passive_form)
- [Declaration form](#declaration_form)

### Active form

In active form, as seen in the live example earlier on, a table first needs to be defined:

```wat
(table $return_values 2 funcref)
```

You then define the functions you want to store references to in the `table`, and declare an `elem` definition that includes the function references.

```wat
(func $f1 (result i32)
  i32.const 42
)
(func $f2 (result i32)
  i32.const 100
)

(elem (i32.const 0) func $f1 $f2)
```

This `elem` definition includes the `value_type` to be stored (`func`), and the `element_list` to store in the table (`$f1 $f2`). Most significantly, it includes a number indicating the index of the table (`table_index`) to store the functions in — `(i32.const 0)` — which indicates the first table in the module.

Optionally, you can include an `offset` value to specify the table element number you want to store the first function in. In such a case, the `table_index` is written in a different form (`(table 0)`) and the `offset` is written as an `i32` value:

```wat
(elem (table 0) (i32.const 1) func $f1 $f2)
```

In this case, functions `$f1` and `$f2` would be stored starting at table element `1`.

### Passive form

In passive form, the `elem` definition declares the functions that should be stored in the table in the same way as in active form. The main difference is that, in passive form, you don't specify the `table_index` or optional `offset` value. This means that the function references are not stored in the `table` immediately. Instead, this part of the process is handled manually using a [`table.init`](/en-US/docs/WebAssembly/Reference/Table/init) instruction.

Let's see what this looks like in code. We include the `elem` definition in a similar manner to the active form example, except that this time we don't include the `table_index`. Instead, we include a `name` value (`$funcs`) to identify the `elem` later on.

```wat
(elem $funcs funcref (ref.func $f1) (ref.func $f2))
```

We can then call `table.init`, referencing the `elem` `name`, to copy those functions into the specified table:

```wat
(func (export "init")
  i32.const 0    ;; destination table index
  i32.const 0    ;; offset into elem segment
  i32.const 2    ;; number of elements to copy
  table.init $funcs
)
```

You can see a full working example at [Passive `elem` example](#passive_elem_example).

### Declaration form

## Examples

### Passive `elem` example

This example shows how you can use the passive form of `elem` to not immediately copy the specified function references to the table, instead copying them later on via the [`table.init`](/en-US/docs/WebAssembly/Reference/Table/init) instruction.

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

In our Wasm module, we first define a `table` with two function slots, then define two functions called `$f1` and `$f2`, which return the values defined within. Next, we include an `elem` definition called `$funcs`, which references the `$f1` and `$f2` functions.

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

Note that we have to call `init()` before we call `accessTable()`, to initialize the table with function references. If we didn't do that, the program would error.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table`](WebAssembly/Reference/Definitions/table) definition
- [WebAssembly table instructions](/en-US/docs/WebAssembly/Reference/Table)
