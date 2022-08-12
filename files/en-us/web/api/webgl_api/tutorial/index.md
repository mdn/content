---
title: WebGL tutorial
slug: Web/API/WebGL_API/Tutorial
page-type: guide
tags:
  - Overview
  - Tutorial
  - WebGL
  - WebGL API
---
{{WebGLSidebar}}

This tutorial describes how to use the {{HTMLElement("canvas")}} element to draw WebGL graphics, starting with the basics. The examples provided should give you some clear ideas of what you can do with WebGL and will provide code snippets that may get you started in building your own content.

[WebGL](https://www.khronos.org/webgl/) enables web content to use an API based on [OpenGL ES](https://www.khronos.org/opengles/) 2.0 to perform 3D rendering in an HTML `<canvas>` in browsers that support it without the use of plug-ins. WebGL programs consist of control code written in JavaScript and special effects code (shader code) that is executed on a computer's Graphics Processing Unit (GPU). WebGL elements can be mixed with other HTML elements and composited with other parts of the page or page background.

## Before you start

Using the `<canvas>` element is not very difficult, but you do need a basic understanding of [HTML](/en-US/docs/Web/HTML) and [JavaScript](/en-US/docs/Web/JavaScript). The `<canvas>` element and WebGL are not supported in some older browsers, but are supported in recent versions of all major browsers. In order to draw graphics on the canvas we use a JavaScript context object, which creates graphics on the fly.

## In this tutorial

- [Getting started with WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : How to set up a WebGL context.
- [Adding 2D content to a WebGL context](/en-US/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : How to render simple flat shapes using WebGL.
- [Using shaders to apply color in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : Demonstrates how to add color to shapes using shaders.
- [Animating objects with WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : Shows how to rotate and translate objects to create simple animations.
- [Creating 3D objects using WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : Shows how to create and animate a 3D object (in this case, a cube).
- [Using textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : Demonstrates how to map textures onto the faces of an object.
- [Lighting in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : How to simulate lighting effects in your WebGL context.
- [Animating textures in WebGL](/en-US/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : Shows how to animate textures; in this case, by mapping an Ogg video onto the faces of a rotating cube.
