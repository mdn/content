---
title: Worklet
slug: Web/API/Worklet
page-type: web-api-interface
browser-compat: api.Worklet
---

{{APIRef("Worklets")}}

The **`Worklet`** interface is a lightweight version of {{domxref("Worker", "Web Workers")}} and gives developers access to low-level parts of the rendering pipeline.

With Worklets, you can run JavaScript and [WebAssembly](/en-US/docs/WebAssembly) code to do graphics rendering or audio processing where high performance is required.

Worklets allow static import of [ECMAScript modules](/en-US/docs/Web/JavaScript/Guide/Modules), if supported, using [`import`](/en-US/docs/Web/JavaScript/Reference/Statements/import).
Dynamic import is disallowed by the specification — calling [`import()`](/en-US/docs/Web/JavaScript/Reference/Operators/import) will throw.

## Worklet types

Worklets are restricted to specific use cases; they cannot be used for arbitrary computations like Web Workers. The `Worklet` interface abstracts properties and methods common to all kind of worklets, and cannot be created directly. Instead, you can use one of the following classes:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Location</th>
      <th>Specification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("AudioWorklet")}}</td>
      <td>For audio processing with custom AudioNodes.</td>
      <td>Web Audio render thread</td>
      <td>
        <a href="https://webaudio.github.io/web-audio-api/#AudioWorklet"
          >Web Audio API</a
        >
      </td>
    </tr>
    <tr>
      <td>{{domxref("AnimationWorklet")}}</td>
      <td>
        For creating scroll-linked and other high performance procedural
        animations.
      </td>
      <td>Compositor thread</td>
      <td>
        <a href="https://wicg.github.io/animation-worklet/"
          >CSS Animation Worklet API</a
        >
      </td>
    </tr>
    <tr>
      <td>{{domxref("LayoutWorklet")}}</td>
      <td>For defining the positioning and dimensions of custom elements.</td>
      <td></td>
      <td>
        <a
          href="https://drafts.css-houdini.org/css-layout-api-1/#layout-worklet"
          >CSS Layout API</a
        >
      </td>
    </tr>
  </tbody>
</table>

> **Note:** Paint worklets, defined by the [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API), don't subclass {{domxref("Worklet")}}. They are accessed through a regular `Worklet` object obtained using {{DOMxref("CSS.paintWorklet_static", "CSS.paintWorklet")}}.

For 3D rendering with [WebGL](/en-US/docs/Web/API/WebGL_API), you don't use worklets. Instead, you write vertex shaders and fragment shaders using GLSL code, and those shaders will then run on the graphics card.

## Instance properties

_The Worklet interface does not define any properties._

## Instance methods

- {{domxref("Worklet.addModule()")}}
  - : Adds the script module at the given URL to the current worklet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Houdini: Demystifying CSS](https://developer.chrome.com/blog/houdini/) on Google Developers (2016)
- [AudioWorklet :: What, Why, and How](https://www.youtube.com/watch?v=g1L4O1smMC0&t=1m33s) on YouTube (2017)
- [Enter AudioWorklet](https://developer.chrome.com/blog/audio-worklet/) on Google Developers (2017)
- [Animation Worklet - HTTP203 Advent](https://www.youtube.com/watch?v=ZPkMMShYxKU&t=0m19s) on YouTube (2017)
