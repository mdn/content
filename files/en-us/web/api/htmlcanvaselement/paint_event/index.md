---
title: "HTMLCanvasElement: paint event"
short-title: paint
slug: Web/API/HTMLCanvasElement/paint_event
page-type: web-api-event
browser-compat: api.HTMLCanvasElement.paint_event
---

{{APIRef("Canvas API")}}

The **`paint`** event of the [Canvas API](/en-US/docs/Web/API/Canvas_API) is fired when [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) elements have been repainted.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("paint", (event) => { })

onpaint = (event) => { }
```

## Event type

A {{domxref("CanvasPaintEvent")}}.

## Description

When using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API) to render a DOM element on a {{htmlelement("canvas")}} element, the latest visual state of the element needs rendering to the canvas every time it is repainted, otherwise the user won't see any change. This includes the initial paint, and the repaint each time a text selection is made or an interactive descendent element is focused or hovered, for example.

To re-render the element on each repaint, you can put your rendering code inside a `paint` event handler.

If you want to re-render the element continuously even if it isn't repainted, for example if it is being moved around the `<canvas>`, you can request a `paint` event to be fired using the {{domxref("HTMLCanvasElement.requestPaint", "requestPaint()")}} method, or you could use {{domxref("Window.requestAnimationFrame", "requestAnimationFrame()")}}

The `paint` event object includes a {{domxref("CanvasPaintEvent.changedElements", "changedElements")}} property containing an array of references to `drawable` elements that were repainted. This can be used to detect which elements changed, when multiple `drawable` elements are rendered.

### The rendering lifecycle

Canvas drawing commands executed inside a `paint` event handler appear in the current rendering update, but any DOM modifications made inside the same handler won't render until the next update:

```js
canvas.addEventListener("paint", () => {
  // Appears in the current rendering update
  ctx.drawElementImage(element, 20, 20);

  // Triggers a new paint event; change renders in the next update:
  element.style.backgroundColor = "green";
});
```

Depending on what visual updates you are making and when, this may result in out of sync rendering updates. To avoid this, make such updates inside a `requestAnimationFrame()` callback instead, which will run before the `paint` event handler for each rendering update.

### Nested canvas paint event order

With HTML-in-Canvas, it is possible to nest one `<canvas>` element inside another, set `content="drawable"` on both of them, and render `drawable` elements inside either or both of them. When a `drawable` element inside the child `<canvas>` is repainted, a `paint` event is fired on on both the parent and child canvases. It is fired on the child canvas first, so its `drawable` element's visual representation is updated. It is fired on the parent canvas second, so its `drawable` element's visual representation can include the latest visual state of the nested `<canvas>`'s `drawable` element.

For example:

```html
<canvas id="parent-canvas" width="640" height="480" content="drawable">
  <div id="parent-element" drawable>
    Parent element content
    <canvas id="child-canvas" width="300" height="200" content="drawable">
      <div id="child-element" drawable>Child element content</div>
    </canvas>
  </div>
</canvas>
```

When the `drawable` element on the child `<canvas>` is repainted (for example, by updating its {{cssxref("background-color")}}), the `paint` event is fired on the child canvas first and the parent canvas second. You can see this in action in [our nested canvas demo](https://mdn.github.io/dom-examples/html-in-canvas/2d-context-nested-canvases/).

## Examples

### Basic usage

This example shows how to render DOM elements onto a 2D canvas, and how the `paint` event is used to keep their rendered visual state updated.

#### HTML

We include a {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, and two {{htmlelement("div")}} elements, each containing a heading and a button. Each `<div>` has the `drawable` attribute set.

```html live-sample___basic-usage
<canvas content="drawable" width="480" height="320">
  <div id="one" drawable>
    <h2>Heading</h2>
    <p>Content.</p>
    <button>Click me</button>
  </div>

  <div id="two" drawable>
    <h2>Heading</h2>
    <p>Content.</p>
    <button>Click me</button>
  </div>
</canvas>
```

#### CSS

We set some rudimentary styles on the `drawable` elements. As you'll see in the [result](#result), the HTML is rendered on the canvas exactly as styled by the CSS.

```css live-sample___basic-usage
div {
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px 20px;
}

h2 {
  margin: 0 0 10px;
}

p {
  margin: 10px 0;
}

#one {
  background-color: #b2b5e0;
}

#two {
  background-color: orange;
}
```

```css hidden live-sample___basic-usage
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

In our script, we define a `main()` function before running it to start the example. Inside, we first grab references to the `<canvas>` and both `<div>` elements, then we get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we color the entire canvas using a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle()")}} and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} methods. We then use `drawElementImage()` to draw both of the `drawable` elements onto the canvas, placing each one at different coordinates. We do this inside a {{domxref("GlobalEventHandlers.paint_event", "paint")}} event so that the `drawable` elements are redrawn on the canvas each time they are repainted. This includes the initial paint, and the repaint each time a text selection is made or a button is focused or hovered, for example.

```js live-sample___basic-usage
function main() {
  const canvas = document.querySelector("canvas");
  const one = document.querySelector("#one");
  const two = document.querySelector("#two");
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(one, 20, 20);
    ctx.drawElementImage(two, 100, 140);
  });
}

main();
```

#### Result

{{EmbedLiveSample("basic-usage", "100%", 360)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
