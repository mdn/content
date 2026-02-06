---
title: "size: Wasm table instruction"
short-title: size
slug: WebAssembly/Reference/Table/size
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-table
sidebar: webassemblysidebar
---

The **`table.size`** [Table instruction](/en-US/docs/WebAssembly/Reference/Table) returns the current number of segments contained in a table.

{{InteractiveExample("Wat Demo: table.size", "tabbed-taller")}}

```wat interactive-example
(module
  ;; table with 0 function slots
  (table $my_table 0 funcref)

  (func (export "run") (result i32)
    ;; Grow the table by 1, setting the initial values to null.
    (table.grow $my_table
      ref.null func
      (i32.const 1)
    )
    (drop)

    (table.size $my_table)
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
table.size identifier
```

- `table.size`
  - : The `table.size` instruction type. Must always be included first.
- `identifier`
  - : The identifier for the table you want to retrieve the size of; must begin with a `$` symbol. [EDITORIAL: is this optional?]

### Result

An `i32` equal to the current number of segments contained inside the table.

### Opcodes

| Instruction  | Binary opcode |
| ------------ | ------------- |
| `table.size` | `0xFC`        |

## Description

`table.size` is used to return the size of a table.

Note that `table.size` must be included inside a function. Trying to include the instruction at the top level of a module results in an error.

A wasm table size can be retrieved via JavaScript using the [`table.length`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table/length) property.

## Examples

### Observing increases in table size

This example shows how to create a table and observe its size as the table grows using `table.size`.

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

Next, we define a `table` called `$my_table`, which stores function references (hence `funcref` being specified) and is empty.

Finally, we export the `run()` function, which takes an `externref` named `$elem` as a parameter. Inside the function body, we:

- Use `table.grow` to grow the table size by `1`, with an initial `ref.null` value.
- Call the imported `$output` function, passing it as parameters the `$elem` `externref` passed into the `output()` function, and the return value of the `table.size` instruction. This results in the table size being outputted to the DOM.
- Repeat the last two steps again, resulting in the table being grown by one more segment, and the size being outputted to the DOM again.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define an initially empty table of funcrefs
  (table $my_table 0 funcref)

  (func (export "run") (param $elem externref)
    ;; Grow the table by 1, setting the initial values to null.
    (table.grow $my_table
      ref.null func
      (i32.const 1)
    )
    (drop)

    ;; Call the output function, to output the table size to the DOM
    (call $output
      (local.get $elem)
      (table.size)
    )

    ;; Grow the table by 1, setting the initial values to null.
    (table.grow $my_table
      ref.null func
      (i32.const 1)
    )
    (drop)

    ;; Call the output function, to output the table size to the DOM
    (call $output
      (local.get $elem)
      (table.size)
    )
  )
)
```

> [!NOTE]
> In this code, we haven't specified the table identifier (`$my_table`) after the `table.size` instructions. This is OK, as we've only got one table defined, so the compiler can work out which table the instruction is aimed at.

#### Result

The output is as follows:

{{embedlivesample("basic-usage", "100%", 100)}}

This makes sense, as each time the `output()` function is run from inside the wasm module, the value passed into it as its second parameter is printed into our result `<p>` in the DOM. Each value is the table size at each point — `1` and `2` respectively.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table.grow`](/en-US/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set)
