---
title: "import: Wasm definition"
short-title: import
slug: WebAssembly/Reference/Definitions/import
page-type: webassembly-instruction
browser-compat: webassembly.definitions.import
sidebar: webassemblysidebar
---

The **`import`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) declares one or more **imports**. Each references a value imported from the host (such as a function or [memory](/en-US/docs/WebAssembly/Reference/Definitions/memory)) and makes it available for use in the Wasm module.

{{InteractiveExample("Wat Demo: import", "tabbed-taller")}}

```wat interactive-example
(module
  ;; full syntax
  (import "console" "log" (func $log (param i32)))
  ;; compact syntax
  (import "importNums"
    (item "num1")
    (item "num3")
    (item "num5")
    (func (result i32))
  )

  (func $main
    call 1 ;; num1
    call 2 ;; num3
    i32.add
    call 3 ;; num5
    i32.mul

    call $log ;; log the result
  )
  (start $main)
)
```

```js interactive-example
const importNums = {
  num1: () => {
    return 1;
  },
  num3: () => {
    return 3;
  },
  num5: () => {
    return 5;
  },
};

WebAssembly.instantiateStreaming(fetch("{%wasm-url%}"), {
  importNums,
  console,
});
```

In this example, we define an import object called `importNums` in the JavaScript. It contains three functions, each of which returns an integer. When we instantiate the Wasm module via [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), we import `importNums` and the built-in {{domxref("console")}} object.

In the Wasm module, we import the `console` object's `log()` function using the "full" syntax, and the `importNums` object's `num1()`, `num3()`, and `num5()` functions using the [compact import syntax](#compact_import_sections). We run a function called `main()` that runs `num1()` and `num3()` and then adds the values they return together. It then multiplies the result by the value returned by `num5()`. We then log the final result to the console.

## WAT syntax

```plain
;; full syntax
import namespace value type

;; compact form 1
import namespace
  item value type
  item value type
  ...

;; compact form 2
import namespace
  item value
  item value
  ...
  type
```

- `import`
  - : The `import` keyword. Must always be included first.
- `item`
  - : The `item` keyword. Included at the start of each value definition line when using [compact import syntax](#compact_import_sections).
- `namespace`
  - : An identifying name for the object that the value is being imported from in the host.
- `value`
  - : An identifying name for the value being imported.
- `type`
  - : The type of the imported value. This can be one of the following external types:
    - [`func`](/en-US/docs/WebAssembly/Reference/Definitions/types/func)
      - : Declares a function signature.
    - [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global)
      - : Declares a Wasm global.
    - [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory)
      - : Declares a Wasm memory.
    - [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table)
      - : Declares a Wasm table.
    - [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag)
      - : Declares a Wasm tag.

## Description

When you want to use values defined in the host in a Wasm module, you can make them available via `import` definitions. For example:

```wat
(import "importObj" "myFunc" (func (result i32)))
(import "importObj" "myGlobal" (global $myglobal (mut i32)))
```

You can include as many `import` statements in a module as required. The imported values can then be used in the same way as values defined directly in the module. For example:

```wat
...

global.get $myglobal
call 0

...
```

If the imported value is given a name identifier (as with the `global` value in the previous example), it can be referenced using its name or index value. If it doesn't have a name identifier (as with the `func` value in the previous example), it can be referenced only by its index value. Bear in mind that name identifiers are text format syntactic sugar. Once compiled, the module will use the index values behind the scenes.

Imported and defined items use the same index space. In the next snippet, we show an imported table followed by a defined table:

```wat
(import "importObj" "myTable" (table $table1 1 10 funcref))
(table $table2 2 8 externref)
```

In this case, the imported table appears first, so it is available at index 0. The defined table appears second, so it is available at index 1.

### Import types

You can import the following external types into a Wasm module.

#### Function

When importing a function, the `type` field is a [`func`](/en-US/docs/WebAssembly/Reference/Definitions/types/func):

```wat
(import "importObj" "myFunc" (func $myfunc (param i32) (result i32)))
```

or

```wat
(type $myfuncType (func (param i32) (result i32)))
(import "importObj" "myFunc" (func $myfunc (type $myfuncType)))
```

This includes:

- An optional function identifier
- A list of parameter types
- A list of result types

#### Global

When importing a global, the `type` field is a [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global):

```wat
(import "importObj" "myGlobal" (global $myglobal i32))
```

or

```wat
(import "importObj" "myGlobal" (global $myglobal (mut i32)))
```

This includes:

- An optional global identifier
- The [data type](/en-US/docs/WebAssembly/Reference/Definitions/global#data_type) of the global, preceded by the `mut` flag if the global is mutable.

#### Memory

When importing a memory, the `type` field is a [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory):

```wat
(import "importObj" "mem" (memory $mymem 1 10 shared))
```

This includes:

- An optional memory identifier
- An initial size, in units of 64KiB pages
- A maximum size, required if you specify `shared`
- The `shared` keyword, which denotes a shared memory

#### Table

When importing a table, the `type` field is a [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table):

```wat
(import "importObj" "myTable" (table $mytable 1 10 funcref))
```

This includes:

- An optional table identifier
- An initial size
- An optional maximum size
- The [value type](/en-US/docs/WebAssembly/Reference/Definitions/elem#value_type) stored by the table

#### Tag

When importing a tag, the `type` field is a [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag):

```wat
(import "importObj" "tag" (tag $mytag (param i32)))
```

This includes:

- An optional tag identifier
- One or more values specifying the represented exception type's parameters and their types (each is written with the keyword `param` followed by any [Wasm type](/en-US/docs/WebAssembly/Reference/Value_types))

### Compact import sections

One problem with the "full" `import` syntax is that you specify the namespace and value for every import. This is not so much of an issue for trivial examples; however, for larger Wasm modules you usually have a small number of namespaces and a larger number of values to import.

For example:

```wat
(import "importObj" "func1" (func $f1 (result i32)))
(import "importObj" "func2" (func $f2 (result i32)))
(import "importObj" "func3" (func $f3 (result i32)))
(import "importObj" "func4" (func $f4 (result i32)))
...
```

In such examples, repeating the namespace and possibly also the type creates wasteful redundancy in the module's binary encoding (and also in the text format).

To cut down on this redundancy and reduce the binary file size, you can use the shorthand compact import syntax. There are two forms, one that deduplicates the namespace, and one that deduplicates both the namespace and the type. Let's consider the following example:

```wat
(import "importNums" "num1" (func $n1 (result i32)))
(import "importNums" "num3" (func $n3 (result i32)))
(import "importNums" "num5" (func $n5 (result i32)))
```

The following sections show how to rewrite these imports using the compact forms.

> [!NOTE]
> The compact import text format provides a hint to Wasm tooling to use a given compact import binary encoding. There is nothing to stop the tooling from parsing one of the compact text formats and emitting the non-compact binary format.

#### Compact form 1: Deduplicate namespace

In the first form, the namespace is written once, after the `import` keyword. You then write each value inside that namespace on its own line, followed by the value's type as before. The text format includes the keyword `item` at the start of each value line.

```wat
(import "importNums"
  (item "num1" (func $n1 (result i32)))
  (item "num3" (func $n3 (result i32)))
  (item "num5" (func $n5 (result i32)))
)
```

#### Compact form 2: Deduplicate namespace and type

Because each imported function in this example has the same `type`, we can deduplicate that as well. In the second form, each value is included after the `item` keyword as before, but we only include the `type` once, on its own line at the bottom of the `item` lines.

```wat
(import "importNums"
  (item "num1")
  (item "num3")
  (item "num5")
  (func (result i32))
)
```

It is important to note that in the second form, you can't specify name identifiers for the different values in the text format, therefore you have to use index values when referring to them:

```wat
...

call 0
call 1
call 2

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly definitions](/en-US/docs/WebAssembly/Reference/Definitions/)
- [`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global)
- [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory)
- [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table)
- [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag)
