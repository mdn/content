---
title: Tools for game development
slug: Games/Tools
tags:
  - Games
  - Gecko
  - Guide
  - JavaScript
---

{{GamesSidebar}}

On this page you can find links to our game development tools articles, which eventually aims to cover frameworks, compilers, and debugging tools.

- [asm.js](/en-US/docs/Games/Tools/asm.js)
  - : asm.js is a very limited subset of the JavaScript language, which can be greatly optimized and run in an ahead-of-time (AOT) compiling engine for much faster performance than your typical JavaScript performance. This is, of course, great for games.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : An LLVM to JavaScript compiler; with Emscripten, you can compile C++ and other languages that can compile to LLVM bytecode into high-performance JavaScript. This is a great tool for porting applications to the Web! There is a [useful Emscripten tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) available on the wiki. Note that we are [aiming to cover Emscripten in its own section of MDN](/en-US/docs/Emscripten).
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : The Firefox Profiler lets you profile your code to help figure out where your performance issues are so that you can make your game run at top speed.
- [Shumway](/en-US/docs/Mozilla/Projects/Shumway)
  - : Shumway is a renderer for Adobe Flash built entirely in JavaScript, WebGL, etc., bridging the gap between Flash and web standards. This article shows how to make use of Shumway, and how to contribute fixes and bugs to the project.
- Toolchain for developing and debugging games

  - : How does this differ from normal web app debugging? What specialist tools are available? A lot of this is going to be covered by Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), but here we should provide a kind of practical toolchain tutorial for debugging games, with links to Will's stuff:

    - Basic tools overview
    - [Shader editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Performance tools (still in production, estimated early 2014)
