---
title: Introduction to game development for the Web
slug: Games/Introduction
page-type: guide
---

{{GamesSidebar}}

The modern web has quickly become a viable platform not only for creating stunning, high quality games, but also for distributing those games.

The range of games that can be created is on par with desktop and native OS counterparts. With modern Web technologies and a recent browser, it's entirely possible to make stunning, top-notch games for the Web. And we're not talking about simple card games or multiplayer social games that have in the olden days been done using Flash®. We're talking about 3D action shooters, RPGs, and more. Thanks to massive performance improvements in [JavaScript](/en-US/docs/Web/JavaScript) just-in-time compiler technology and new APIs, you can build games that run in the browser (or on [HTML5](/en-US/docs/Glossary/HTML5)-powered devices) without making compromises.

## The HTML game platform

You can truly think of the Web as a better target platform for your game. As we like to say, "the Web is the platform." Let's take a look at the core of the Web platform:

<table class="no-markdown standard-table">
  <thead>
    <tr>
      <th scope="col">Function</th>
      <th scope="col">Technology</th>
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

## The business case

As a game developer, whether you're an individual or a large game studio, you want to know why it makes sense to target the Web with your next game project. Let's look at how the Web can help you.

1. The reach of the Web is enormous; it's everywhere. Games built with HTML work on smartphones, tablets, PCs and Smart TVs.
2. Marketing and discoverability are improved. You're not limited to promoting your app on someone else's app store. Instead, you can advertise and promote your game all over the Web as well as other media, taking advantage of the Web's inherent linkability and shareability to reach new customers.
3. You have control where it matters: Payments. You don't have to hand over 30% of your revenues to someone else just because your game is in their ecosystem. Instead, charge what you want and use whatever payment processing service you like.
4. Again with more control, you can update your game whenever you want. No waiting breathlessly for approval while someone hidden within another company decides whether your critical bug fix will ship today or tomorrow.
5. Control your analytics! Instead of relying on someone else to make all the decisions about what analytics you need, you can collect your own — or choose the third party that you like the best — to gather information about your sales and your game's reach.
6. You get to manage your customer relationship more closely, in your own way. No more having customer feedback filtered through an app store's limited mechanisms. Engage with your customers the way you want to, without a middleman.
7. Your players can play your game anywhere, anytime. Because the Web is ubiquitous, your customers can check their game's status on their phones, tablets, their home laptops, their work desktops, or anything else.

## Web technologies for game developers

For the tech folks, let's dig into the APIs the Web brings to the table that cater to game developers. Here's a thorough list to give you a taste of what the Web can do for you:

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
  - : Send and receive any kind of data you want from a Web server like downloading new game levels and artwork to transmitting non-real-time game status information back and forth.
- [Full Screen API](/en-US/docs/Web/API/Fullscreen_API)
  - : This simple API lets your game take over the entire screen, thereby immersing the player in action.
- [Gamepad API](/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
  - : If you want your users to be able to use gamepads or other game controllers to work your game, you'll need this API.
- [HTML](/en-US/docs/Web/HTML) and [CSS](/en-US/docs/Web/CSS)
  - : Together, these two technologies let you build, style, and lay out your game's user interface. Part of HTML is the {{HTMLElement("canvas")}} element, which provides one way to do 2D graphics.
- [HTML audio](/en-US/docs/Web/HTML/Element/audio)
  - : The {{HTMLElement("audio")}} element lets you easily play simple sound effects and music. If your needs are more involved, check out the [Web Audio API](/en-US/docs/Web/API/Web_Audio_API) for real audio processing power!
- [IndexedDB](/en-US/docs/Web/API/IndexedDB_API)
  - : A powerful data storage API for maintaining user data on their own computer or device. A great way to save game state and other information locally so it doesn't have to be downloaded every time it's needed. Also useful to help make your game playable even when the user isn't connected to the Web (such as when they're stuck on an airplane for hours on end).
- [JavaScript](/en-US/docs/Web/JavaScript)
  - : JavaScript, the programming language used on the Web, is blazing fast in modern browsers and getting faster all the time. Use its power to write the code for your game, or look at using technologies like [Emscripten](https://github.com/emscripten-core/emscripten/wiki) or [Asm.js](http://asmjs.org/spec/latest/) to easily port your existing games.
- [Pointer Lock API](/en-US/docs/Web/API/Pointer_Lock_API)
  - : The Pointer Lock API lets you lock the mouse or other pointing device within your game's interface so that instead of absolute cursor positioning you receive coordinate deltas that give you more precise measurements of what the user is doing, and prevent the user from accidentally sending their input somewhere else, thereby missing important action.
- [SVG](/en-US/docs/Web/SVG) (Scalable Vector Graphics)
  - : Lets you build vector graphics that scale smoothly regardless of the size or resolution of the user's display.
- [Typed Arrays](/en-US/docs/Web/JavaScript/Guide/Typed_arrays)
  - : JavaScript typed arrays give you access to raw binary data from within JavaScript; this lets you manipulate GL textures, game data, or anything else, even if it's not in a native JavaScript format.
- [Web Audio API](/en-US/docs/Web/API/Web_Audio_API)
  - : This API for controlling the playback, synthesis, and manipulation of audio from JavaScript code lets you create awesome sound effects as well as play and manipulate music in real time.
- [WebGL](/en-US/docs/Web/API/WebGL_API)
  - : Lets you create high-performance, hardware-accelerated 3D (and 2D) graphics from Web content. This is a Web-supported implementation of [OpenGL ES](https://www.khronos.org/opengles/) 2.0.
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
  - : The WebRTC (Real-Time Communications) API gives you the power to control audio and video data, including teleconferencing and transmitting other application data back and forth between two users. Want your players to be able to talk to each other while blowing up monsters? This is the API for you.
- [WebSockets](/en-US/docs/Web/API/WebSockets_API)
  - : The WebSocket API lets you connect your app or site to a server to transmit data back and forth in real-time. Perfect for multiplayer gaming action, chat services, and so forth.
- [Web Workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
  - : Workers give you the ability to spawn background threads running their own JavaScript code, to take advantage of modern, multicore processors.
