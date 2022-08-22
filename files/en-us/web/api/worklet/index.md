---
title: Worklet
slug: Web/API/Worklet
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - Worklet
  - Worklets
browser-compat: api.Worklet
---
{{APIRef("Worklets")}}

The **`Worklet`** interface is a lightweight version of {{domxref("Worker", "Web Workers")}} and gives developers access to low-level parts of the rendering pipeline.

With Worklets, you can run JavaScript and [WebAssembly](/en-US/docs/WebAssembly) code to do graphics rendering or audio processing where high performance is required.

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
      <td>{{domxref("PaintWorklet")}}</td>
      <td>
        For programmatically generating an image where a CSS property expects a
        file. Access this interface through
        {{DOMxRef("CSS.paintWorklet")}}.
      </td>
      <td>
        <strong>Chrome:</strong> Main thread, <strong>Gecko:</strong> Paint
        thread
      </td>
      <td>
        <a href="https://drafts.css-houdini.org/css-paint-api-1/#paint-worklet"
          >CSS Painting API</a
        >
      </td>
    </tr>
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

For 3D rendering with [WebGL](/en-US/docs/Web/API/WebGL_API), you don't use Worklets. Instead, you write Vertex Shaders and Fragment Shaders using GLSL code, and those shaders will then run on the graphics card.

## Properties

_The Worklet interface does not define any properties._

## Methods

- {{domxref("Worklet.addModule()")}}
  - : Adds the script module at the given URL to the current worklet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Houdini: Demystifying CSS](https://developer.chrome.com/blog/houdini/) on Google Developers (May 2016)
- [AudioWorklet :: What, Why, and How](https://www.youtube.com/watch?v=g1L4O1smMC0&t=1m33s) on YouTube (November 2017)
- [Enter AudioWorklet](https://developer.chrome.com/blog/audio-worklet/) on Google Developers (December 2017)
- [Animation Worklet - HTTP203 Advent](https://www.youtube.com/watch?v=ZPkMMShYxKU&t=0m19s) on YouTube (December 2017)
