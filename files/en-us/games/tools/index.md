---
title: Tools for game development
slug: Games/Tools
page-type: landing-page
sidebar: games
---

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

## Web Technologies

<table class="no-markdown standard-table">
  <caption>Web technologies in game development and their function</caption>
  <thead>
    <tr>
      <th scope="col"><strong>Function</strong></th>
      <th scope="col"><strong>Technology</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Audio</strong></td>
      <td><a href="/en-US/docs/Web/API/Web_Audio_API">Web Audio API</a></td>
    </tr>
    <tr>
      <td><strong>Graphics</strong></td>
      <td>
        <a href="/en-US/docs/Web/API/WebGL_API">WebGL</a> (<a
          href="https://www.khronos.org/opengles/"
          >OpenGL ES</a
        >
        2.0)
      </td>
    </tr>
    <tr>
      <td><strong>Input</strong></td>
      <td>
        <a href="/en-US/docs/Web/API/Touch_events">Touch events</a>,
        <a href="/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API"
          >Gamepad API</a
        >, device sensors, <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a>,
        <a href="/en-US/docs/Web/API/Fullscreen_API">Full Screen API</a>,
        <a href="/en-US/docs/Web/API/Pointer_Lock_API">Pointer Lock API</a>
      </td>
    </tr>
    <tr>
      <td><strong>Language</strong></td>
      <td>
        <a href="/en-US/docs/Web/JavaScript">JavaScript</a> (or C/C++ using
        <a href="https://github.com/emscripten-core/emscripten/wiki">Emscripten</a> to
        compile to JavaScript)
      </td>
    </tr>
    <tr>
      <td><strong>Networking</strong></td>
      <td>
        <a href="/en-US/docs/Web/API/WebRTC_API">WebRTC</a> and/or
        <a href="/en-US/docs/Web/API/WebSockets_API">WebSockets</a>
      </td>
    </tr>
    <tr>
      <td><strong>Storage</strong></td>
      <td>
        <a href="/en-US/docs/Web/API/IndexedDB_API">IndexedDB</a> or the "cloud"
      </td>
    </tr>
    <tr>
      <td><strong>Web</strong></td>
      <td>
        <a href="/en-US/docs/Web/HTML">HTML</a>,
        <a href="/en-US/docs/Web/CSS">CSS</a>,
        <a href="/en-US/docs/Web/SVG">SVG</a> (and much more!)
      </td>
    </tr>
  </tbody>
</table>

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
  - : Send and receive any kind of data you want from a Web server like downloading new game levels and artwork to transmitting non-real-time game status information back and forth.
- [Full Screen API](/en-US/docs/Web/API/Fullscreen_API)
  - : Full screen gameplay.
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Use gamepads or other game controllers.
- [HTML](/en-US/docs/Web/HTML) and [CSS](/en-US/docs/Web/CSS)
  - : Build, style, and lay out your game's user interface.
- [HTML audio](/en-US/docs/Web/HTML/Reference/Elements/audio)
  - : Easily play simple sound effects and music.
- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
  - : Store user data on their own computer or device.
- [JavaScript](/en-US/docs/Web/JavaScript)
  - : Fast web programming language to write the code for your game.
    To easily port your existing games [Emscripten](https://github.com/emscripten-core/emscripten/wiki) or [Asm.js](http://asmjs.org/spec/latest/)
- [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
  - : Lock the mouse or other pointing device within your game's interface.
- [SVG](/en-US/docs/Web/SVG) (Scalable Vector Graphics)
  - : Build vector graphics that scale smoothly regardless of the size or resolution of the user's display.
- [Typed Arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Access raw binary data from within JavaScript; Manipulate GL textures, game data, or anything else.
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
  - : Control the playback, synthesis, and manipulation of audio in real time.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : Create high-performance, hardware-accelerated 3D (and 2D) graphics. [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
  - : Real-Time Communications to control audio and video data, including teleconferencing and transmitting other application data back and forth between two users like chat.
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
  - : Connect your app or site to a server to transmit data back and forth in real-time. Perfect for multiplayer gaming action, chat services, and so forth.
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Spawn background threads running their own JavaScript code for multicore processors.

## Port native games to the Web

If you are a native developer (for example writing games in C++), and you are interested in how you can port your games over to the Web, you should learn more about our [Emscripten](https://emscripten.org/index.html) tool — this is an LLVM to JavaScript compiler, which takes LLVM bytecode (e.g., generated from C/C++ using Clang, or from another language) and compiles that into [asm.js](/en-US/docs/Games/Tools/asm.js), which can be run on the Web.

To get started, see:

- [About Emscripten](https://emscripten.org/docs/introducing_emscripten/about_emscripten.html) for an introduction including high-level details.
- [Download and Install](https://emscripten.org/docs/getting_started/downloads.html) for installing the toolchain.
- [Emscripten Tutorial](https://emscripten.org/docs/getting_started/Tutorial.html) for a tutorial to teach you how to get started.
