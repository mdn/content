---
title: ElementImage
slug: Web/API/ElementImage
page-type: web-api-interface
browser-compat: api.ElementImage
---

{{APIRef("HTML-in-Canvas API")}}

The **`ElementImage`** interface represents a snapshot of a `drawable` element's rendered state, captured using {{domxref("HTMLCanvasElement.captureElementImage()")}}, which can be rerendered later on.

An `ElementImage` can be rendered:

- On a 2D canvas context using {{domxref("CanvasRenderingContext2D.drawElementImage()")}}.
- In a WebGL texture using {{domxref("WebGLRenderingContext.texElementSubImage2D()")}}.
- In a WebGPU texture using {{domxref("GPUQueue.drawElementImageToTexture()")}}.

An `ElementImage` can also be transferred to a [web worker](/en-US/docs/Web/API/Web_Workers_API) and drawn to an {{domxref("OffscreenCanvas")}}.

{{InheritanceDiagram}}

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}_.

- {{domxref("ElementImage.close", "close()")}}
  - : Removes an `ElementImage`, freeing up the memory used to store it.

## Examples

### Reporting the element initial size using an `ElementImage`

This example shows how to record the initial size of an canvas-rendered element from an `ElementImage`.

#### HTML

We include a {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, containing a {{htmlelement("div")}} element with the `drawable` attribute set. We also include a {{htmlelement("p")}} element to output the initial size into.

```html live-sample___report-size
<canvas width="640" height="200" content="drawable">
  <div drawable>Happy happy, joy joy</div>
</canvas>
<p></p>
```

#### CSS

We set some rudimentary styles on the `drawable` `<div>` element.

```css live-sample___report-size
div {
  font-size: 1.4rem;
  border: 4px solid #576490;
  background: #d1d2f9;
  border-radius: 5px;
  padding: 10px;
}
```

```css hidden live-sample___report-size
html {
  font-family: sans-serif;
}

.no-html-in-canvas::before {
  content: "CanvasRenderingContext2D.drawElementImage() is not available. HTML-in-Canvas is not supported.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;

  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

In our script, we first grab references to the `<canvas>`, `<div>`, and `<p>` elements.

```js live-sample___report-size
const canvas = document.querySelector("canvas");
const divElem = document.querySelector("div");
const output = document.querySelector("p");
```

Next, we define a `main()` function before running it to start the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, inside a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler, we fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method. We then use `drawElementImage()` to draw the `<div>` element onto the canvas. Finally, we capture the initial rendered view of the `<div>` as an `ElementImage` using {{domxref("HTMLCanvasElement.captureElementImage()")}}, return an object containing its size using {{domxref("HTMLCanvasElement.getElementImageDefaultSize()")}}, write the size to the `<p>` element, then `close()` the `ElementImage` after we have finished with it.

```js live-sample___report-size
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(divElem, 100, 50);

    const initialView = canvas.captureElementImage(divElem);
    const initialViewSize = canvas.getElementImageDefaultSize(initialView);
    output.textContent = `Elment initial size (canvas grid units): ${Math.ceil(initialViewSize.width)}, ${Math.ceil(initialViewSize.height)}`;
    initialView.close();
  });
}

main();
```

#### Result

{{EmbedLiveSample("report-size", "100%", 360)}}

The element's returned size is given in canvas grid coordinates. It can be useful to query the element's initial size so that you can get the element's size in canvas dimensions rather than CSS pixels, and use it to size texture storage up front, and check whether an element's rendered size has changed.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.captureElementImage()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
