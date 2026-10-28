---
title: "`drawable` HTML global attribute"
short-title: drawable
slug: Web/HTML/Reference/Global_attributes/drawable
page-type: html-attribute
browser-compat: html.global_attributes.drawable
sidebar: htmlsidebar
---

The **`drawable`** [global attribute](/en-US/docs/Web/HTML/Reference/Global_attributes) marks an element as a **paint root**, meaning that it can be rendered independently on a parent {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

## Value

The `drawable` attribute is a [boolean attribute](/en-US/docs/Web/HTML/Reference/Attributes#boolean_attributes); its presence marks a `<canvas>` descendant as a paint root.

## Description

The [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API) allows you to draw DOM subtrees directly into a 2D or 3D canvas context. This enables the creation of graphically rich canvas-based interfaces while keeping meaningful content accessible and interactive. To prepare DOM elements for rendering on a canvas, three steps are needed:

1. Nest the elements inside the `<canvas>` tags.
2. Set the `<canvas>` element's [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute to `drawable` to opt the `<canvas>` into rendering its descendants rather than treating them as fallback content.
3. Set the `drawable` attribute on each descendant element that you want to render independently (along with its descendents) on the canvas context. The rendering boundary for each one is the element's border-box.

```html
<canvas content="drawable">
  <div id="one" drawable>...</div>
  <div id="two" drawable>...</div>
</canvas>
```

Each context type comes with a feature to draw `drawable` DOM trees onto the context:

- The {{domxref("CanvasRenderingContext2D.drawElementImage()")}} method takes an element reference and various other arguments to declare where and how it should be drawn on a 2D context.
- The {{domxref("WebGLRenderingContext.texElementSubImage2D()")}} method uploads an element into a texture to be used inside a WebGL fragment shader.
- The {{domxref("GPUQueue.drawElementImageToTexture()")}} method draws an element into a texture to be used inside a WebGPU fragment shader.

### Nested `drawable` elements

In general, a `drawable` element is drawn onto a canvas context along with all its descendents. The exception is descendents that also have `drawable` set on them — these will be excluded when you render the ancestor level `drawable` element, and must be rendered separately. For example:

```html
<canvas content="drawable">
  <div id="parent" drawable>
    <h2>Heading</h2>
    <p>Parent content.</p>
    <button id="nestedChild" drawable>Click me</button>
  </div>
</canvas>
```

Say we render the `parent` element on a 2D canvas context using the `drawElementImage()` method. It will be rendered without the `nestedChild` element, which will need to be rendered using a separate `drawElementImage()` call. This is useful as it allows you to render a set of nested elements separately, layering them as required.

## Examples

### Basic usage

This example shows how to render DOM elements onto a 2D canvas.

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

- The `<canvas>` element [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
- [HTML-in-Canvas](https://developer.chrome.com/docs/web-platform/html-in-canvas) on developer.chrome.com (2026)
