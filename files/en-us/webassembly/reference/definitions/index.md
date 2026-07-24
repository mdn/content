---
title: WebAssembly definitions
slug: WebAssembly/Reference/Definitions
page-type: landing-page
spec-urls: https://webassembly.github.io/spec/core/syntax/modules.html
sidebar: webassemblysidebar
---

This set of pages details the top-level module definition features available in Wasm for defining items such as tables, types, memories, functions, etc.

## Types

- [`func`](/en-US/docs/WebAssembly/Reference/Definitions/types/func)
  - : A function signature, which defines a function's identifier, parameter types, body, and result types.

## Definitions

- [`data`](/en-US/docs/WebAssembly/Reference/Definitions/data)
  - : Defines a segment of bytes that can be copied into linear memory.
- [`elem`](/en-US/docs/WebAssembly/Reference/Definitions/elem)
  - : Declares a series of references that can be copied into a Wasm `table`.
- [`global`](/en-US/docs/WebAssembly/Reference/Definitions/global)
  - : Creates a new global.
- [`memory`](/en-US/docs/WebAssembly/Reference/Definitions/memory)
  - : Declares a block of linear memory in units of 64KB pages.
- [`table`](/en-US/docs/WebAssembly/Reference/Definitions/table)
  - : Creates a new table.
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag)
  - : Declares an exception type that can be thrown in the module.
