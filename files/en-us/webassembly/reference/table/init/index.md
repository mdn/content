---
title: "init: Wasm table instruction"
short-title: init
slug: WebAssembly/Reference/Table/init
page-type: webassembly-instruction
browser-compat: webassembly.table.init
sidebar: webassemblysidebar
---

The **`table.init`** [table instruction](/en-US/docs/WebAssembly/Reference/Table) manually copies the element references from a passive [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem) definition into a [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table).

{{InteractiveExample("Wat Demo: table.init", "tabbed-taller")}}

```wat interactive-example
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

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.init();
  const value = result.instance.exports.accessTable(1);
  console.log(value);
});
```

In the above example, we define a `table`, two functions, and an `elem` called `$funcs` that references the two function. We then invoke `table.init` to copy the function references from the `$funcs` `elem` over to the `table`.

## Syntax

```plain
table.init table_identifier elem_identifier
```

- `table.init`
  - : The `table.init` instruction type. Must always be included first.
- `table_identifier` {{optional_inline}}
  - : The identifier for the `table` you want to insert the function references into. This can be one of the following:
    - `name`
      - : An identifying name [set for the `table`](/en-US/docs/WebAssembly/Reference/Definitions/table#name) when it was first defined. This must begin with a `$` symbol, for example `$my_table`.
    - `index`
      - : The `table`'s index number, for example `0` for the first `table` in the wasm module, `1` for the second, etc.

    If ommitted, `table_identifier` defaults to `0`.

- `elem_identifier`
  - : The identifier for the `elem` you want to get the function references from to insert. This can be one of the following:
    - `name`
      - : An identifying name [set for the `elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem#name) when it was first defined. This must begin with a `$` symbol, for example `$my_elem`.
    - `index`
      - : The `elem`'s index number, for example `0` for the first `elem` in the wasm module, `1` for the second, etc.

### Type

```plain
[destination offset length] -> []
```

- `destination`
  - An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) representing the table index to start copying the element references at.
- `offset`
  - An `i32` representing the starting offset in the `elem` [`element_list`](/en-US/docs/WebAssembly/Reference/Definitions/elem#element_list) to start copying the element references from.
- `length`
  - An `i32` representing the number of function references to copy.

### Binary encoding

| Instruction  | Binary format               | Example text => binary                    |
| ------------ | --------------------------- | ----------------------------------------- |
| `table.init` | `0xfc x:tableidx x:elemidx` | `table.init 0 0` => `0xfc 0x0c 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) definition
- [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem) definition
- [WebAssembly table instructions](/en-US/docs/WebAssembly/Reference/Table)
