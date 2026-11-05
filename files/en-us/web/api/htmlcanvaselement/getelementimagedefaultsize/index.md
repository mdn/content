---
title: "HTMLCanvasElement: getElementImageDefaultSize() method"
short-title: getElementImageDefaultSize()
slug: Web/API/HTMLCanvasElement/getElementImageDefaultSize
page-type: web-api-instance-method
browser-compat: api.HTMLCanvasElement.getElementImageDefaultSize
---

{{APIRef("Canvas API")}}

The **`getElementImageDefaultSize()`** method of the {{domxref("HTMLCanvasElement")}} interface returns an object containing an element's original size as it would be rendered in the DOM, once rendered using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API). The returned size is in canvas grid coordinates.

## Syntax

```js-nolint
getElementImageDefaultSize(element)
```

### Parameters

- `element`
  - : A reference to a [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) element or an {{domxref("ElementImage")}}.

### Return value

An object containing the following properties:

- `height`
  - : The initial rendered height of the element, in canvas grid coordinates.
- `width`
  - : The initial rendered width of the element, in canvas grid coordinates.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `element` has not yet been painted, meaning there is currently no rendered state to capture the size of.

## Examples

### Recording the default size and using it to render an element

This example shows how to extract the default size of an element and then render it on a canvas at various different sizes relative to that default size.

#### HTML

We include a {{htmlelement("canvas")}} element with its `content` attribute set to `drawable`. We also include a {{htmlelement("div")}} element with the [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) attribute set, so it can be rendered onto the `<canvas>`. We also include a range {{htmlelement("input")}} with a {{htmlelement("label")}} and an {{htmlelement("output")}}, which we will use to control the rendered size of the `<div>`. Finally, we include a {{htmlelement("p")}} to output the rendered element size into.

```html live-sample___default-size
<div>
  <label for="range">Adjust element size:</label>
  <input type="range" id="range" step="0.1" min="0.5" value="1" max="1.5" />
  <output>100%</output>
</div>
<canvas width="640" height="200" content="drawable">
  <div drawable>Initial render status</div>
</canvas>
<p></p>
```

#### CSS

We include some rudimentary styles for the `<div>` element:

```css live-sample___default-size
div {
  font-size: 1.4rem;
  border: 4px solid #576490;
  background: #d1d2f9;
  border-radius: 5px;
  padding: 10px;
}
```

```css hidden live-sample___default-size
* {
  box-sizing: border-box;
}

html {
  font-family: Arial, Helvetica, sans-serif;
}

body > div {
  width: 640px;
  margin-bottom: 10px;
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

First, we grab references to the `<canvas>`, `<div>`, `<p>`, `<input>`, and `<output>` elements.

```js live-sample___default-size
const canvas = document.querySelector("canvas");
const divElem = document.querySelector("canvas div");
const sizeOutput = document.querySelector("p");

const rangeInput = document.querySelector("input");
const rangeOutput = document.querySelector("output");
```

Next, we set an `input` event handler on the update `<input>` so that when its value is changed, we print the new value to the `<output>` element and invoke {{domxref("HTMLCanvasElement.requestPaint()")}} to fire a `paint` event (which causes the `<div>` element to re-render).

```js live-sample___default-size
rangeInput.addEventListener("input", () => {
  rangeOutput.textContent = `${Math.floor(rangeInput.value * 100)}%`;
  canvas.requestPaint();
});
```

We define a `main()` function to handle the main rendering for the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we declare an `initialSize` variable and define a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event handler. Inside the handler, we fill the entire canvas with a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} property and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} method. We then:

- Set `initialSize` to the intial rendered size of the `<div>` element using `getElementImageDefaultSize(divElem)`.
- Use `drawElementImage()` to draw the `<div>` onto the canvas, setting its width and height to the initial rendered size multiplied by the `<input>` value.
- Set the `<p>` element's `textContent` to report the rendered size.

```js live-sample___default-size
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  let initialSize;

  canvas.addEventListener("paint", () => {
    ctx.fillStyle = "goldenrod";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!initialSize) {
      initialSize = canvas.getElementImageDefaultSize(divElem);
    }

    ctx.drawElementImage(
      divElem,
      100,
      50,
      initialSize.width * Number(rangeInput.value),
      initialSize.height * Number(rangeInput.value),
    );

    sizeOutput.textContent = `Element rendered size (canvas grid units): ${Math.ceil(initialSize.width * Number(rangeInput.value))}, ${Math.ceil(initialSize.height * Number(rangeInput.value))}`;
  });
}
```

Finally, we run the `main()` function to start eveything off.

```js live-sample___default-size
main();
```

#### Result

{{embedlivesample("default-size", "100%", "380")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
