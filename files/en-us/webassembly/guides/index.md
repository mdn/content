---
title: WebAssembly guides
short-title: Guides
slug: WebAssembly/Guides
page-type: listing-page
sidebar: webassemblysidebar
---

The [WebAssembly](/en-US/docs/WebAssembly) guides cover topics such as high-level concepts, compiling from different languages, the textual representation of the Wasm binary format, and how to run WebAssembly.

- [WebAssembly concepts](/en-US/docs/WebAssembly/Guides/Concepts)
  - : This article explains the concepts behind how WebAssembly works including its goals, the problems it solves, and how it runs inside the web browser's JavaScript engine.

## Compiling WebAssembly

- [Compiling a new C/C++ module to WebAssembly](/en-US/docs/WebAssembly/Guides/C_to_Wasm)
  - : When you've written a new code module in a language like C/C++, you can compile it into WebAssembly using a tool like [Emscripten](https://emscripten.org/). Let's look at how it works.
- [Compiling an existing C module to WebAssembly](/en-US/docs/WebAssembly/Guides/Existing_C_to_Wasm)
  - : A core use-case for WebAssembly is to take the existing ecosystem of C libraries and allow developers to use them on the web.
- [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Guides/Rust_to_Wasm)
  - : This tutorial shows you how to compile a Rust project into WebAssembly and use it in an existing web app.

## WebAssembly language guide

- [Understanding WebAssembly text format](/en-US/docs/WebAssembly/Guides/Understanding_the_text_format)
  - : To enable WebAssembly to be read and edited by humans, there is a textual representation of the Wasm binary format. This is an intermediate form designed to be displayed in text editors, browser developer tools, and other similar environments. This article explains how the text format works in terms of its raw syntax, and how it relates to the underlying bytecode it represents and the wrapper objects that represent Wasm in JavaScript.
- [Converting WebAssembly text format to binary](/en-US/docs/WebAssembly/Guides/Text_format_to_Wasm)
  - : WebAssembly has an S-expression-based textual representation, an intermediate form designed to be exposed in text editors, browser developer tools, etc. This article explains a little bit about how it works, and how to use available tools to convert text format files to the Wasm format.
- [Exported WebAssembly functions](/en-US/docs/WebAssembly/Guides/Exported_functions)
  - : Exported WebAssembly functions are how WebAssembly functions are represented in JavaScript. This article describes what they are in a little more detail.
- [WebAssembly JavaScript builtins](/en-US/docs/WebAssembly/Guides/JavaScript_builtins)
  - : WebAssembly JavaScript builtins are Wasm equivalents of JavaScript operations that provide a way to use JavaScript features inside Wasm modules without having to import JavaScript glue code to provide a bridge between JavaScript and WebAssembly values and calling conventions.
- [WebAssembly Imported global string constants](/en-US/docs/WebAssembly/Guides/Imported_string_constants)
  - : WebAssembly imported global string constants make working with JavaScript strings inside Wasm modules easier by removing the need for a lot of the boilerplate associated with traditional string imports.

## JavaScript API guide

- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Guides/Using_the_JavaScript_API)
  - : This article teaches you how to use the key features of the WebAssembly JavaScript API, including loading Wasm modules and manipulating WebAssembly memories, tables, and globals.
- [Loading and running WebAssembly code](/en-US/docs/WebAssembly/Guides/Loading_and_running)
  - : To use WebAssembly in JavaScript, you first need to pull your module into memory before compilation/instantiation. This article provides a reference for the different mechanisms that can be used to fetch WebAssembly bytecode, as well as how to compile/instantiate then run it.

## See also

- [WebAssembly](/en-US/docs/WebAssembly)
