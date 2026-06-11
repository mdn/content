---
title: "copy: Wasm table instruction"
short-title: copy
slug: WebAssembly/Reference/Table/copy
page-type: webassembly-instruction
browser-compat: webassembly.table.copy
sidebar: webassemblysidebar
---

The **`table.copy`** [table instruction](/en-US/docs/WebAssembly/Reference/Table) copies element references from one [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) location to another.

{{InteractiveExample("Wat Demo: table.copy", "tabbed-taller")}}

```wat interactive-example
(module
  (table $first_table 2 funcref)
  (table $second_table 3 funcref)

  (func $f1 (result i32)
    i32.const 42
  )
  (func $f2 (result i32)
    i32.const 100
  )

  (elem $funcs (table $first_table) (i32.const 0) funcref (ref.func $f1) (ref.func $f2))

  (func (export "copy")
    i32.const 1    ;; destination table offset
    i32.const 0    ;; source table offset
    i32.const 2    ;; number of elements to copy
    table.copy $second_table $first_table
  )

  (func (export "accessTable") (param $index i32) (result i32)
    local.get $index
    call_indirect $second_table (result i32)
  )
)
```

```js interactive-example
WebAssembly.instantiateStreaming(fetch("{%wasm-url%}")).then((result) => {
  result.instance.exports.copy();
  const value = result.instance.exports.accessTable(2);
  console.log(value);
});
```

In the above example, we define two tables: `$first_table` with a capacity of two elements, and `$second_table` with a capacity of three elements. We then define two functions that each return a different integer and store those functions in `$first_table` using an active [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem) definition.

We then define two exported functions:

- `copy()`, which uses a `table.copy` instruction to copy the two function references from `$first_table` into the second and third element slots of `$second_table`.
- `accessTable()`, which calls (via `call_indirect`) the element referenced in `$second_table` in the slot number equal to the function's parameter. It then returns the value returned by the called function.

In the JavaScript, we call the two Wasm functions, then log the value returned from `accessTable()` to the console, which is equal to the return value of the function stored in the third slot of `$second_table`.

## Syntax

```plain
table.copy dest_table source_table
```

- `table.copy`
  - : The `table.copy` instruction type. Must always be included first.
- `dest_table` {{optional_inline}}
  - : The identifier for the `table` you want to copy the function references into.
- `source_table` {{optional_inline}}
  - : The identifier for the `table` you want to copy the function references from.

`dest_table` and `source_table` can be one of the following:

- `name`
  - : An identifying name [set for the `table`](/en-US/docs/WebAssembly/Reference/Definitions/table#name) when it was first defined. This must begin with a `$` symbol, for example `$my_table`.
- `index`
  - : The `table`'s index number, for example `0` for the first `table` in the wasm module, `1` for the second, etc.

If `dest_table` or `source_table` are omitted, they default to `0`.

### Type

```plain
[dest_offset source_offset length] -> []
```

- `dest_offset`
  - : An [`i32`](/en-US/docs/WebAssembly/Reference/Value_types/i32) representing the offset to start writing the copied element references to, in the destination table.
- `source_offset`
  - : An `i32` representing the offset to start copying element references from, in the source table.
- `length`
  - : An `i32` representing the number of function references to copy.

### Traps

If the source or destination offset are out of bounds, the instruction traps.

### Binary encoding

| Instruction  | Binary format                       | Example text => binary                    |
| ------------ | ----------------------------------- | ----------------------------------------- |
| `table.copy` | `0xfc 14:u32 x:tableidx x:tableidx` | `table.copy 0 0` => `0xfc 0x0e 0x00 0x00` |

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table) definition
- [WebAssembly table instructions](/en-US/docs/WebAssembly/Reference/Table)
