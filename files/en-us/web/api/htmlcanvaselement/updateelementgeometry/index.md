---
title: "HTMLCanvasElement: updateElementGeometry() method"
short-title: updateElementGeometry()
slug: Web/API/HTMLCanvasElement/updateElementGeometry
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.updateElementGeometry
---

{{APIRef("Canvas API")}}

The **`updateElementGeometry()`** method of the {{domxref("HTMLCanvasElement")}} interface updates the geometry information of a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element (or {{domxref("ElementImage")}})'s underlying DOM presence.

## Syntax

```js-nolint
updateElementGeometry(element)
updateElementGeometry(element, options)
```

### Parameters

- `element`
  - : A reference to the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element or {{domxref("ElementImage")}} whose geometry you wish to update.
- `options` {{optional_inline}}
  - : An options object, the properties of which can include:
    - `preserveHitTestOrder` {{optional_inline}}
      - : A boolean value that controls whether the `element`'s underlying DOM presence is brought to the top of the hit test stack (`false`), or whether it will remain in the same position in the hit test stack (`true`). Defaults to `false`.
    - `canvasClip` {{optional_inline}}
      - : A {{domxref("DOMRect")}} that sets the area of the `element` that can receive pointer events. This is useful when you only render a portion of an element on the canvas and want to limit hit testing to the rendered portion. Defaults to `undefined`. The rect is in the element's own coordinate space.
    - `canvasTransform` {{optional_inline}}
      - : A {{domxref("DOMMatrix")}} that updates the size, shape, and position of the `element`'s underlying DOM presence so that it can be kept in sync with its canvas rendering position so that its hit area stays in sync with its position on the canvas. Defaults to `undefined`. The matrix units are specified in CSS pixels.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no rendered state to update the geometry of.

## Description

When the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API) is used to render an element on a {{htmlelement("canvas")}}, the position and orientation of the element's underlying DOM state needs to be kept in sync with its visual rendering. If this doesn't happen, the element won't be interactive as expected. This is because its hit area won't be in the same place as its visual rendering, so you will need to move the pointer to a different part of the screen to click or hover it, if at all.

Maintaining this synchronization is the main purpose of the `updateElementGeometry()` method. You reference the element you want to update the geometry of in the first argument, and include a reference to a {{domxref("DOMMatrix")}} inside the `options` object second argument that will specify how to transform the DOM representation to put it in the right position and orientation.

For example:

```js
ctx.drawElementImage(element, x, y, {
  preserveElementGeometry: true,
});
const transform = new DOMMatrix();
transform.e = x;
transform.f = y;
canvas.updateElementGeometry(element, {
  canvasTransform: transform,
});
```

When rendering an element on a 2D canvas context using {{domxref("CanvasRenderingContext2D.drawElementImage","drawElementImage()")}}, you won't need to use `updateElementGeometry()` to update position (or [hit area](#specifying_the_hit_testing_area_of_an_element)) in most situations, because by default the element's position is updated automatically each time it is rendered to the `<canvas>`. The browser can work out the element's position and hit area from its current transform and computed styles.

You'll only need to use `updateElementGeometry()` to update position when the `drawElementImage()` method's [`preserveElementGeometry`](/en-US/docs/Web/API/CanvasRenderingContext2D/drawElementImage#preserveelementgeometry) option is set to `true`: This stops the automatic updates. You might for example want to draw an element multiple times, for a shadow, reflection, or trail effect, and only set the hit area on the "main" copy. Or you might want to use some of the other features of the method mentioned in the following sections.

When rendering an element onto a 3D context using {{domxref("WebGLRenderingContext.texElementSubImage2D", "texElementSubImage2D()")}} (WebGL) or {{domxref("GPUQueue.drawElementImageToTexture","drawElementImageToTexture()")}} (WebGPU), you will always need to call `updateElementGeometry()` to update the element's underlying position and orientation. The browser can't work out the element's position automatically in 3D cases, as it is copied into a texture and then mapped onto a scene in an arbitrary manner.

### Specifying the hit testing area of an element

By default, a rendered element's hit testing area spans the entire width and height of the rendered element, and this is what you'll want most of the time. However, when updating geometry manually, you will still want to limit hit testing to the visible portion of the element's area. This can be achieved by setting the `updateElementGeometry()` method's `canvasClip` option. The value it takes is a {{domxref("DOMRect")}} object that sets the area of the `element` that can receive pointer input, etc.:

```js
// Element source slice position and area
const sx = 0,
  sy = 50,
  sw = 230,
  sh = 150;
// Destination position on canvas
const dx = 100,
  dy = 100;

ctx.drawElementImage(form, sx, sy, sw, sh, dx, dy, {
  preserveElementGeometry: true,
});

// Map the element's origin so that its (sx, sy) point lands on (dx, dy)
const transform = new DOMMatrix().translate(dx - sx, dy - sy);

canvas.updateElementGeometry(form, {
  canvasTransform: transform,
  canvasClip: new DOMRect(sx, sy, sw, sh), // Same rect as the source slice
});
```

This is useful when you only render a portion of an element on the canvas (for example by specifying the source arguments when calling `drawElementImage()`) and want to manually limit hit testing to the rendered portion.

### Controlling position in the hit test stack

By default, when an element is rendered on the `<canvas>` and its geometry is updated, its DOM representation is brought to the top of the hit test stack, meaning that it will capture events such as `click` before other elements with an overlapping position. This is a useful default, as most of the time you will want to interact with the mostly recently drawn elements. If you want the element to remain in the same position in the hit test stack, you can call `updateElementGeometry()` with the `preserveHitTestOrder` option set to `true`:

```js
canvas.updateElementGeometry(element, {
  preserveHitTestOrder: true,
});
```

This is useful when you want to re-render a background element after a foreground element, but don't want the background element to start capturing mouse clicks, etc., intended for the foreground element.

## Examples

### Updating an element's DOM position

This example shows how to render an element on a 2D canvas and then manually update its position.

> [!NOTE]
> For examples of `updateElementGeometry()` being used to update the geometry of elements rendered on 3D canvases, see our [WebGL example](https://mdn.github.io/dom-examples/html-in-canvas/webgl-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/webgl-example)) and [WebGPU example](https://mdn.github.io/dom-examples/html-in-canvas/webgpu-example/) ([source code](https://github.com/mdn/dom-examples/tree/main/html-in-canvas/webgpu-example)).

#### HTML

We include a {{htmlelement("canvas")}} element with its `content` attribute set to `drawable`. We also include a {{htmlelement("form")}} with the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute set, so it can be rendered onto the `<canvas>`. The form contains two text inputs and a submit button.

```html live-sample___position-example live-sample___hit-area-update
<canvas width="480" height="320" content="drawable">
  <form drawable>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>
    <button>Submit</button>
  </form>
</canvas>
```

#### CSS

The CSS styles aren't important for understanding the example, so we've hidden them for brevity. You can see the full source code in the MDN playground by clicking the "Play" button in the live [result](#result).

```css hidden live-sample___position-example live-sample___hit-area-update
form div {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  border: 4px solid #576490;
  background: #d1d2f9;
  border-radius: 5px;
  margin-bottom: 10px;
}

form input {
  padding: 3px;
  border: 2px solid #576490;
  border-radius: 3px;
  flex: 1;
}

form button {
  background: #576490;
  border: 4px solid transparent;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  transition: 0.6s all;
  cursor: pointer;
}

form button:hover,
form button:focus {
  background: #d1d2f9;
  color: black;
  border: 4px solid #576490;
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

First, we grab references to the `<canvas>` and `<form>` elements, and set two constants, `x` and `y`, which hold numeric values. These will be used to position the element on the canvas.

```js live-sample___position-example
const canvas = document.querySelector("canvas");
const form = document.querySelector("canvas form");
const x = 100;
const y = 50;
```

We next define a `main()` function to handle the main rendering for the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we define a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler. Inside the handler, we fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method. We then use `drawElementImage()` to draw the `<form>` onto the canvas, positioning it using the `x` and `y` values, and setting `preserveElementGeometry: true` so that its geometry isn't automatically updated when it is re-rendered.

Finally, we handle manually updating the element's underlying DOM position. We create a new `DOMMatrix` object and set it to contain a 2D translation equal to the `x` and `y` values. We then call `updateElementGeometry()`, passing in the `DOMMatrix` as the value of its `canvasTransform` option.

```js live-sample___position-example
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(form, x, y, { preserveElementGeometry: true });
    const transform = new DOMMatrix();
    transform.e = x;
    transform.f = y;
    canvas.updateElementGeometry(form, { canvasTransform: transform });
  });
}
```

Finally, we run the `main()` function to start everything off.

```js live-sample___position-example
main();
```

#### Result

{{embedlivesample("position-example", "100%", "380")}}

Focus the form and try filling in some values. Thanks to the `updateElementGeometry()` call, the form's underlying DOM representation is moved to the same position as its canvas rendering so it is interactive as expected. If you open the example in the MDN Playground and remove the `updateElementGeometry()` line, the form won't be interactive.

### Updating the element hit area

This example builds on the last one, showing how to render part of the element and then update its hit area so that only the rendered part is interactive. The HTML and CSS are the same; we'll explain the JavaScript changes in the next section. Again, you can see the full source code by clicking the "Play" button in the live [result](#result_2).

#### JavaScript

Near the start of the script, we specify some constants to define the position and size of the portion of the source element we will render, and the position it will be rendered in.

```js
// Element source slice position and area
const sx = 0,
  sy = 50,
  sw = 230,
  sh = 150;
// Destination position on canvas
const dx = 100,
  dy = 100;
```

Inside the `paint` event handler, we call `drawElementImage()`, this time with the source position and area specified. The `sy` value of `50` means that we chop a 50-pixel strip off the top of the rendered form.

```js
ctx.drawElementImage(form, sx, sy, sw, sh, dx, dy, {
  preserveElementGeometry: true,
});
```

Next, we define a `DOMMatrix` containing a 2D translation that subtracts the source position from the destination position on each axis — this results in a translation from the source origin to the destination origin:

```js
// Map the element's origin so that its (sx, sy) point lands on (dx, dy)
const transform = new DOMMatrix().translate(dx - sx, dy - sy);
```

In our `updateElementGeometry()` call, we manually move the position of the element's underlying DOM representation by setting `canvasTransform` to our `transform`, and set `canvasClip` to a new `DOMRect` with the same position and dimensions as our rendered source portion to limit the hit area to the part of the form that is actually rendered:

```js
canvas.updateElementGeometry(form, {
  canvasTransform: transform,
  canvasClip: new DOMRect(sx, sy, sw, sh), // Same rect as the source slice
});
```

```js hidden live-sample___hit-area-update
const canvas = document.querySelector("canvas");
const form = document.querySelector("canvas form");

// Element source slice position and area
const sx = 0,
  sy = 50,
  sw = 230,
  sh = 150;
// Destination position on canvas
const dx = 100,
  dy = 100;

function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawElementImage(form, sx, sy, sw, sh, dx, dy, {
      preserveElementGeometry: true,
    });

    // Map the element's origin so that its (sx, sy) point lands on (dx, dy)
    const transform = new DOMMatrix().translate(dx - sx, dy - sy);

    canvas.updateElementGeometry(form, {
      canvasTransform: transform,
      canvasClip: new DOMRect(sx, sy, sw, sh), // Same rect as the source slice
    });
  });
}

main();
```

#### Result

{{embedlivesample("hit-area-update", "100%", "380")}}

Focus the form and try filling in some values. Now open the example in the MDN Playground and remove the `canvasClip` line inside the `updateElementGeometry()` call; you should now find that you can move the mouse above the rendered area and click the non-rendered "Name" form input, which doesn't make sense.

### Preserve hit test order to keep a background element in the background

This example shows how to render a foreground and background element on a canvas and keep the background element in the background for hit testing purposes even as it changes and is re-rendered.

#### HTML

This example features the same `<canvas>` and `<form>` as previous examples. The only difference is that we also include a `drawable` `<div>` inside the `<canvas>` that will be rendered behind the `<form>` as a background.

```html live-sample___hit-test-order
<canvas width="480" height="320" content="drawable">
  <form drawable>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" />
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" />
    </div>
    <button>Submit</button>
  </form>
  <div drawable></div>
</canvas>
```

#### CSS

Most of the CSS styles aren't important for understanding the example, so we've hidden them for brevity. It is worth mentioning that the `<div>`'s {{cssxref("background-color")}} is constantly animated to cause it to continuously fire `paint` events:

```css hidden live-sample___hit-test-order
form div {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px;
  border: 4px solid #576490;
  background: #d1d2f9;
  border-radius: 5px;
  margin-bottom: 10px;
}

form input {
  padding: 3px;
  border: 2px solid #576490;
  border-radius: 3px;
}

form button {
  background: #576490;
  border: 4px solid transparent;
  color: white;
  padding: 10px 10px;
  border-radius: 5px;
  transition: 0.6s all;
  cursor: pointer;
}

form button:hover,
form button:focus {
  background: #d1d2f9;
  color: black;
  border: 4px solid #576490;
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

```css live-sample___hit-test-order
canvas > div {
  background-color: orange;
  width: 250px;
  height: 170px;
  border: 5px solid black;
  animation: colorAnim 1s infinite alternate linear;
}

@keyframes colorAnim {
  from {
    background-color: orange;
  }

  to {
    background-color: red;
  }
}
```

You can see the full source code in the MDN playground by clicking the "Play" button in the live [result](#result_3).

#### JavaScript

Most of the JavaScript is quite similar to previous examples. Let's explain the sections that differ.

We start by declaring some constants that we'll use later in our calculations. These include `x`/`y` coordinates for positioning elements on the canvas, a `MARGIN` for positioning the background relative to the foreground, and three values that we'll use to implement a regular looping movement of the background:

```js
const x = 100;
const y = 100;

const MARGIN = 15;
const AMPLITUDE = 6;
const PERIOD_X = 4000;
const PERIOD_Y = 5500;
```

Inside the `main()` function, we initialize a `geometryInitialized` variable to `false`. Later on, once we've initially set the geometry of the `<form>` and background `<div>` after they are first rendered to the `<canvas>`, we'll set this flag to `true`.

```js
let geometryInitialized = false;
```

Inside the `paint` handler, we set an `offsetX` and `offsetY` value to vary the background `<div>` position by on each render, based on the time since the page loaded and using the `Math.sin()` method to produce a loose drifting circular motion. The final background position, `bgX` and `bgY`, is then calculated based on the `x` and `y` coordinates, the `MARGIN` value, and the offsets:

```js
const t = performance.now();
const offsetX = Math.sin((t / PERIOD_X) * 2 * Math.PI) * AMPLITUDE;
const offsetY = Math.sin((t / PERIOD_Y) * 2 * Math.PI) * AMPLITUDE;

const bgX = x - MARGIN + offsetX;
const bgY = y - MARGIN + offsetY;
```

Next we call `drawElementImage()` twice, once to render the background `<div>`, and once to render the `<form>`. We render the `<form>` second so it is rendered on top. We include `preserveElementGeometry: true` so that we can manually set the geometry later on.

```js
ctx.drawElementImage(bgDiv, bgX, bgY, {
  preserveElementGeometry: true,
});
ctx.drawElementImage(form, x, y, {
  preserveElementGeometry: true,
});
```

Next, we define two `DOMMatrix()` values that we will use to transform the rendered element's underlying DOM representations when we update their geometry:

```js
const bgTransform = new DOMMatrix().translate(bgX, bgY);
const formTransform = new DOMMatrix().translate(x, y);
```

Finally for the `paint` handler, we check whether `geometryInitialized` is `false`. If so, we update the geometry of both the rendered elements to put their hit areas in the right place. We then set the `geometryInitialized` variable to `true`. The `if` code is therefore run only on the first paint. On subsequent paints (the `else` code), we only update the geometry of the background `<div>`, but we additionally set `preserveHitTestOrder: true` on the call. This ensures that, when the `<div>` is repainted, it stays behind the `<form>` in the hit testing stack.

If we didn't do this, the `<div>` would appear at the top of the stack, and the form would be covered over and therefore no longer be interactive.

> [!NOTE]
> The `<form>` doesn't move so doesn't need its position updated again.

```js
if (!geometryInitialized) {
  canvas.updateElementGeometry(bgDiv, {
    canvasTransform: bgTransform,
  });
  canvas.updateElementGeometry(form, {
    canvasTransform: formTransform,
  });
  geometryInitialized = true;
} else {
  canvas.updateElementGeometry(bgDiv, {
    canvasTransform: bgTransform,
    preserveHitTestOrder: true,
  });
}
```

```js hidden live-sample___hit-test-order
const canvas = document.querySelector("canvas");
const form = document.querySelector("canvas form");
const bgDiv = document.querySelector("canvas > div");
const x = 100;
const y = 100;

const MARGIN = 15;
const AMPLITUDE = 6;
const PERIOD_X = 4000;
const PERIOD_Y = 5500;

function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  let geometryInitialized = false;

  canvas.addEventListener("paint", () => {
    const t = performance.now();
    const offsetX = Math.sin((t / PERIOD_X) * 2 * Math.PI) * AMPLITUDE;
    const offsetY = Math.sin((t / PERIOD_Y) * 2 * Math.PI) * AMPLITUDE;

    const bgX = x - MARGIN + offsetX;
    const bgY = y - MARGIN + offsetY;

    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(bgDiv, bgX, bgY, {
      preserveElementGeometry: true,
    });
    ctx.drawElementImage(form, x, y, { preserveElementGeometry: true });

    const bgTransform = new DOMMatrix().translate(bgX, bgY);
    const formTransform = new DOMMatrix().translate(x, y);

    if (!geometryInitialized) {
      canvas.updateElementGeometry(bgDiv, { canvasTransform: bgTransform });
      canvas.updateElementGeometry(form, {
        canvasTransform: formTransform,
      });
      geometryInitialized = true;
    } else {
      canvas.updateElementGeometry(bgDiv, {
        canvasTransform: bgTransform,
        preserveHitTestOrder: true,
      });
    }
  });
}

main();
```

#### Result

{{embedlivesample("hit-test-order", "100%", "380")}}

Focus the form and try filling in some values. If you open the example in the MDN Playground and remove the `preserveHitTestOrder` line from the `else` block, the background will rise to the top of the hit testing stack when it is re-painted so the form will no longer be interactive.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("HTMLCanvasElement.clearElementGeometry()")}}
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
