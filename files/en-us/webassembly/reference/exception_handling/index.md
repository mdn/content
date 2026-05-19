---
title: WebAssembly exception handling instructions
slug: WebAssembly/Reference/Exception_handling
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly exception handling instructions.

## Throw

- [`throw`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw)
  - : Throws an exception of a specified type, as defined by a [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition.
- [`throw_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/throw_ref)
  - : Rethrows a previously-thrown exception represented by an [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) value.

## Try

- [`try_table`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table)
  - : Enables you to test a block of code to see whether it throws an exception, handling the exception with a [catch clause](#catch_clauses) clause if so.

### Catch clauses

- [`catch`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch)
  - : Catches exceptions matching a specified error `tag`, pushing the exception payload to the stack.
- [`catch_all`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all)
  - : Catches any exception and pushes nothing to the stack.
- [`catch_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_ref)
  - : Catches exceptions matching a specified error `tag`, pushing the exception payload and an [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) value representing the exception to the stack.
- [`catch_all_ref`](/en-US/docs/WebAssembly/Reference/Exception_handling/try_table/catch_all_ref)
  - : Catches any exception and pushes an `exnref` value representing the exception to the stack.

## See also

- [`exnref`](/en-US/docs/WebAssembly/Reference/Types/exnref) type
- [`tag`](/en-US/docs/WebAssembly/Reference/Definitions/tag) definition
- [`WebAssembly.Exception`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Exception) JavaScript interface
- [`WebAssembly.Tag`](/en-US/docs/WebAssembly/Reference/JavaScript_interface/Tag) JavaScript interface
