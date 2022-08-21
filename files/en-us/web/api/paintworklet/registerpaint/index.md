---
title: PaintWorkletGlobalScope.registerPaint()
slug: Web/API/PaintWorklet/registerPaint
page-type: web-api-instance-method
tags:
  - API
  - CSS
  - CSS Paint API
  - Houdini
  - Painting
  - Method
  - Reference
  - Worklet
  - paintWorklet
  - registerPaint
browser-compat: api.PaintWorkletGlobalScope.registerPaint
---
{{APIRef("CSS Painting API")}}

The
**`PaintWorkletGlobalScope.registerPaint()`** method of the
{{domxref("PaintWorklet")}} interface registers a class programmatically generate an
image where a CSS property expects a file.

## Syntax

```js
registerPaint(name, classRef)
```

### Parameters

- `name`
  - : The name of the worklet class to register.
- `classRef`
  - : A reference to the class that implements the worklet.

## Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown when one of the arguments is invalid or missing.
- `InvalidModificationError` {{domxref("DOMException")}}
  - : Thrown when the a worklet already exists with the specified name.

## Examples

The following shows registering an example worklet module. This should be in a separate
js file. Note that `registerPaint()` is called without a reference to
`PaintWorkletGlobalScope`. The file itself is loaded
through `CSS.paintWorklet.addModule()` (documented here on the parent class
of PaintWorklet, at {{domxref('Worklet.addModule()')}}.

```js
/* checkboardWorklet.js */

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

The first step in using a paintworklet is defining the paint worklet using the
`registerPaint()` function, as done above. To use it, you register it with
the `CSS.paintWorklet.addModule()` method:

```html
<script>
   CSS.paintWorklet.addModule('checkboardWorklet.js');
</script>
```

You can then use the `{{cssxref('paint()', 'paint()')}}` CSS function in your
CSS anywhere an `{{cssxref('&lt;image&gt;')}}` value is valid.

```css
li {
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
