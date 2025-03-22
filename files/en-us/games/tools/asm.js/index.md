---
title: asm.js
slug: Games/Tools/asm.js
page-type: guide
status:
  - deprecated
---

{{GamesSidebar}}

> [!WARNING]
> The [asm.js](http://asmjs.org/) specification is considered **deprecated**.
> Developers may look to [WebAssembly](/en-US/docs/WebAssembly) as an alternative to asm.js for running high-performance code in the browser.

[Asm.js](http://asmjs.org/) is a specification defining a subset of JavaScript that is highly optimizable. This article looks at exactly what is permitted in the asm.js subset, what improvements it confers, where and how you can make use of it, and further resources and examples.

## What is asm.js, exactly?

It is a very small, strict subset of JavaScript that only allows things like `while`, `if`, numbers, top-level named functions, and other simple constructs. It does not allow objects, strings, closures, and basically anything that requires heap allocation. Asm.js code resembles C in many ways, but it's still completely valid JavaScript that will run in all current engines. It pushes JS engines to optimize this kind of code, and gives compilers like [Emscripten](https://github.com/emscripten-core/emscripten) a clear definition of what kind of code to generate. We will show what asm.js code looks like and explain how it helps and how you can use it.

This subset of JavaScript is already highly optimized in many JavaScript engines using fancy Just-In-Time (JIT) compiling techniques. However, by defining an explicit standard we can work on optimizing this kind of code even more and getting as much performance as we can out of it. It makes it easier to collaborate across multiple JS engines because it's easy to talk about and benchmark. The idea is that this kind of code **should** run very fast in each engine, and if it doesn't, it's a bug and there's a clear spec that engines should optimize for.

It also makes it easy for people writing compilers that want to generate high-performant code on the web. They can consult the asm.js spec and know that it will run fast if they adhere to asm.js patterns. [Emscripten](https://github.com/emscripten-core/emscripten), a C/C++ to JavaScript compiler, emits asm.js code to make it run with near native performance on several browsers.

Additionally, if an engine chooses to specially recognize asm.js code, there even more optimizations that can be made. Firefox is the only browser to do this right now.

## asm.js language summary

asm.js is an intermediate programming language. asm.js has a very predictable performance rate because it is limited to an extremely restricted subset of JavaScript that provides only strictly-typed integers, floats, arithmetic, function calls, and heap accesses. The performance characteristics are closer to native code than that of standard JavaScript. Using a subset of JavaScript asm.js is already supported by major web browsers. Since asm.js runs in a browser it depends heavily on the browser and the hardware.
