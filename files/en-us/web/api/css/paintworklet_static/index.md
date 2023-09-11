---
title: "CSS: paintWorklet static property"
short-title: paintWorklet
slug: Web/API/CSS/paintWorklet_static
page-type: web-api-static-property
status:
  - experimental
browser-compat: api.CSS.paintWorklet_static
---

{{APIRef("CSSOM")}}{{SeeCompatTable}}{{SecureContext_Header}}

The static, read-only **`paintWorklet`** property of the {{DOMxRef("CSS")}} interface provides access to the
paint [worklet](/en-US/docs/Web/API/Worklet), which programmatically generates an image where a CSS
property expects a file.

## Value

The associated {{DOMxRef('Worklet')}} object.

## Examples

The following example demonstrates loading a paint [worklet](/en-US/docs/Web/API/Worklet) from its js
file and does so by feature detection.

```js
if ("paintWorklet" in CSS) {
  CSS.paintWorklet.addModule("checkerboard.js");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [CSS Painting API](/en-US/docs/Web/API/CSS_Painting_API)
- [Houdini APIs](/en-US/docs/Web/Guide/Houdini)
