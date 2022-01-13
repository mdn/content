---
title: WindowControlsOverlayGeometryChangeEvent
slug: Web/API/WindowControlsOverlayGeometryChangeEvent
tags:
  - API
  - Interface
  - WindowControlsOverlayGeometryChangeEvent
  - Reference
browser-compat: api.WindowControlsOverlayGeometryChangeEvent
---
{{APIRef("DOM Events")}}

The **`WindowControlsOverlayGeometryChangeEvent`** interface of the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) is passed to [`geometrychange`](/en-US/docs/Web/API/WindowControlsOverlay/geometrychange_event) when the size or visibility of a desktop Progress Web App's title bar region changes.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent", "WindowControlsOverlayGeometryChangeEvent()")}}
  - : Creates a `WindowControlsOverlayGeometryChangeEvent` event with the given parameters.

## Properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("WindowControlsOverlayGeometryChangeEvent.titlebarAreaRect")}} {{readonlyInline}}
  - : A {{domxref("DOMRect")}} representing the position and size of the title bar region.
- {{domxref("WindowControlsOverlayGeometryChangeEvent.visible")}} {{readonlyInline}}
  - : A {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

## Examples

The following example shows how to use a `WindowControlsOverlayGeometryChangeEvent` instance by adding an
event handler on the {{domxref("Navigator.windowControlsOverlay")}} property, to listen to geometry changes of a PWA's title bar region.

```js
if ('windowControlsOverlay' in navigator) {
  navigator.windowControlsOverlay.addEventListener('geometrychange', event => {
    if (event.visible) {
      const rect = event.titlebarAreaRect;
      // Do something with the coordinates of the title bar area.
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).
