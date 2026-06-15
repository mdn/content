---
title: "drop: Wasm elem instruction"
short-title: drop
slug: WebAssembly/Reference/Elem/drop
page-type: webassembly-instruction
browser-compat: webassembly.elem.drop
sidebar: webassemblysidebar
---

The **`elem.drop`** [elem instruction](/en-US/docs/WebAssembly/Reference/Elem) discards the data contained by a [passive](/en-US/docs/WebAssembly/Reference/Definitions/elem#passive_form) `elem` segment, freeing up its memory, after being used in a [`table.init`](/en-US/docs/WebAssembly/Reference/Table/init).

{{InteractiveExample("Wat Demo: elem.drop", "tabbed-taller")}}

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
    ;; segment data no longer needed
    elem.drop $funcs
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

In the above example, we define a `table`, two functions, and an `elem` called `$funcs` that references the two functions. We then invoke `table.init` to copy the references from the `$funcs` `elem` over to the `table`. With this done, the `elem` is no longer needed, so we call `elem.drop` to free up the memory it was using.

## Syntax

```plain
elem.drop identifier
```

- `elem.drop`
  - : The `elem.drop` instruction type. Must always be included first.
- `identifier`
  - : The identifier for the `elem` you want to drop. This can be one of the following:
    - `name`
      - : An identifying name [set for the `elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem#name) when it was first defined. This must begin with a `$` symbol, for example `$my_elem`.
    - `index`
      - : The elem's index number, for example `0` for the first elem in the wasm module, `1` for the second, etc.

### Type

```plain
[] -> []
```

### Binary encoding

| Instruction | Binary format           | Example text => binary            |
| ----------- | ----------------------- | --------------------------------- |
| `elem.drop` | `0xfc 13:u32 x:elemidx` | `elem.drop 0` => `0xfc 0x0d 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) definition
- [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem) definition
- [WebAssembly table instructions](/en-US/docs/WebAssembly/Reference/Table)
