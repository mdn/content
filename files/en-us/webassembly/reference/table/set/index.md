---
title: "set: Wasm table instruction"
short-title: set
slug: WebAssembly/Reference/Table/set
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-table
sidebar: webassemblysidebar
---

The **`table.set`** [Table instruction](/en-US/docs/WebAssembly/Reference/Table) changes the function reference stored in a particular table element.

{{InteractiveExample("Wat Demo: table.set", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; table with 0 function slots
  (table $return_funcs 0 funcref)

  ;; Define a function of the specified type
  (func $f1 (type $ret_i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func $populate
    (table.grow $return_funcs
      ref.null func
      (i32.const 1)
    )
    (drop)
    (table.set $return_funcs
      (i32.const 0)
      (ref.func $f1)
    )
  )

  (func (export "run") (result i32)
    (call $populate)
    (call_indirect (type $ret_i32) (i32.const 0))
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  const value = result.instance.exports.run();
  console.log(value);
});
```

## Syntax

```wat
table.set identifier element_number function_reference
```

- `table.set`
  - : The `table.set` instruction type. Must always be included first.
- `identifier` {{optional_inline}}
  - : An identifier for the table you want to store a reference in. This can be one of the following:
    - `identifying_name`
      - : An identifying name [set for the table](/en-US/docs/WebAssembly/Reference/Module_definitions/table#identifying_name) when it was first created. This must begin with a `$` symbol, for example `$my_table`.
    - `index`
      - : The table's index number, for example `0` for the first table in the wasm script, `1` for the second, etc.

    If the `identifier` is omitted, it will default to `0`.

- `element_number`
  - : The element number to store the function reference in. This must be an `i32` value, for example `(i32.const 1)`.
- `function_reference`
  - : The function reference to store in the table. This should be a `ref.func`, for example `(ref.func $f1)`.

### Result

No result.

### Opcodes

| Instruction | Binary opcode                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `table.set` | `𝟶𝚡𝟸𝟼` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Description

The `table.set` instruction is used to store a specified function in a particular element of an existing table. Specifically, it allows wasm modules to mutate references contained in tables at runtime.

This is convenient if different references are required later on in a program's lifecycle to the ones that table was initialized with. For example, you could create a table with one element, define two functions, then initialize the table element with a reference to one of those functions using the `elem` module definition:

```wat
(module
  ;; Create table with 1 function slot
  (table $return_funcs 1 funcref)

  ;; Define basic functions that return i32s
  (func $f1 (result i32)
    (i32.const 42)
  )
  (func $f2 (result i32)
    (i32.const 100)
  )

  ;; initialize table slot
  (elem (i32.const 0) $f1)

  ...
```

When using instructions like `table.set`, you also need to forward-declare the functions using `(elem declare ...)` so they can be referenced later on:

```wat
  ...

  (elem declare func $f1 $f2)

  ...
```

Later on, you can then dynamically change the function reference stored in the table element using `table.set`:

```wat
  ...

  (func $populate
    (table.set $return_funcs
      (i32.const 0)
      (ref.func $f2)
    )
  )

  ...
```

A wasm table can be grown from JavaScript using the [`table.set()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/set) method.

## Examples

### Creating, growing, and setting a table

This example shows how to create a table, grow its size, dynamically change the functions stored in it, and then call the function stored in the table at each point.

#### JavaScript

In our script, we start by grabbing a reference to a {{htmlelement("p")}} element that we will output results to. We then define an `obj` object containing a function called `output()` that adds a given value to the `textContent` of a given element.

We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the `obj` object in the process.

When the result is returned, we invoke the exported Wasm `run()` function available on the WebAssembly [`Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object, passing it the `outputElem` element as a parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

const obj = {
  output: function (elem, val) {
    elem.textContent += `${val} `;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  obj,
}).then((result) => {
  value = result.instance.exports.run(outputElem);
});
```

#### Wasm

In our Wasm module, we first import the JavaScript `output()` function, making sure to declare that it has two parameters, an [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref) and an `i32`.

Next, we define a function `type` called `$ret_i32`, which returns an `i32` value. We then define two functions based on this type called `$f1` and `$f2`, which return the values defined within, and forward-declare them using `(elem declare func $f1 $f2)` so they can be referenced later on. Next, we define a `table` called `$func_table`, which stores function references (hence `funcref` being specified) and is initially empty.

Finally, we export the `run()` function, which takes an `externref` named `$elem` as a parameter. Inside the function body, we:

- Use `table.grow` to grow the table size by `1`, with an initial `ref.null` value, checking whether the operation result is `-1`, which would indicate failure.
- Set our table element to contain the `$f1` function using [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set), then call the imported `$output` function, passing it as parameters the `$elem` `externref` passed into the `output()` function, and the value returned by the `$f1` function, which is being referenced from the table using `(call_indirect (type $ret_i32) (i32.const 0))`.
- Set our table element to contain the `$f2` function using `table.set`, then call the `output()` function again.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define basic functions that return i32s
  (func $f1 (result i32)
    (i32.const 42)
  )
  (func $f2 (result i32)
    (i32.const 100)
  )

  (elem declare func $f1 $f2)

  ;; Define an initially empty table of funcrefs
  (table $func_table 0 funcref)

  (func (export "run") (param $elem externref)
    ;; Grow the table by 1, setting the initial value to null.
    ;; Check the result for -1, which indicates failure.
    (if
      (i32.eq
        (table.grow $func_table
          ref.null func
          (i32.const 1)
        )
        i32.const -1
      )

      ;; Trap if we failed to grow the table
      (then unreachable)
    )

    ;; Set the first function in the table to f1
    (table.set $func_table
        (i32.const 0)
        (ref.func $f1)
    )

    ;; Call the output function, to output the table
    ;; function's return value to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )

    ;; Set the first function in the table to f2
    (table.set $func_table
        (i32.const 0)
        (ref.func $f2)
    )

    ;; Call the output function, to output the table
    ;; function's return value to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )
  )
)
```

#### Result

The output is as follows:

{{embedlivesample("basic-usage", "100%", 100)}}

This makes sense, as each time the `output()` function is run from inside the wasm module, the value passed into it as its second parameter is printed into our result `<p>` in the DOM. Each value is the value returned by the `$f1` and `$f2` functions — `42` and `100` respectively.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table.grow`](/en-US/docs/WebAssembly/Reference/Table/grow)
- [`table.size`](/en-US/docs/WebAssembly/Reference/Table/size)
