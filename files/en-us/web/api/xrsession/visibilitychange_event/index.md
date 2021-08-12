---
title: 'XRSession: visibilitychange event'
slug: Web/API/XRSession/visibilitychange_event
tags:
  - API
  - AR
  - Blurred
  - Mixed
  - Reality
  - Reference
  - VR
  - Virtual
  - Visibility
  - Visible
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - active
  - augmented
  - events
  - focused
  - hidden
  - visibilitychange
browser-compat: api.XRSession.visibilitychange_event
---
{{APIRef("WebXR Device API")}}

The **`visibilitychange`** event is sent to an {{domxref("XRSession")}} to inform it when it becomes visible or hidden, or when it becomes visible but not currently focused. Upon receiving the event, you can check the value of the session's {{domxref("XRSession.visibilityState", "visibilityState")}} property to determine the new visibility state.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{domxref("XRSessionEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler property</th>
      <td>
        {{domxref("XRSession.onvisibilitychange", "onvisibilitychange")}}
      </td>
    </tr>
  </tbody>
</table>

When the `XRSession` receives this event, the visibility state has already been changed.

## Examples

This example demonstrates how to listen for a `visibilitychange` event on a WebXR session, using {{domxref("EventTarget.addEventListener", "addEventListener()")}} to begin listening for the event:

```js
navigator.xr.requestSession("inline").then((xrSession) => {
  xrSession.addEventListener("visibilitychange", e => {
    switch(e.session.visibilityState) {
      case "visible":
      case "visible-blurred":
        mySessionVisible(true);
        break;
      case "hidden":
        mySessionVisible(false);
        break;
    }
  });
});
```

When a visibility state change occurs, the event is received and dispatched to a function `mySessionVisible()`, with a Boolean parameter indicating whether or not the session is presently being displayed to the user.

You can also create the event handler by assigning it to the {{domxref("XRSession")}}'s {{domxref("XRSession.onvisibilitychange", "onvisibilitychange")}} event handler property, like this:

```js
xrSession.onvisibilitychange = (e) => {
  /* event handled here */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
