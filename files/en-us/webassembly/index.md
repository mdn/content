---
title: WebAssembly
slug: WebAssembly
tags:
  - Landing
  - WebAssembly
  - wasm
browser-compat: javascript.builtins.WebAssembly
---
{{WebAssemblySidebar}}

WebAssembly is a new type of code that can be run in modern web browsers — it is a low-level assembly-like language with a compact binary format that runs with near-native performance and provides languages such as C/C++, C# and Rust with a compilation target so that they can run on the web. It is also designed to run alongside JavaScript, allowing both to work together.

## In a Nutshell

WebAssembly has huge implications for the web platform — it provides a way to run code written in multiple languages on the web at near native speed, with client apps running on the web that previously couldn't have done so.

WebAssembly is designed to complement and run alongside JavaScript — using the WebAssembly JavaScript APIs, you can load WebAssembly modules into a JavaScript app and share functionality between the two. This allows you to take advantage of WebAssembly's performance and power and JavaScript's expressiveness and flexibility in the same apps, even if you don't know how to write WebAssembly code.

And what's even better is that it is being developed as a web standard via the [W3C WebAssembly Working Group](https://www.w3.org/wasm/) and [Community Group](https://www.w3.org/community/webassembly/) with active participation from all major browser vendors.

## Guides

- [WebAssembly concepts](/en-US/docs/WebAssembly/Concepts)
  - : Get started by reading the high-level concepts behind WebAssembly — what it is, why it is so useful, how it fits into the web platform (and beyond), and how to use it.
- [Compiling a New C/C++ Module to WebAssembly](/en-US/docs/WebAssembly/C_to_wasm)
  - : When you've written code in C/C++, you can then compile it into .wasm using a tool like [Emscripten](https://emscripten.org/). Let's look at how it works.
- [Compiling an Existing C Module to WebAssembly](/en-US/docs/WebAssembly/existing_C_to_wasm)
  - : A core use-case for WebAssembly is to take the existing ecosystem of C libraries and allow developers to use them on the web.
- [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Rust_to_wasm)
  - : If you've written some Rust code, you can compile it into WebAssembly! This tutorial takes you through all you need to know to compile a Rust project to wasm and use it in an existing web app.
- [Loading and running WebAssembly code](/en-US/docs/WebAssembly/Loading_and_running)
  - : After you have a .wasm, this article covers how to fetch, compile and instantiate it, combining the [WebAssembly JavaScript](/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly) API with the [Fetch](/en-US/docs/Web/API/Fetch_API) or [XHR](/en-US/docs/Web/API/XMLHttpRequest) APIs.
- [Using the WebAssembly JavaScript API](/en-US/docs/WebAssembly/Using_the_JavaScript_API)
  - : Once you've loaded a .wasm module, you'll want to use it. In this article we show you how to use WebAssembly via the WebAssembly JavaScript API.
- [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions)
  - : Exported WebAssembly functions are the JavaScript reflections of WebAssembly functions which allow calling WebAssembly code from JavaScript. This article describes what they are.
- [Understanding WebAssembly text format](/en-US/docs/WebAssembly/Understanding_the_text_format)
  - : This article explains the wasm text format. This is the low-level textual representation of a .wasm module shown in browser developer tools when debugging.
- [Converting WebAssembly text format to wasm](/en-US/docs/WebAssembly/Text_format_to_wasm)
  - : This article provides a guide on how to convert a WebAssembly module written in the text format into a .wasm binary.

## API reference

- [WebAssembly control flow](/en-US/docs/WebAssembly/Reference/Control_flow)
  - : Reference documentation for the set of WebAssembly control-flow operators.
- {{jsxref("Global_objects/WebAssembly", "WebAssembly")}}
  - : This object acts as the namespace for all WebAssembly related functionality.
- {{jsxref("Global_objects/WebAssembly/Global", "WebAssembly.Global()")}}
  - : A `WebAssembly.Global` object represents a global variable instance, accessible from both JavaScript and importable/exportable across one or more {{jsxref("WebAssembly.Module")}} instances. This allows dynamic linking of multiple modules.
- {{jsxref("Global_objects/WebAssembly/Module", "WebAssembly.Module()")}}
  - : A `WebAssembly.Module` object contains stateless WebAssembly code that has already been compiled by the browser and can be efficiently [shared with Workers](/en-US/docs/Web/API/Worker/postMessage), and instantiated multiple times.
- {{jsxref("Global_objects/WebAssembly/Instance", "WebAssembly.Instance()")}}
  - : A `WebAssembly.Instance` object is a stateful, executable instance of a `Module`.  `Instance` objects contain all the [Exported WebAssembly functions](/en-US/docs/WebAssembly/Exported_functions) that allow calling into WebAssembly code from JavaScript.
- {{jsxref("Global_objects/WebAssembly/instantiateStreaming", "WebAssembly.instantiateStreaming()")}}
  - : The `WebAssembly.instantiateStreaming()` function is the primary API for compiling and instantiating WebAssembly code, returning both a `Module` and its first `Instance`.
- {{jsxref("Global_objects/WebAssembly/Memory", "WebAssembly.Memory()")}}
  - : A `WebAssembly.Memory` object is a resizable {{jsxref("Global_objects/ArrayBuffer", "ArrayBuffer")}} that holds the raw bytes of memory accessed by an `Instance`.
- {{jsxref("Global_objects/WebAssembly/Table", "WebAssembly.Table()")}}
  - : A `WebAssembly.Table` object is a resizable typed array of opaque values, like function references, that are accessed by an `Instance`.
- {{jsxref("WebAssembly.CompileError()")}}
  - : Creates a new WebAssembly `CompileError` object.
- {{jsxref("WebAssembly.LinkError()")}}
  - : Creates a new WebAssembly `LinkError` object.
- {{jsxref("WebAssembly.RuntimeError()")}}
  - : Creates a new WebAssembly `RuntimeError` object.

## Examples

- [WASMSobel](https://github.com/JasonWeathersby/WASMSobel)
- See our [webassembly-examples](https://github.com/mdn/webassembly-examples/) repo for a number of other examples.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebAssembly on Mozilla Research](https://research.mozilla.org/)
- [webassembly.org](https://webassembly.org/)
- [WebAssembly articles on Mozilla Hacks blog](https://hacks.mozilla.org/category/webassembly/)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
- [Emscripting a C Library to Wasm](https://web.dev/emscripting-a-c-library/)
