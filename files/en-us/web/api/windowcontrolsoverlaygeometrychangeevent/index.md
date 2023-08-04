---
title: WindowControlsOverlayGeometryChangeEvent
slug: Web/API/WindowControlsOverlayGeometryChangeEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.WindowControlsOverlayGeometryChangeEvent
---

{{APIRef("Window Controls Overlay API")}}{{SeeCompatTable}}

The **`WindowControlsOverlayGeometryChangeEvent`** interface of the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) is passed to [`geometrychange`](/en-US/docs/Web/API/WindowControlsOverlay/geometrychange_event) when the size or visibility of a desktop Progress Web App's title bar region changes.

{{InheritanceDiagram}}

## Constructor

- {{domxref("WindowControlsOverlayGeometryChangeEvent.WindowControlsOverlayGeometryChangeEvent", "WindowControlsOverlayGeometryChangeEvent()")}} {{Experimental_Inline}}
  - : Creates a `WindowControlsOverlayGeometryChangeEvent` event with the given parameters.

## Instance properties

_Also inherits properties from its parent {{domxref("Event")}}_.

- {{domxref("WindowControlsOverlayGeometryChangeEvent.titlebarAreaRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{domxref("DOMRect")}} representing the position and size of the title bar region.
- {{domxref("WindowControlsOverlayGeometryChangeEvent.visible")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : A {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

## Examples

The following example shows how to use a `WindowControlsOverlayGeometryChangeEvent` instance by adding an
event handler on the {{domxref("Navigator.windowControlsOverlay")}} property, to listen to geometry changes of a PWA's title bar region.

```js
if ("windowControlsOverlay" in navigator) {
  navigator.windowControlsOverlay.addEventListener(
    "geometrychange",
    (event) => {
      if (event.visible) {
        const rect = event.titlebarAreaRect;
        // Do something with the coordinates of the title bar area.
      }
    },
  );
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API).
