---
title: Compile
slug: Glossary/Compile
tags:
  - CodingScripting
  - Glossary
---
**Compiling** is the process of transforming a computer program written in a given {{Glossary("computer programming", "language")}} into a set of instructions in another format or language. A **compiler** is a computer program to execute that task.

Typically, a compiler transforms code written in a higher-level language such as [C++](https://en.wikipedia.org/wiki/C++) or [Rust](<https://en.wikipedia.org/wiki/Rust_(programming_language)>) or [Java](<https://en.wikipedia.org/wiki/Java_(programming_language)>) into executable (runnable) code — so-called **binary code** or **machine code**. [WebAssembly](/en-US/docs/WebAssembly), for example, is a form of executable binary code that [can be compiled from code written in C++, Rust, C#, Go, Swift, and several other languages](https://webassembly.org/getting-started/developers-guide/) and that can then be run on any web page, in any browser.

Most compilers perform either ahead-of-time (AOT) compilation or just-in-time (JIT) compilation.

The GNU `gcc` compiler is one well-known example of an AOT compiler. AOT compilers are typically invoked from the command line in a shell environment (from within a terminal or console) or within an {{Glossary("IDE")}}.

JIT compilers are typically not invoked directly but are instead built into software runtimes internally, for the purpose of improving performance. For example, all major browsers now use JavaScript engines that have built-in JIT compilers.

Compilers may also translate among higher-level languages — for example, from TypeScript to {{Glossary("JavaScript")}} — in which case, they are often sometimes referred to as **transpilers**.

## See also

- [Compiling from C/C++ to WebAssembly](/en-US/docs/WebAssembly/C_to_wasm)
- [Compiling from Rust to WebAssembly](/en-US/docs/WebAssembly/Rust_to_wasm)
- Wikipedia: {{Interwiki("wikipedia", "Compiler")}}
