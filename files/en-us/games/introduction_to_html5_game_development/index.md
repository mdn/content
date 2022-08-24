---
title: Introduction to HTML Game Development
slug: Games/Introduction_to_HTML5_Game_Development
tags:
  - Firefox OS
  - Games
  - HTML
  - Mobile
---

{{GamesSidebar}}

## Advantages

1. Games built with HTML work on smartphones, tablets, PCs and Smart TVs.
2. Advertise and promote your game all over the Web as well as other media.
3. Payments. Charge what you want and use whatever payment processing service you like.
4. Update your game whenever you want.
5. Collect your own analytics!
6. Connect with your customers more closely,
7. Players can play the game anywhere, anytime.

## Web Technologies

<table class="no-markdown standard-table">
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
        <a href="/en-US/docs/Web/SVG">SVG</a>,
        <a href="/en-US/docs/Social_API">Social API</a> (and much more!)
      </td>
    </tr>
  </tbody>
</table>

- [Full Screen API](/en-US/docs/Web/API/Fullscreen_API)
  - : Full screen gameplay.
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : Use gamepads or other game controllers.
- [HTML](/en-US/docs/Web/HTML) and [CSS](/en-US/docs/Web/CSS)
  - : Build, style, and lay out your game's user interface.
- [HTML audio](/en-US/docs/Web/HTML/Element/audio)
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
- [Typed Arrays](/en-US/docs/Web/JavaScript/Typed_arrays)
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
  - : Spawn background threads running their own JavaScript code for multi-core processors.
- [XMLHttpRequest](/en-US/docs/Web/API/XMLHttpRequest) and [File API](/en-US/docs/DOM/File_API)
  - : Send and receive any kind of data you want from a Web server like downloading new game levels and artwork to transmitting non-real-time game status information back and forth.
