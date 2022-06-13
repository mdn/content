---
title: 'XRSession: end event'
slug: Web/API/XRSession/end_event
tags:
  - API
  - AR
  - End
  - Event end
  - Finish
  - Mixed
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR Device API
  - XR
  - XRSession
  - augmented
  - events
  - stop
  - terminate
browser-compat: api.XRSession.end_event
---
{{APIRef("WebXR Device API")}}

An `end` event is fired at an {{DOMxRef("XRSession")}} object when the WebXR session has ended, either because the web application has chosen to stop the session, or because the {{Glossary("user agent")}} terminated the session.

<table class="properties">
  <tbody>
    <tr>
      <th>Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th>Interface</th>
      <td>{{DOMxRef("XRSessionEvent")}}</td>
    </tr>
    <tr>
      <th>Event handler</th>
      <td>{{DOMxRef("XRSession.onend")}}</td>
    </tr>
  </tbody>
</table>

## Example

To be informed when a WebXR session comes to an end, you can add a handler to your {{domxref("XRSession")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
XRSession.addEventListener("end", function(event) {
  /* the session has shut down */
});
```

Alternatively, you can use the {{DOMxRef("XRSession.onend")}} event handler property to establish a handler for the `end` event:

```js
XRSession.onend = function(event) {
 /* the session has shut down */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
