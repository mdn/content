---
title: 'WindowControlsOverlay: geometrychange event'
slug: Web/API/WindowControlsOverlay/geometrychange_event
tags:
  - Event
  - Reference
  - Progressive Web Apps
  - Window Controls Overlay
  - events
browser-compat: api.WindowControlsOverlay
---
{{APIRef("EyeDropper API")}}

The `geometrychange` event is fired when the position, size, or visibility of a desktop Progressive Web App's title bar area changes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        <code
          ><a href="/en-US/docs/Web/API/WindowControlsOverlay/ongeometrychange"
            >ongeometrychange</a
          ></code
        >
      </td>
    </tr>
  </tbody>
</table>

The `geometrychange` event has the following properties:

- `titlebarAreaRect`
  - : A {{domxref("DOMRect")}} representing the position and size of the title bar area.
- `visible`
  - : A {{Glossary("Boolean")}} that indicates whether the window controls overlay is visible or not.

## Examples

Using `addEventListener()`:

```js
navigator.windowControlsOverlay.addEventListener('geometrychange', (event) => {
  const {x, y, width, height} = event.titlebarAreaRect;
  console.log(`The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`);
});
```

Using the `ongeometrychange` event handler property:

```js
navigator.windowControlsOverlay.ongeometrychange = (event) => {
  const {x, y, width, height} = event.titlebarAreaRect;
  console.log(`The titlebar area coordinates are x:${x}, y:${y}, width:${width}, height:${height}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
