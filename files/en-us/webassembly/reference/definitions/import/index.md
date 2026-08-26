---
title: "import: Wasm definition"
short-title: import
slug: WebAssembly/Reference/Definitions/import
page-type: webassembly-instruction
browser-compat: webassembly.definitions.import
sidebar: webassemblysidebar
---

The **`import`** [definition](/en-US/docs/WebAssembly/Reference/Definitions) declares one or more **imports**, which reference values imported from the JavaScript host (such as functions or [memories](/en-US/docs/WebAssembly/Reference/Definitions/memory)) and makes them available for use in the Wasm module.

{{InteractiveExample("Wat Demo: import", "tabbed-taller")}}

```wat interactive-example
(module
  (import "console" "log" (func $log (param i32)))
  (import "importNums" "num1" (func $num1 (result i32)))
  (import "importNums" "num3" (func $num3 (result i32)))
  (import "importNums" "num5" (func $num5 (result i32)))
  (func $main
    call $num1
    call $num3
    i32.add
    call $num5
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

In the above example, we define an import object called `importNums` in the JavaScript that contains three functions, each of which returns an integer. When we instantiate the Wasm module via [`WebAssembly.instantiateStreaming()`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static), we import `importNums` and the built-in {{domxref("console")}} object.

In the Wasm module, we import the `console` object's `log()` function, and the `importNums` object's `num1()`, `num3()`, and `num5()` functions. We run a function called `main()` that runs `num1()` and `num3()` and then adds the values they return together, then multiplies the result by the value returned by `num5()`. We then log the final result to the console.

## Syntax

```plain
import namespace value type
```

- `import`
  - : The `import` keyword. Must always be included first.
- `namespace`
  - : An identifying name for the object that the value is being imported from in the JavaScript host.
- `value`
  - : An identifying name for the value being imported.
- `type`
  - : The type of the imported value. This can be one of the following external types:
    - [`func`](/en-US/docs/WebAssembly/Reference/Definitions/types/func)
      - : Declares a function signature, which represents a JavaScript function.
    - [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global)
      - : Declares a Wasm global; represents a JavaScript [`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) definition.
    - [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory)
      - : Declares a Wasm memory; represents a JavaScript [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) definition.
    - [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table)
      - : Declares a Wasm table; represents a JavaScript [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) definition.
    - [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag)
      - : Declares a Wasm tag; represents a JavaScript [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) definition.

## Description

When you want to make use of values defined in the JavaScript host in a Wasm module, you can make them available via `import` definitions. For example:

```wat
(import "importObj" "myFunc" (func (result i32)))
(import "js" "myGlobal" (global $myglobal (mut i32)))
```

You can include as many `import` statements in a module as required. The imported values can then be used in the module in the same way as values defined directly in the module. For example:

```wat
...

global.get $myglobal
call 0

...
```

If the imported value is given a name identifier (as with the `global` value in the previous example), it can be referenced using its name or index value. If it doesn't have a name identifier (as with the `func` value in the previous example), it can only be referenced using its index value. Bear in mind that name identifiers are text format syntactic sugar. Once compiled, the module will use the index values behind the scenes.

### Import types

You can import the following value types into a Wasm module.

#### Function

When importing a JavaScript function, the `type` field is a [`func`](/en-US/docs/WebAssembly/Reference/Definitions/types/func):

```wat
(import "importObj" "myFunc" (func $myfunc (param i32) (result i32)))
```

This includes:

- An optional function identifier
- A list of parameter types
- A list of result types

#### Global

When importing a JavaScript [`WebAssembly.Global`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global) definition, the `type` field is a [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global):

```wat
(import "js" "myGlobal" (global $myglobal (mut i32)))
```

This includes:

- An optional global name
- The [data type](/en-US/docs/WebAssembly/Reference/Definitions/global#data_type) of the global, preceded by the `mut` flag if the global is mutable ([`mutable`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Global/Global#mutable) was set to `true` in the definition)

#### Memory

When importing a JavaScript [`WebAssembly.Memory`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Memory) definition, the `type` field is a [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory):

```wat
(import "js" "mem" (memory $mymem 1 10 shared))
```

This includes:

- An optional memory name
- An initial size, in units of 64KiB pages
- A maximum size, required only if you specify `shared`
- The `shared` keyword, which denotes a shared memory

#### Table

When importing a JavaScript [`WebAssembly.table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) definition, the `type` field is a [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table):

```wat
(import "js" "myTable" (table $mytable 1 10 funcref))
```

This includes:

- An optional table name
- An initial size
- An optional maximum size
- The [value type](/en-US/docs/WebAssembly/Reference/Definitions/elem#value_type) stored by the table

#### Tag

When importing a JavaScript [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) definition, the `type` field is a [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag):

```wat
(import "js" "tag" (tag $mytag (param i32)))
```

This includes:

- An optional tag name
- One or more values specifying the represented exception type's parameters and their values (these are the keyword `param`, followed by any [Wasm type](/en-US/docs/WebAssembly/Reference/Value_types))

### Compact import sections

One problem with the "longhand" `import` syntax seen earlier is that you specify the namespace and value for every import. This is not so much of an issue for trivial examples, however for larger Wasm modules, you usually have a small number of namespaces and possibly hundreds or thousands of values to import. For example:

```wat
(import "importObj" "func1" (func $func1 (result i32)))
(import "importObj" "func2" (func $func2 (result i32)))
(import "importObj" "func3" (func $func3 (result i32)))
(import "importObj" "func4" (func $func4 (result i32)))
...
```

In such examples, repeating the namespace and possibly also the value type creates wasteful redundancy.

To cut down on this redundancy, you can use the compact import shorthand syntax. There are two forms, one that deduplicates the namespace, and one that deduplicates both the namespace and the type. Let's again consider the imports in our live example:

```wat
(import "console" "log" (func $log (param i32)))
(import "importNums" "num1" (func $num1 (result i32)))
(import "importNums" "num3" (func $num3 (result i32)))
(import "importNums" "num5" (func $num5 (result i32)))
```

In the below sections we show how to rewrite the bottom three using the compact forms.

#### Deduplicate namespace

In the first form, the namespace is written once, after the `import` keyword. You then write each value inside that namespace on its own line, followed by the value's type as before. The text format includes the keyword `item` at the start of each value line.

```wat
(import "importNums"
  (item "num1" (func $num1 (result i32)))
  (item "num3" (func $num3 (result i32)))
  (item "num5" (func $num5 (result i32)))
)
```

#### Deduplicate namespace and type

Because each imported function in this example has the same `type`, we can deduplicate that as well. In the second form, each value is included after the `item` keyword as before, but we only include the `type` once, on its own line at the bottom of the `item` lines.

```wat
(import "importNums"
    (item "num1")
    (item "num3")
    (item "num5")
    (func (result i32))
  )
```

It is import to note that in the second form, you can't specify name identifiers for the different values, threfore you have to use index values when referring to them later in the code:

```wat
...

call 1
call 2
call 3

...
```

In this case the index values are `1`, `2`, and `3`, because the `0` index position refers to the `log()` function import that appears in the code before the "num" function imports.

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
