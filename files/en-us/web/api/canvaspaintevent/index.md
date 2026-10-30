---
title: CanvasPaintEvent
slug: Web/API/CanvasPaintEvent
page-type: web-api-interface
browser-compat: api.CanvasPaintEvent
---

{{APIRef("HTML-in-Canvas API")}}

The **`CanvasPaintEvent`** interface is the event object for the {{domxref("HTMLCanvasElement.paint_event", "paint")}} event, which fires when [`drawable`](/en-US/docs/Web/HTML/Reference/Global_attributes/drawable) elements have been repainted.

{{InheritanceDiagram}}

## Constructor

- {{domxref("CanvasPaintEvent.CanvasPaintEvent", "CanvasPaintEvent()")}}
  - : Returns a new `CanvasPaintEvent` event object instance.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("CanvasPaintEvent.changedElements")}} {{ReadOnlyInline}}
  - : An array of references to the `drawable` elements that were repainted when the `paint` event fired.

## Instance methods

_Inherits methods from its parent, {{domxref("Event")}}_.

## Examples

### Reporting on which elements were painted

This example shows how to render DOM elements onto a 2D canvas, and how the `paint` event can be used to expose data on what elements were repainted each time the event fires.

#### HTML

We include a {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, and two {{htmlelement("div")}} elements, each containing a heading and a button. Each `<div>` has the `drawable` attribute set.

```html live-sample___paint-reporting
<canvas content="drawable" width="480" height="320">
  <div id="one" drawable>
    <h2>Element 1</h2>
    <p>Content.</p>
    <button>Update background</button>
  </div>

  <div id="two" drawable>
    <h2>Element 2</h2>
    <p>Content.</p>
    <button>Update background</button>
  </div>
</canvas>
```

We also include a {{htmlelement("ul")}} element into which we will write reporting information when the `paint` event fires.

```html live-sample___paint-reporting
<ul id="report"></ul>
```

#### CSS

We set some rudimentary styles on the `drawable` elements. Most notably, we set two [CSS custom properties](/en-US/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) on the {{cssxref(":root")}} element, which we then use to set the {{cssxref("background-color")}} of the two `<div>` elements. We set their foreground {{cssxref("color")}} to the {{cssxref("contrast-color()")}} function, which ensures that the text color always contrasts with the background color.

```css live-sample___paint-reporting
:root {
  --bgcolor-one: #b2b5e0;
  --bgcolor-two: orange;
}

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
  background-color: var(--bgcolor-one);
  color: contrast-color(var(--bgcolor-one));
}

#two {
  background-color: var(--bgcolor-two);
  color: contrast-color(var(--bgcolor-two));
}
```

```css hidden live-sample___paint-reporting
html {
  font-family: sans-serif;
}

body {
  display: flex;
  gap: 10px;
}

ul {
  height: 320px;
  overflow: auto;
}

li {
  margin-bottom: 10px;
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

In our script, we first grab references to the two `<div>` elements, the `<ul>`, the `<canvas>`, the `:root` element, and the {{htmlelement("button")}} inside each `<div>`.

```js hidden live-sample___paint-reporting
function randomColor() {
  const rnd1 = Math.floor(Math.random() * 256);
  const rnd2 = Math.floor(Math.random() * 256);
  const rnd3 = Math.floor(Math.random() * 256);
  return `rgb(${rnd1} ${rnd2} ${rnd3})`;
}
```

```js live-sample___paint-reporting
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const output = document.querySelector("ul");
const canvas = document.querySelector("canvas");
const root = document.querySelector(":root");
const oneBtn = document.querySelector("#one button");
const twoBtn = document.querySelector("#two button");
```

Next, we store the `<div>` element's current background colors in a {{jsxref("Map")}}.

```js live-sample___paint-reporting
const currBgs = new Map([
  [one, getComputedStyle(one).backgroundColor],
  [two, getComputedStyle(two).backgroundColor],
]);
```

We now attach event listeners to each `<button>`, so that when they are clicked, we run the `updateBgColor()` function. The function definition checks which custom property needs updating (`--bgcolor-one` if the first button was clicked, `--bgcolor-two` otherwise), and sets that property to a random color returned from the `randomColor()` function, which we've hidden for brevity.

```js live-sample___paint-reporting
oneBtn.addEventListener("click", updateBgColor);
twoBtn.addEventListener("click", updateBgColor);

function updateBgColor(e) {
  const prop = e.target === oneBtn ? "--bgcolor-one" : "--bgcolor-two";
  root.style.setProperty(prop, randomColor());
}
```

Nest, we define a `reportPaint()` function. This takes an eement reference as an argument, retrieves its `background-color`, and defines a variable called `elemColorStatement`. If the current `background-color` is different to the element's old `background-color` stored in the `currBgs` map, we set `elemColorStatement` to say what the background color was changed to, and update the color entry stored in `currBgs`. If they are the same, we set `elemColorStatement` to say that background was unchanged.

We then create an {{htmlelement("li")}} element, set its text content to a report statement that includes `elemColorStatement` and says what element was changed, and append it to the output list. Last, we use {{domxref("Element.scrollIntoView", "scrollIntoView()")}} to scroll the list to the bottom so you can always see the latest entry.

```js live-sample___paint-reporting
function reportPaint(elem) {
  const newBg = getComputedStyle(elem).backgroundColor;
  let elemColorStatement;

  if (newBg !== currBgs.get(elem)) {
    elemColorStatement = `Background changed to ${newBg}.`;
    currBgs.set(elem, newBg);
  } else {
    elemColorStatement = `Background unchanged.`;
  }

  const li = document.createElement("li");
  li.textContent = `Element ${elem.id} repainted. ${elemColorStatement}`;
  output.appendChild(li);
  li.scrollIntoView({ block: "nearest" });
}
```

Finally, we define a `main()` function before running it to start the example. Inside, we first get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we color the entire canvas using a solid color using the {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle()")}} and {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} methods. We then use `drawElementImage()` to draw both of the `drawable` elements onto the canvas, placing each one at different coordinates. We do this inside a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event so that the `drawable` elements are redrawn on the canvas each time they are repainted. We check which element(s) were repainted each time the event handler runs using the `changedElements` property, and run the `reportPaint()` function for each one.

```js live-sample___paint-reporting
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.classList.add("no-html-in-canvas");
    return;
  }

  canvas.addEventListener("paint", (e) => {
    ctx.fillStyle = "#7D82B8";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawElementImage(one, 20, 20);
    ctx.drawElementImage(two, 100, 140);

    for (const elem of [one, two]) {
      if (e.changedElements.includes(elem)) {
        reportPaint(elem);
      }
    }
  });
}

main();
```

#### Result

{{EmbedLiveSample("paint-reporting", "100%", 360)}}

Try clicking the buttons and observe the reported paints in the list as the background colors are updated. Note however that all the repaints are reported: This also includes the initial paint, and the repaint each time a text selection is made or a button is focused or hovered.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
