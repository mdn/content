---
title: "get: Wasm table instruction"
short-title: get
slug: WebAssembly/Reference/Table/get
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-table
sidebar: webassemblysidebar
---

The **`table.get`** [Table instruction](/en-US/docs/WebAssembly/Reference/Table) retrieves the reference stored in a particular table element.

{{InteractiveExample("Wat Demo: table.get", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Import console.log() function and table containing strings
  (func $console_log (import "console" "log") (param externref))
  (table $string_table (import "strings" "table") 0 externref)

  ;; Export run() function
  (func (export "run")
    ;; Call console.log() to log value stored in
    ;; table element
    (call $console_log
      (table.get $string_table (i32.const 0))
    )
  )
)
```

```js interactive-example
// Create a wasm table that stores external references
let table = new WebAssembly.Table({ element: "externref", initial: 0 });

// Initialize the string_table
table.grow(1);
table.set(0, "hello world!");

let imports = {
  console,
  strings: {
    table,
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), imports).then(
  (result) => {
    result.instance.exports.run();
  },
);
```

## Syntax

```wat
table.get identifier element_number
```

- `table.get`
  - : The `table.get` instruction type. Must always be included first.
- `identifier` {{optional_inline}}
  - : An identifier for the table you want to retrieve a reference from. This can be one of the following:
    - `identifying_name`
      - : An identifying name [set for the table](/en-US/docs/WebAssembly/Reference/Module_definitions/table#identifying_name) when it was first created. This must begin with a `$` symbol, for example `$my_table`.
    - `index`
      - : The table's index number, for example `0` for the first table in the wasm script, `1` for the second, etc.

    If the `identifier` is omitted, it will default to `0`.

- `element_number`
  - : The element number to retrieve the function reference from. This must be an `i32` value, for example `(i32.const 1)`.

### Result

The value stored in the referenced table element number.

### Opcodes

| Instruction | Binary opcode                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| `table.get` | `𝟶𝚡𝟸𝟶` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Description

The `table.get` instruction is used to retrieve a specified value from a particular element of an existing table. If the table was initialized to store [`funcref`](/en-US/docs/WebAssembly/Reference/Types/funcref)s, the values retrieved will be references to functions defined inside Wasm. If the table was initialized to store [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref)s, the values retrieved can be just about any value type defined in JavaScript.

Wasm table values can be retrieved from JavaScript using the [`table.get()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/get) method.

## Examples

### Retrieving strings from a table

This example shows how to create a Wasm table in JavaScript and store strings in it, then retrieve those strings from inside Wasm using `table.get` and print them out using an imported function.

#### JavaScript

In our script, we start by grabbing a reference to a {{htmlelement("p")}} element that we will output results to. We then create a Wasm table from JavaScript using the [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/Table) constructor, giving it an initial size of `0` and setting it to contain `externref` values.

Next, we grow the size of the table to two elements using the [`table.grow()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/grow) method, and use the [`table.set()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/set) method to store a different string in each table element.

```js live-sample___basic-usage
const outputElem = document.querySelector("p");

let table = new WebAssembly.Table({ element: "externref", initial: 0 });

table.grow(2);
table.set(0, "hello");
table.set(1, "world");
```

At this point, we define an `imports` object containing two items to import into Wasm:

- A function called `output()` that adds a given value to the `textContent` of a given element.
- The table that we created earlier.

We then compile and instantiate our Wasm module using the [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static) method, importing the `imports` object in the process.

When the result is returned, we invoke the exported Wasm `run()` function available on the WebAssembly [`Instance`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance) [`exports`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports) object, passing it the `outputElem` element as a parameter.

```html hidden live-sample___basic-usage
<p></p>
```

```js live-sample___basic-usage
let imports = {
  funcs: {
    output: function (elem, val) {
      elem.textContent += `${val} `;
    },
  },
  strings: {
    table,
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), imports).then(
  (result) => {
    result.instance.exports.run(outputElem);
  },
);
```

#### Wasm

In our Wasm module, we first import our two imported items:

- The JavaScript `output()` function, which we make sure to declare with two [`externref`](/en-US/docs/WebAssembly/Reference/Types/externref) parameters.
- The table of strings, which we call `$string_table`.

We then export the `run()` function, which takes an `externref` named `$elem` as a parameter. Inside the function body, we run our imported `output()` function twice. We specify the same `$elem` reference for the first parameter in both cases, and then use `table.get` to retrieve a different string from the imported table to use as the second parameter in each case.

```wat live-sample___basic-usage
(module
  (func $output (import "funcs" "output") (param externref) (param externref))
  (table $string_table (import "strings" "table") 0 externref)

  (func (export "run") (param $elem externref)
    (call $output
      (local.get $elem)
      (table.get $string_table (i32.const 0))
    )

    (call $output
      (local.get $elem)
      (table.get $string_table (i32.const 1))
    )
  )
)
```

#### Result

The output is as follows:

{{embedlivesample("basic-usage", "100%", 100)}}

This makes sense, as each time the `output()` function is run from inside the wasm module, the value passed into it as its second parameter is printed into our result `<p>` in the DOM. Each value is one of the strings stored in the table — `hello` and `world` respectively.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table.grow`](/en-US/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/en-US/docs/WebAssembly/Reference/Table/size)
