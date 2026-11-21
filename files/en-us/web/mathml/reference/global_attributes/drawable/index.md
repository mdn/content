---
title: drawable
slug: Web/MathML/Reference/Global_attributes/drawable
page-type: mathml-attribute
browser-compat: mathml.global_attributes.drawable
sidebar: mathmlref
---

The **`drawable`** attribute marks a MathML element as a **paint root**, meaning that it can be rendered independently on a parent {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`, using the [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API).

The `drawable` attribute is a [boolean attribute](/en-US/docs/Web/HTML/Reference/Attributes#boolean_attributes); its presence marks a `<canvas>` descendant as a paint root.

## Examples

### Basic usage

This example shows how to render MathML onto a 2D canvas.

#### HTML

We include a {{htmlelement("canvas")}} element with its [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute set to `drawable`. Nested inside the canvas we include a {{mathmlelement("math")}} element containing some MathML content. The `<math>` element has the `drawable` attribute set.

```html live-sample___basic-usage
<canvas width="240" height="180" content="drawable">
  <math display="block" drawable>
    <mrow>
      <mi>E</mi>
      <mo>=</mo>
      <mi>m</mi>
      <msup>
        <mi>c</mi>
        <mn>2</mn>
      </msup>
    </mrow>
  </math>
</canvas>
```

#### CSS

We set some rudimentary styles on the `<circle>` element. As you'll see in the [result](#result), the HTML is rendered on the canvas exactly as styled by the CSS.

```css live-sample___basic-usage
math {
  font-size: 20px;
}

math:hover,
math:focus {
  color: red;
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

In our script, we first grab references to our `<canvas>` and `<math>` elements.

```js live-sample___basic-usage
const canvas = document.querySelector("canvas");
const mathElem = document.querySelector("math");
```

Next, we define a `main()` function. Inside, we get a 2D canvas context using the {{domxref("HTMLCanvasElement.getContext", "getContext()")}} method. Next, we check if the {{domxref("CanvasRenderingContext2D.drawElementImage", "drawElementImage()")}} method exists on the context; if not, we add a `no-html-in-canvas` class to the {{htmlelement("body")}} element that is used to display a "no support" banner.

Next, we use the `drawElementImage()` method to draw the `<math>` element onto the canvas. We do this inside a {{domxref("HTMLCanvasElement.paint_event", "paint")}} event so that the `<math>` element is redrawn on the canvas each time it is repainted. This includes the initial paint, and the repaint each time the MathML is focused or hovered.

```js live-sample___basic-usage
function main() {
  const ctx = canvas.getContext("2d");

  if (!ctx.drawElementImage) {
    document.body.className = "no-html-in-canvas";
    return;
  }

  canvas.addEventListener("paint", () => {
    ctx.drawElementImage(mathElem, 10, 10);
  });
}
```

Finally, we run the `main()` function to start the example:

```js live-sample___basic-usage
main();
```

#### Result

{{EmbedLiveSample("basic-usage", "100%", 200)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The `<canvas>` element [`content`](/en-US/docs/Web/HTML/Reference/Elements/canvas#content) attribute
- [HTML-in-Canvas API](/en-US/docs/Web/API/HTML-in-Canvas_API)
- [HTML-in-Canvas](https://developer.chrome.com/docs/web-platform/html-in-canvas) on developer.chrome.com (2026)
