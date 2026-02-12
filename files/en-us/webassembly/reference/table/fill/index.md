---
title: "fill: Wasm table instruction"
short-title: fill
slug: WebAssembly/Reference/Table/fill
page-type: webassembly-instruction
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#syntax-instr-table
sidebar: webassemblysidebar
---

The **`table.fill`** [Table instruction](/en-US/docs/WebAssembly/Reference/Table) sets a range of table elements to the same value.

{{InteractiveExample("Wat Demo: table.fill", "tabbed-taller")}}

```wat interactive-example
(module
  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define table with 3 function slots
  (table $my_table 3 funcref)

  ;; Define basic function that returns an i32
  (func $f1 (result i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func (export "run") (result i32)
    ;; Set the function referenced in every table element to $f1
    (table.fill $my_table
      (i32.const 0)
      (ref.func $f1)
      (i32.const 3)
    )

    ;; Call the function referenced in slot 2
    (call_indirect (type $ret_i32) (i32.const 2))
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

```plain
table.fill identifier
```

- `table.fill`
  - : The `table.fill` instruction type. Must always be included first.
- `identifier` {{optional_inline}}
  - : The identifier for the table you want to fill. This can be one of the following:
    - `name`
      - : An identifying name [set for the table](/en-US/docs/WebAssembly/Reference/Definitions/table#name) when it was first created. This must begin with a `$` symbol, for example `$my_table`.
    - `index` {{optional_inline}}
      - : The table's index number, for example `0` for the first table in the wasm module, `1` for the second, etc.

    If the `identifier` is omitted, it will default to `0`.

### Type

```plain
[index, value, length] -> []
```

- `index`
  - : The index of the first element to store the reference in. This must be an `i32` value, for example `(i32.const 0)`.
- `value`
  - : The reference to store in the table. This must be of the same [type](/en-US/docs/WebAssembly/Reference/Definitions/table#type) that the table is defined with.
- `length`
  - : The number of elements to store the value to, starting at `index`. This must be an `i32` value.

### Opcodes

| Instruction  | Binary opcode                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------- |
| `table.fill` | `𝟶𝚡𝙵𝙲 17:𝚞𝟹𝟸` ([variable-width LEB128](https://webassembly.github.io/spec/core/binary/values.html#binary-int)) |

## Examples

### Demonstrating `table.fill` behavior

This example demonstrates that, when all of the elements of a table are referenced in a `table.fill` instruction, all of those elements will reference the same value.

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

Next, we define a function type called `$ret_i32` that returns an `i32`, and a `table` that stores function references (hence `funcref` being specified) and has three elements.

We now define a basic function that returns an `i32`, and forward-declare it using `(elem declare func $f1)` so it can be referenced later on.

Finally, we export the `run()` function, which takes an `externref` named `$elem` as a parameter. Inside the function body, we:

- Use `table.fill` to store a reference to the `$f1` function in every table slot. Note how we've set the `starting_index` to `0` and the `element_span` to the result of the [`table.size`](/en-US/docs/WebAssembly/Reference/Table/size) instruction to guarantee that we'll fill _all_ of the table elements.
- Call the imported `$output` function, passing it as parameters the `$elem` `externref` passed into the `output()` function, and the return value of the function referenced in the first table slot. This results in the value being outputted to the DOM.
- Repeat the last step another couple of times to output the return values of the functions stored in the other table elements to the DOM.

```wat live-sample___basic-usage
(module
  ;; Import output function
  (import "obj" "output" (func $output (param externref) (param i32)))

  ;; Define function type
  (type $ret_i32 (func (result i32)))

  ;; Define an initially empty table of funcrefs with three slots
  (table $func_table 3 funcref)

  ;; Define basic function that returns an i32
  (func $f1 (result i32)
    (i32.const 42)
  )

  (elem declare func $f1)

  (func (export "run") (param $elem externref)
    ;; Set the function referenced in every table element to $f1
    (table.fill $func_table
      (i32.const 0) ;; starting index
      (ref.func $f1)
      (table.size $func_table) ;; Number of slots, not end index
    )

    ;; Call the output function, to output the return values of
    ;; the functions referenced in each table element to the DOM
    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 0))
    )

    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 1))
    )

    (call $output
      (local.get $elem)
      (call_indirect (type $ret_i32) (i32.const 2))
    )
  )
)
```

#### Result

The output is as follows:

{{embedlivesample("basic-usage", "100%", 100)}}

This proves that all of the table elements now reference the `$f1` function, which returns `42`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table.grow`](/en-US/docs/WebAssembly/Reference/Table/grow)
- [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set)
- [`table.size`](/en-US/docs/WebAssembly/Reference/Table/size)
