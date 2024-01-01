---
title: PaintWorkletGlobalScope
slug: Web/API/PaintWorkletGlobalScope
page-type: web-api-interface
status:
  - experimental
browser-compat: api.PaintWorkletGlobalScope
---

{{APIRef("CSS Painting API")}}{{SeeCompatTable}}

The **`PaintWorkletGlobalScope`** interface of the [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API) represents the global object available inside a paint {{domxref("Worklet")}}.

## Privacy concerns

To avoid leaking visited links, this feature is currently disabled in Chrome-based browsers for {{HTMLElement("a")}} elements with an [`href`](/en-US/docs/Web/HTML/Element/a#href) attribute, and for children of such elements. For details, see the following:

- The CSS Painting API [Privacy Considerations section](https://drafts.css-houdini.org/css-paint-api/#privacy-considerations)
- The CSS Painting API spec issue ["CSS Paint API leaks browsing history"](https://github.com/w3c/css-houdini-drafts/issues/791)

## Instance properties

_This interface inherits methods from {{domxref('WorkletGlobalScope')}}._

- {{domxref('PaintWorkletGlobalScope.devicePixelRatio')}} {{Experimental_Inline}}
  - : Returns the current device's ratio of physical pixels to logical pixels.

## Instance methods

_This interface inherits methods from {{domxref('WorkletGlobalScope')}}._

- {{domxref('PaintWorkletGlobalScope.registerPaint()')}} {{Experimental_Inline}}
  - : Registers a class to programmatically generate an image where a CSS property expects a file.

### Event

None.

## Examples

The following three examples go together to show creating, loading, and using a paint `Worklet`.

### Create a paint worklet

The following shows an example worklet module. This should be in a separate js file. Note that `registerPaint()` is called without a reference to a paint `Worklet`.

```js
class CheckerboardPainter {
  paint(ctx, geom, properties) {
    // The global object here is a PaintWorkletGlobalScope
    // Methods and properties can be accessed directly
    // as global features or prefixed using self
    const dpr = self.devicePixelRatio;

    // Use `ctx` as if it was a normal canvas
    const colors = ["red", "green", "blue"];
    const size = 32;
    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < geom.width / size; x++) {
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
registerPaint("checkerboard", CheckerboardPainter);
```

### Load a paint worklet

The following example demonstrates loading the above worklet from its js file and does so by feature detection.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

### Use a paint worklet

This example shows how to use a paint `Worklet` in a stylesheet, including the simplest way to provide a fallback if `CSS.paintWorklet` isn't supported.

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
