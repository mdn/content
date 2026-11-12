---
title: WebAssembly reference instructions
slug: WebAssembly/Reference/Reference
page-type: landing-page
sidebar: webassemblysidebar
---

This set of pages details the reference instructions available in Wasm to create, test and convert references. References are opaque handles to functions, host (for example JavaScript) values, or garbage-collected objects. Common reference types include [`funcref`](/en-US/docs/WebAssembly/Reference/Value_types/funcref) and [`externref`](/en-US/docs/WebAssembly/Reference/Value_types/externref).

- [`ref.as_non_null`](/en-US/docs/WebAssembly/Reference/Reference/as_non_null)
  - : Converts a nullable reference into a non-nullable one, trapping if the reference is null.
- [`ref.cast`](/en-US/docs/WebAssembly/Reference/Reference/cast)
  - : Casts a reference to a given reference type, trapping if the cast fails.
- [`ref.eq`](/en-US/docs/WebAssembly/Reference/Reference/eq)
  - : Checks whether two references are equal.
- [`ref.func`](/en-US/docs/WebAssembly/Reference/Reference/func)
  - : Creates a reference to a given function.
- [`ref.is_null`](/en-US/docs/WebAssembly/Reference/Reference/is_null)
  - : Checks whether a reference is null.
- [`ref.null`](/en-US/docs/WebAssembly/Reference/Reference/null)
  - : Creates a null reference of a given heap type.
- [`ref.test`](/en-US/docs/WebAssembly/Reference/Reference/test)
  - : Checks whether a reference matches a given reference type.
