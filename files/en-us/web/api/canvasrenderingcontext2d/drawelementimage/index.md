---
title: "CanvasRenderingContext2D: drawElementImage() method"
short-title: drawElementImage()
slug: Web/API/CanvasRenderingContext2D/drawElementImage
page-type: web-api-instance-method
browser-compat: api.CanvasRenderingContext2D.drawElementImage
---

{{APIRef("Canvas API")}}

The **`drawElementImage()`** method of the {{domxref("CanvasRenderingContext2D")}} draws a `drawable` element's state recorded during the current rendering update (or an {{domxref("ElementImage")}}) to a 2D canvas context.

## Syntax

```js-nolint
drawElementImage(element, dx, dy)
drawElementImage(element, dx, dy, options)
drawElementImage(element, dx, dy, dw, dh)
drawElementImage(element, dx, dy, dw, dh, options)
drawElementImage(element, sx, sy, sw, sh, dx, dy)
drawElementImage(element, sx, sy, sw, sh, dx, dy, options)
drawElementImage(element, sx, sy, sw, sh, dx, dy, dw, dh)
drawElementImage(element, sx, sy, sw, sh, dx, dy, dw, dh, options)
```

### Parameters

- `element`
  - : A `drawable` element reference or an {{domxref("ElementImage")}} object representing the DOM element to render on the canvas context.
- `dx`
  - : A number representing the horizontal canvas coordinate of the rendered `element`'s top-left corner.
- `dy`
  - : A number representing the vertical canvas coordinate of the rendered `element`'s top-left corner.
- `dw` {{optional_inline}}
  - : A number representing the width of the rendered `element`, in canvas units.
- `dh` {{optional_inline}}
  - : A number representing the height of the rendered `element`, in canvas units.
- `sx` {{optional_inline}}
  - : A number representing the horizontal coordinate of the top-left corner of the source `element` area to render.
- `sy` {{optional_inline}}
  - : A number representing the vertical coordinate of the top-left corner of the source `element` area to render.
- `sw` {{optional_inline}}
  - : A number representing the width of the `element` area to render, in canvas units.
- `sh` {{optional_inline}}
  - : A number representing the height of the `element` area to render, in canvas units.
- `options` {{optional_inline}}
  - : An object containing options. This can include:
    - `preserveElementGeometry` {{optional_inline}}
      - : A boolean value that controls whether the `drawElementImage()` call automatically updates the geometry of the rendered `element`'s underlying DOM representation. If set to `false` (the default value), the underlying DOM geometry is automatically updated so that its hit area is in sync with the rendered element. If set to `true`, the underlying DOM geometry is unchanged, and you must manually change it to match the rendered position using {{domxref("HTMLCanvasElement.updateElementGeometry()")}}.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no painted state to render on the canvas.

## Description

The `drawElementImage()` method of the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API) is used to draw an element reference (or an {{domxref("ElementImage")}}) onto a 2D canvas context.

To prepare DOM elements to be rendered on a canvas, you first need to place them between your `<canvas>` tags. You then opt your `<canvas>` into rendering its descendants rather than treating them as fallback content by setting its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute to `drawable`. Finally, each DOM subtree that you want to render on the canvas independently is given a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute.

```html
<canvas width="640" height="480" content="drawable">
  <p drawable>I can be drawn on the canvas!</p>
  <p>I am still just fallback content.</p>
</canvas>
```

You can then invoke `drawElementImage()`, passing it a reference to the element you want to render on the canvas. The call needs to be invoked inside a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler to guarantee that the element has been painted, and that the latest paint will be drawn.

```js
const canvas = document.querySelector("canvas");
const pElem = document.querySelector("p[drawable]");
const ctx = canvas.getContext("2d");
// ...
canvas.addEventListener("paint", () => {
  ctx.drawElementImage(pElem, 100, 100);
});
```

> [!NOTE]
> You can draw an element onto an offscreen 2D canvas context using the {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}} method, or include it in a WebGL or WebGPU texture using the {{domxref("WebGLRenderingContext.texElementSubImage2D()")}} and {{domxref("GPUQueue.drawElementImageToTexture()")}} methods respectively.

### Different method versions

The basic version of `drawElementImage()` takes three arguments: a reference to the element (or {{domxref("ElementImage")}}) to render, and `dx` and `dy` coordinates that define where the top-left corner of the rendered element should be placed on the canvas (the `d` stands for "destination"):

```js
drawElementImage(elem, dx, dy);
```

In this case, the whole element will be rendered, at its default painted size.

There are also 5, 7, and 9-argument versions:

- 5 arguments: Takes the `element`, `dx`, and `dy` arguments plus width and height values (`dw` and `dh`) specifying what size the element should be rendered at:

  ```js
  drawElementImage(elem, dx, dy, dw, dh);
  ```

- 7 arguments: Takes the `element`, `dx`, and `dy` arguments plus `sx` and `sy` coordinates that define the top-left corner of the area inside the element that should be rendered (the `s` stands for "source") and width and height values (`sw` and `sh`) specifying the size of the area inside the element that should be rendered:

  ```js
  drawElementImage(elem, sx, sy, sw, sh, dx, dy);
  ```

- 9 arguments: Takes the same arguments as the 7-argument version, plus width and height values (`dw` and `dh`) specifying what size the defined area inside the element should be rendered at:

  ```js
  drawElementImage(elem, sx, sy, sw, sh, dx, dy, dw, dh);
  ```

### Manual geometry updates

By default, whenever an element is rendered to a 2D canvas context, the geometry of the element's underlying DOM representation is automatically adjusted to exactly the same shape, size, and orientation as the rendered version. This ensures that the element remains interactive and accessible in the same way you'd expect from normal DOM elements in terms of mouse and pointer event hit testing, accurate sizing by screen magnifiers, accurate results from calls such as {{domxref("Element.getBoundingClientRect()")}}, etc.

You can turn off this automatic synchronization by passing an options object containing `preserveElementGeometry: true` as the last argument of a `drawElementImage()` call:

```js
ctx.drawElementImage(elem, 100, 100, {
  preserveElementGeometry: true,
});
```

In this case, the underlying geometry won't be updated, and you will have to manually change it using {{domxref("HTMLCanvasElement.updateElementGeometry()")}}. This method takes a {{domxref("DOMMatrix")}} object as its argument, specifying exactly how to transform the geometry. Note that generally you won't need to set `preserveElementGeometry: true`; the automatic geometry synchronization is fine for most use cases.

## Examples

### Basic `drawElementImage()` usage

This example shows how to render an element on a 2D `<canvas>` using `drawElementImage()`.

#### HTML

We include a `<canvas>` element with its `content` attribute set to `drawable`. We also include a {{htmlelement("div")}} element with the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute set, so it can be rendered onto the `<canvas>`.

```html live-sample___basic-drawelementimage
<canvas width="480" height="200" content="drawable">
  <div drawable>I can be drawn on the canvas!</div>
</canvas>
```

#### CSS

We include some rudimentary styles for the `<div>` element:

```css live-sample___basic-drawelementimage
div {
  font-size: 1.4rem;
  border: 4px solid #576490;
  background: #d1d2f9;
  padding: 10px;
  width: 200px;
  height: 100px;
}
```

```css hidden live-sample___basic-drawelementimage
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

.no-html-in-canvas::before {
  content: "CanvasRenderingContext2D.drawElementImage() is not available. HTML-in-Canvas is not supported.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;
  font-family: sans-serif;
  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

First, we grab references to the `<canvas>` and `<div>` elements.

```js live-sample___basic-drawelementimage
const canvas = document.querySelector("canvas");
const divElem = document.querySelector("canvas div");
```

We define a `main()` function to handle the main rendering for the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we define a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler. Inside the handler, we fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method, and use `drawElementImage()` to draw the `<div>` onto the canvas.

```js live-sample___basic-drawelementimage
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(divElem, 50, 50);
  });
}
```

Finally, we run the `main()` function to start eveything off.

```js live-sample___basic-drawelementimage
main();
```

#### Result

{{embedlivesample("basic-drawelementimage", "100%", "250")}}

### Demonstrating the effect of the different arguments

This example builds on the previous one, showing the effects of all the different `drawElementImage()` arguments on a canvas-rendered element.

#### HTML

The `<canvas>` element is nearly identical to the previous example, but with different dimensions. In addition, the `<div>` element has the [`contenteditable`](/en-US/docs/Web/HTML/Reference/Global_attributes/contenteditable) attribute set so that it is easily focusable and editable, which will help us to demonstrate the effect of setting the [`preserveElementGeometry`](#preserveelementgeometry) property later on. We also include a {{htmlelement("p")}} element after the `<canvas>` element, into which we will output the `drawElementImage()` method call being used to render the `<div>` to the canvas at each point.

```html
<canvas width="500" height="250" content="drawable">
  <div drawable contenteditable>I can be drawn on the canvas!</div>
</canvas>
<p></p>
```

```html hidden live-sample___different-arguments
<section class="controls">
  <div>
    <div>
      <label for="sx">Set source x (sx)</label>
      <input type="range" id="sx" min="0" max="200" value="0" />
      <output></output>
    </div>
    <div>
      <label for="sy">Set source y (sy)</label>
      <input type="range" id="sy" min="0" max="100" value="0" />
      <output></output>
    </div>
    <div>
      <label for="sw">Set source width (sw)</label>
      <input type="range" id="sw" min="25" max="200" value="200" />
      <output></output>
    </div>
    <div>
      <label for="sh">Set source height (sh)</label>
      <input type="range" id="sh" min="25" max="100" value="100" />
      <output></output>
    </div>
    <div>
      <label for="preserve-geometry">Preserve geometry</label>
      <input type="checkbox" id="preserve-geometry" />
    </div>
  </div>
  <div>
    <div>
      <label for="dx">Set destination x (dx)</label>
      <input type="range" id="dx" min="10" max="200" value="25" />
      <output></output>
    </div>
    <div>
      <label for="dy">Set destination y (dy)</label>
      <input type="range" id="dy" min="10" max="200" value="25" />
      <output></output>
    </div>
    <div>
      <label for="dw">Set destination width (dw)</label>
      <input type="range" id="dw" min="25" max="400" value="200" />
      <output></output>
    </div>
    <div>
      <label for="dh">Set destination height (dh)</label>
      <input type="range" id="dh" min="25" max="200" value="100" />
      <output></output>
    </div>
  </div>
</section>
<canvas width="500" height="250" content="drawable">
  <div drawable contenteditable>I can be drawn on the canvas!</div>
</canvas>
<p></p>
```

We've also included a {{htmlelement("section")}} element containing a series of form inputs that allow you to vary the value of each set `drawElementImage()` argument. These are all [`range`](/en-US/docs/Web/HTML/Reference/Elements/input/range) inputs, except for the input used to set `preserveElementGeometry: true`, which is a [`checkbox`](/en-US/docs/Web/HTML/Reference/Elements/input/checkbox). We've hidden the controls for brevity, but you can view the full source code using the "Play" button in the live example later on.

#### CSS

The `<div>` element is styled the same as in the previous example, except that this time we set its {{cssxref("background-color")}} to `hotpink` on {{cssxref(":hover")}} and {{cssxref(":focus")}}:

```css live-sample___different-arguments
canvas div {
  font-size: 1.4rem;
  border: 4px solid #576490;
  background: #d1d2f9;
  padding: 10px;
  width: 200px;
  height: 100px;
  outline: none;
}

canvas div:hover,
canvas div:focus {
  background-color: hotpink;
}
```

```css hidden live-sample___different-arguments
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

section {
  display: flex;
  align-items: flex-start;
  gap: 30px;
}

div div {
  margin-bottom: 10px;
}

p {
  font-family: monospace;
}

.no-html-in-canvas::before {
  content: "CanvasRenderingContext2D.drawElementImage() is not available. HTML-in-Canvas is not supported.";
  background-color: wheat;
  text-align: center;
  padding: 1rem 0;
  font-family: sans-serif;
  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

First, we grab references to the `<canvas>`, `<div>`, and `<p>` elements. We then grab references to the `<section>` element that contains all the form controls (`controls`), the range inputs (`ranges`), and the `checkbox`:

```js live-sample___different-arguments
const canvas = document.querySelector("canvas");
const divElem = document.querySelector("canvas div");
const pElem = document.querySelector("p");
const controls = document.querySelector(".controls");
const ranges = document.querySelectorAll("input[type='range']");
const checkbox = document.querySelector("input[type='checkbox']");
```

We define a `main()` function to handle the main rendering for the example. We start by getting a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner:

```js-nolint
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }
```

Next inside `main()`, we define an `args` variable that will contain an array of all the argument values we want to call `drawElementImage()` with on each rendering, taken from the form control values:

```js-nolint
  let args;
```

We next define a function called `updateOutputsAndArgs()`. This starts by:

- setting `args` to an empty array
- looping through all the range inputs and writing each one's value to both a corresponding {{htmlelement("output")}} element and a new array element at the end of `args`
- adding an additional array element, `{ preserveElementGeometry: "true" }`, at the end of `args`, only if the checkbox is checked.

```js-nolint
  function updateOutputsAndArgs() {
    args = [];
    for (const input of ranges) {
      const output = input.parentElement.querySelector("output");
      output.value = input.value;
      args.push(Number(input.value));
    }

    if (checkbox.checked) {
      args.push({ preserveElementGeometry: "true" });
    }
```

The other main job of `updateOutputsAndArgs()` is to build the text string that will be printed to the `<p>` element below the `<canvas>`. This will be the `drawElement()` call made on each rendering iteration of the `<div>` onto the `<canvas>`. We therefore begin the string with `drawElementImage(` and it with `);`. In between the two, we loop through the `args` array and append them all to the string. Most of them are basic numbers, but one is an object, which needs to be converted to a string using {{jsxref("JSON.stringify()")}} before appending. We also append the string `,` after every element except the last one. Last in this section, we set the paragraph's text content to `textOutput`.

```js-nolint
    let textOutput = "drawElementImage(";
    args.forEach((element, index, array) => {
      if (typeof element === "object") {
        let objString = JSON.stringify(element);
        textOutput += objString;
      } else {
        textOutput += element;
      }

      if (!(index === array.length - 1)) {
        textOutput += ", ";
      }
    });
    textOutput += ");";
    pElem.textContent = textOutput;
```

Finally inside `updateOutputsAndArgs()`, we run the {{domxref("HTMLCanvasElement.requestPaint()")}} method so that a `paint` event will be fired and the `<div>` will be re-rendered on the `<canvas>` each time `updateOutputsAndArgs()` is run:

```js-nolint
    canvas.requestPaint();
  }
```

Next inside `main()`, we set an `input` event listener on the `controls` container, so that each time one of the descendant `<input>` elements has its value changed, the event bubbles up to the container and `updateOutputsAndArgs()` is run, updating the args to pass to `drawElementImage()` and the values reported in the `<output>` elements and the `<p>`. We also run `updateOutputsAndArgs()` once to populate everything initially.

```js-nolint
  controls.addEventListener("input", updateOutputsAndArgs);
  updateOutputsAndArgs();
```

The final part of `main()` is a `paint` event handler. Inside it, we fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method, and use `drawElementImage()` to draw the `<div>` onto the canvas. If `args` has not been defined yet, which will be the case when the `<div>` is first painted, we invoke `drawElementImage()` with only basic positioning `dx` and `dy` arguments. Every subsequent time this handler runs, we invoke `drawElementImage()` with all the `args` elements included inside it as arguments via the [spread (`...`)](/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) syntax:

```js-nolint
  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (!args) {
      ctx.drawElementImage(divElem, 10, 10);
    } else {
      ctx.drawElementImage(divElem, ...args);
    }
  });
}
```

```js hidden live-sample___different-arguments
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  let args;

  function updateOutputsAndArgs() {
    args = [];
    for (const input of ranges) {
      const output = input.parentElement.querySelector("output");
      output.value = input.value;
      args.push(Number(input.value));
    }

    if (checkbox.checked) {
      args.push({ preserveElementGeometry: "true" });
    }

    let textOutput = "drawElementImage(";
    args.forEach((element, index, array) => {
      if (typeof element === "object") {
        let objString = JSON.stringify(element);
        textOutput += objString;
      } else {
        textOutput += element;
      }

      if (!(index === array.length - 1)) {
        textOutput += ", ";
      }
    });
    textOutput += ");";
    pElem.textContent = textOutput;

    canvas.requestPaint();
  }

  controls.addEventListener("input", updateOutputsAndArgs);
  updateOutputsAndArgs();

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (!args) {
      ctx.drawElementImage(divElem, 10, 10);
    } else {
      ctx.drawElementImage(divElem, ...args);
    }
  });
}
```

Finally, we run the `main()` function to start eveything off.

```js live-sample___different-arguments
main();
```

#### Result

{{embedlivesample("different-arguments", "100%", "500")}}

Adjust the destination sliders first to change the position and size of the rendered `<div>` element. By default, the entire `<div>` will be rendered, because the `sx` and `sy` values are set to `0` `0` (meaning that the area of the `<div>` to render starts at its top-left corner) and the `sw` and `sh` values are set to `200` `100` (which is the full width and height of the `<div>`).

Next, adjust the source sliders. As you adjust `sx` and `sy`, the top-left corner of the rendered `<div>` area will be moved down and to the right. As you adjust `sw` and `sh`, the size of the rendered `<div>` area will be changed. Whatever the size and shape of the source `<div>`, it will be transformed to fill the area defined by `dw` and `dh`.

At ths point, focus the `<div>` and note how you can to interact with it and edit its text as expected, regardless of how it is rendered on the `<canvas>`.

Finally, to demonstrate the effect of `preserveElementGeometry: "true"`, set the first eight arguments to something sensible like `0`, `0`, `200`, `100`, `25`, `25`, `200`, `100`. Now check the "Preserve geometry" checkbox to set `{"preserveElementGeometry":"true"}`. Next, move the rendered `<div>` away from where it was before "Preserve geometry" was checked by setting `dx` and `dy` to `200` and `100`. If you now try focusing the `<div>` using the keyboard, it will work as expected. However, if you try focusing it using mouse or touch, you'll note that the `<div>`'s hit area is still where it was before "Preserve geometry" was checked.

If you uncheck "Preserve geometry", the hit area will be automatically updated to where it should be.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("OffscreenCanvasRenderingContext2D.drawElementImage()")}}
- {{domxref("WebGLRenderingContext.texElementSubImage2D()")}}
- {{domxref("GPUQueue.drawElementImageToTexture()")}}
- {{domxref("HTMLCanvasElement.updateElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
