---
title: 'Window: orientationchange event'
slug: Web/API/Window/orientationchange_event
tags:
  - API
  - Event
  - Reference
  - Sensors
  - Window
  - onorientationchange
browser-compat: api.Window.orientationchange_event
---
{{APIRef}} {{Deprecated_Header}}

The `orientationchange` event is fired when the orientation of the device has changed.

This event is deprecated. Listen for the {{domxref("ScreenOrientation/onchange", "ScreenOrientation.onchange")}} event instead.

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
      <th scope="row">Interface</th>
      <td>{{domxref("Event")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler</th>
      <td>
        {{domxref("Window/onorientationchange", "onorientationchange")}}
      </td>
    </tr>
  </tbody>
</table>

## Example

You can use the `orientationchange` event in an {{domxref("EventTarget/addEventListener", "addEventListener")}} method:

```js
window.addEventListener("orientationchange", function(event) {
  console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
});
```

Or use the {{domxref("Window/onorientationchange", "onorientationchange")}} event handler property:

```js
window.onorientationchange = function(event) {
  console.log("the orientation of the device is now " + event.target.screen.orientation.angle);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
