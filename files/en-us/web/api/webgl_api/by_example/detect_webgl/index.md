---
title: Detect WebGL
slug: Web/API/WebGL_API/By_example/Detect_WebGL
page-type: guide
---

{{DefaultAPISidebar("WebGL")}}{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}

This example demonstrates how to detect a {{Glossary("WebGL")}} rendering context and reports the result to the user.

## Feature-detecting WebGL

{{EmbedLiveSample("Feature-detecting_WebGL",660,150)}}

In this first example we are going to check whether the browser supports {{Glossary("WebGL")}}. To that end we will try to obtain the {{domxref("WebGLRenderingContext","WebGL rendering context","",1)}} from a {{domxref("HTMLCanvasElement","canvas")}} element. The {{domxref("WebGLRenderingContext","WebGL rendering context", "", 1)}} is an interface, through which you can set and query the state of the graphics machine, send data to the WebGL, and execute draw commands.

Saving the state of the graphics machine within a single context interface is not unique to {{Glossary("WebGL")}}. This is also done in other graphics {{Glossary("API")}}, such as the {{domxref("CanvasRenderingContext2D","canvas 2D rendering context", "", 1)}}. However, the properties and variables you can tweak are different for each {{Glossary("API")}}.

```html
<p>[ Here would go the result of WebGL feature detection ]</p>
<button>Press here to detect WebGLRenderingContext</button>
```

```css
body {
  text-align: center;
}
button {
  display: block;
  font-size: inherit;
  margin: auto;
  padding: 0.6em;
}
```

```js
// Run everything inside window load event handler, to make sure
// DOM is fully loaded and styled before trying to manipulate it.
window.addEventListener(
  "load",
  () => {
    const paragraph = document.querySelector("p");
    const button = document.querySelector("button");

    // Adding click event handler to button.
    button.addEventListener("click", detectWebGLContext, false);
    function detectWebGLContext() {
      // Create canvas element. The canvas is not added to the
      // document itself, so it is never displayed in the
      // browser window.
      const canvas = document.createElement("canvas");

      // Get WebGLRenderingContext from canvas element.
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

      // Report the result.
      paragraph.textContent =
        gl instanceof WebGLRenderingContext
          ? "Congratulations! Your browser supports WebGL."
          : "Failed. Your browser or device may not support WebGL.";
    }
  },
  false,
);
```

The source code of this example is also available on [GitHub](https://github.com/idofilin/webgl-by-example/tree/master/detect-webgl).

{{PreviousNext("Web/API/WebGL_API/By_example","Web/API/WebGL_API/By_example/Clearing_with_colors")}}
