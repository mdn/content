---
title: WebAssembly
slug: WebAssembly
page-type: landing-page
sidebar: webassemblysidebar
---

WebAssembly (Wasm) is a low-level assembly-like language that brings near-native performance to the web. It serves as a compilation target for languages like C/C++, C#, and Rust, allowing high-performance code to run directly in the browser.

WebAssembly is designed to complement and run alongside JavaScript. Using the WebAssembly JavaScript APIs, you can load WebAssembly modules into a JavaScript app and share functionality between the two. This allows you to take advantage of WebAssembly's performance and power and JavaScript's expressiveness and flexibility in the same app — without having to write low-level WebAssembly code yourself.

## Guides

The [WebAssembly guides](/en-US/docs/WebAssembly/Guides) cover topics such as high-level concepts, compiling from different languages, the textual representation of the Wasm binary format, and how to run WebAssembly.

## API reference

The [WebAssembly reference](/en-US/docs/WebAssembly/Reference) is split into the following sections:

- [WebAssembly JavaScript API](/en-US/docs/WebAssembly/Reference/JavaScript_interface)
  - : The WebAssembly JavaScript object acts as the namespace for all WebAssembly-related functionality.
- [WebAssembly value types](/en-US/docs/WebAssembly/Reference/Value_types)
  - : The different WebAssembly value types.
- [WebAssembly definitions](/en-US/docs/WebAssembly/Reference/Definitions)
  - : The top-level definitions available in Wasm for defining module features such as tables, types, memories, functions, etc.
- [WebAssembly instructions](/en-US/docs/WebAssembly/Reference#instructions)
  - : The instructions available in Wasm for handling logic.

## Examples

Our reference documentation has several live examples to demonstrate how the different features work. You can find additional examples in our [webassembly-examples](https://github.com/mdn/webassembly-examples/) repo.

## See also

- [webassembly.org](https://webassembly.org/)
- [WebAssembly browser feature support status](https://webassembly.org/features/?categories=browsers) on webassembly.org (2026)
- [W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/)
