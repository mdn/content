---
title: Tools for game development
slug: Games/Tools
page-type: landing-page
---

{{GamesSidebar}}

On this page, you can find links to our game development tools articles, which eventually aim to cover frameworks, compilers, and debugging tools.

- [asm.js](/en-US/docs/Games/Tools/asm.js)
  - : asm.js is a very limited subset of the JavaScript language, which can be significantly optimized and run in an ahead-of-time (AOT) compiling engine for much faster performance than your typical JavaScript performance. This is, of course, great for games.
- [Emscripten](https://github.com/emscripten-core/emscripten/wiki)
  - : An LLVM to JavaScript compiler; with Emscripten, you can compile C++ and other languages that can compile to LLVM bytecode into high-performance JavaScript. This is an excellent tool for porting applications to the Web! There is a [useful Emscripten tutorial](https://github.com/emscripten-core/emscripten/wiki/Tutorial) available on the wiki.
- [Firefox Profiler](https://profiler.firefox.com/docs/#/)
  - : The Firefox Profiler lets you profile your code to help figure out where your performance issues are so that you can make your game run at top speed.
- Toolchain for developing and debugging games

  - : How does this differ from normal web app debugging? What specialist tools are available? A lot of this is going to be covered by Will in [tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html), but here we should provide a kind of practical toolchain tutorial for debugging games, with links to Will's stuff:

    - Basic tools overview
    - [Shader editor](https://firefox-source-docs.mozilla.org/devtools-user/shader_editor/index.html)
    - Performance tools (still in production, estimated early 2014)
