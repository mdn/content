---
title: drawable
slug: Web/SVG/Reference/Attribute/drawable
page-type: svg-attribute
browser-compat: svg.global_attributes.drawable
sidebar: svgref
---

The **`drawable`** attribute marks an SVG element as a **paint root**, meaning that it can be rendered independently on a parent {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

The `drawable` attribute is a [boolean attribute](/en-US/docs/Web/HTML/Reference/Attributes#boolean_attributes); its presence marks a `<canvas>` descendant as a paint root.

You can use `drawable` with any [renderable attribute](/en-US/docs/Web/SVG/Reference/Element#renderable_elements), including shape, structural, and text content elements.

## Examples

### Basic usage

This example shows how to render SVG onto a 2D canvas.

#### HTML

We include a {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`. Nested inside the canvas we include an {{svgelement("svg")}} element containing a {{svgelement("circle")}}. The `<svg>` element has the `drawable` attribute set.

```html live-sample___basic-usage
<canvas width="480" height="320" content="drawable">
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" drawable>
    <circle cx="20" cy="20" r="15" tabindex="0" />
  </svg>
</canvas>
```

#### CSS

We set some rudimentary styles on the `<circle>` element. As you'll see in the [result](#result), the HTML is rendered on the canvas exactly as styled by the CSS.

```css live-sample___basic-usage
circle {
  stroke: black;
  stroke-width: 2px;
  fill: red;
  outline: none;
}

circle:hover,
circle:focus {
  fill: blue;
}
```

```css hidden live-sample___basic-usage
.no-html-in-canvas::before {
  content: "CanvasRenderingContext2D.drawElementImage() is not available. HTML-in-Canvas is not supported.";
  background-color: wheat;
  text-align: center;
  font-family: sans-serif;
  padding: 1rem 0;

  z-index: 1;
  position: fixed;
  inset: 40% 0 auto;
}
```

#### JavaScript

In our script, we first grab references to our `<canvas>` and `<svg>` elements.

```js live-sample___basic-usage
const canvas = document.querySelector("canvas");
const svgElem = document.querySelector("svg");
```

Next, we define a `main()` function. Inside, we get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we use the `drawElementImage()` method to draw the `<svg>` element onto the canvas. We do this inside a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event so that the `<svg>` element is redrawn on the canvas each time it is repainted. This includes the initial paint, and the repaint each time the circle is focused or hovered.

```js live-sample___basic-usage
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.className = "no-html-in-canvas";
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.drawElementImage(svgElem, 10, 10);
  });
}
```

Finally, we run the `main()` function to start the example:

```js live-sample___basic-usage
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
