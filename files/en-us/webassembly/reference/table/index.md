---
title: WebAssembly table instructions
slug: WebAssembly/Reference/Table
page-type: landing-page
browser-compat: webassembly.reference-types
spec-urls: https://webassembly.github.io/spec/core/syntax/instructions.html#table-instructions
sidebar: webassemblysidebar
---

This set of pages details the table instructions available in Wasm to create and manipulate [tables](/en-US/docs/WebAssembly/Reference/Definitions/table).

> [!NOTE]
> Equivalent functionality is available to JavaScript via the [`WebAssembly.Table`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Table) API.

## Instructions

- [`table.fill`](/en-US/docs/WebAssembly/Reference/Table/fill)
  - : Sets a range of table elements to the same value.
- [`table.get`](/en-US/docs/WebAssembly/Reference/Table/get)
  - : Retrieves the reference stored at a particular table index.
- [`table.grow`](/en-US/docs/WebAssembly/Reference/Table/grow)
  - : Increases the size of the table by a specified number of elements.
- [`table.set`](/en-US/docs/WebAssembly/Reference/Table/set)
  - : Changes the value stored in a particular table element.
- [`table.size`](/en-US/docs/WebAssembly/Reference/Table/size)
  - : Returns the current size of the table.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
