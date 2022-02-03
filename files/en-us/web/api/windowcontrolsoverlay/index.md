---
title: WindowControlsOverlay
slug: Web/API/WindowControlsOverlay
tags:
  - API
  - Window Controls Overlay
  - WindowControlsOverlay
  - Interface
  - Reference
  - Progressive Web Apps
browser-compat: api.WindowControlsOverlay
---
{{SeeCompatTable}}{{APIRef("Window Controls Overlay API")}}{{securecontext_header}}

The **`WindowControlsOverlay`** interface of the [Window Controls Overlay API](/en-US/docs/Web/API/Window_Controls_Overlay_API) exposes information about the geometry
of the title bar area in desktop Progressive Web Apps, and an event to know whenever it changes. This interface is accessible from {{domxref('Navigator.windowControlsOverlay')}}.

## Properties

- {{domxref("WindowControlsOverlay.visible")}} {{readonlyInline}}
  - : A {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

## Methods

- {{domxref("WindowControlsOverlay.getTitlebarAreaRect()")}}
  - : Returns the size and position of the title bar.

## Events

Listen to these events using {{domxref('EventTarget.addEventListener()')}} or by assigning an event listener to the relevant `oneventname` property of this interface.

- [`geometrychange`](/en-US/docs/Web/API/WindowControlsOverlay/geometrychange_event)
  - : Fired when the geometry of the title bar area changes.

## Examples

```js
if ('windowControlsOverlay' in navigator) {
  navigator.windowControlsOverlay.addEventListener('geometrychange', event => {
    if (event.visible) {
      var rect = event.titlebarAreaRect;
      // Do something with the coordinates of the title bar area.
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
