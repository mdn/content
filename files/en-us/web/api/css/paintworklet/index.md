---
title: CSS.paintWorklet (Static property)
slug: Web/API/CSS/paintWorklet
tags:
  - API
  - CSS
  - CSS Paint API
  - Experimental
  - Houdini
  - Painting
  - Property
  - Reference
  - Worklet
  - paintWorklet
browser-compat: api.CSS.paintWorklet
---
{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

**`paintWorklet`** is a static,
read-only property of the {{DOMxRef("CSS")}} interface that provides access to the
{{DOMxRef("PaintWorklet")}}, which programmatically generates an image where a CSS
property expects a file.

## Syntax

```js
var worklet = CSS.paintWorklet;
```

### Value

The {{DOMxRef('PaintWorklet')}} object.

## Examples

The following example demonstrates loading a {{DOMxRef('PaintWorklet')}} from its js
file and does so by feature detection.

```js
<script>
  if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('checkerboard.js');
  }
</script>
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/en-US/docs/Web/Houdini)
- [Houdini overview](/en-US/docs/Web/Houdini/learn)
