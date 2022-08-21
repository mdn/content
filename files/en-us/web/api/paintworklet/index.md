---
title: PaintWorklet
slug: Web/API/PaintWorklet
page-type: web-api-interface
tags:
  - API
  - CSS
  - CSS Paint API
  - Houdini
  - Interface
  - Painting
  - Reference
  - Worklet
  - paintWorklet
browser-compat: api.PaintWorkletGlobalScope
---
{{APIRef("CSS Painting API")}}

The **`PaintWorklet`** interface of the {{domxref('CSS Painting API','','',' ')}} programmatically generates an image where a CSS property expects a file. Access this interface through {{DOMxRef("CSS.paintWorklet")}}.

## Privacy concerns

To avoid leaking visited links, this feature is currently disabled in Chrome-based browsers for {{HTMLElement("a")}} elements with an {{HTMLAttrXref("href", "a")}} attribute, and for children of such elements. For details, see the following:

- The CSS Painting API [Privacy Considerations section](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations)
- The CSS Painting API spec issue ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## Properties

- {{domxref('PaintWorklet.devicePixelRatio')}}
  - : Returns the current device's ratio of physical pixels to logical pixels.

### Event handlers

None.

## Methods

_This interface inherits methods from {{domxref('Worklet')}}._

- {{domxref('PaintWorklet.registerPaint()')}}
  - : Registers a class programmatically generate an image where a CSS property expects a file.
- {{domxref('Worklet.addModule', 'PaintWorklet.addModule()')}}
  - : The [`addModule()`](/en-US/docs/Web/API/Worklet/addModule) method, inherited from the _{{domxref('Worklet')}}_ interface loads the module in the given JavaScript file and adds it to the current PaintWorklet.

## Examples

The following three examples go together to show creating, loading, and using a `PaintWorklet`.

### Create a PaintWorklet

The following shows an example worklet module. This should be in a separate js file. Note that `registerPaint()` is called without a reference to `PaintWorklet`.

```js
class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // Use `ctx` as if it was a normal canvas
    const colors = ['red', 'green', 'blue'];
    const size = 32;
    for (let y = 0; y < (geom.height / size); y++) {
      for (let x = 0; x < (geom.width / size); x++) {
        const color = colors[(x + y) % colors.length];
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(x * size, y * size, size, size);
        ctx.fill();
      }
    }
  }
}

// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter);
```

### Load a PaintWorklet

The following example demonstrates loading the above worklet from its js file and does so by feature detection.

```js
if ('paintWorklet' in CSS) {
  CSS.paintWorklet.addModule('checkerboard.js');
}
```

### Use a PaintWorklet

This example shows how to use a `PaintWorklet` in a stylesheet, including the simplest way to provide a fallback if `PaintWorklet` isn't supported.

```html
<style>
  textarea {
    background-image: url(checkerboard);
    background-image: paint(checkerboard);
  }
</style>
<textarea></textarea>
```

You can also use the {{cssxref('@supports')}} at-rule.

```css
@supports (background: paint(id)) {
  background-image: paint(checkerboard);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/en-US/docs/Web/Guide/Houdini)
