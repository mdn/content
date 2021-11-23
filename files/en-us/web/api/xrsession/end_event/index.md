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

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('end', () => { });

onend = event => { });
```

## Description

### Trigger

Triggered when the WebXR session has ended, either because the web application has chosen to stop the session, or because the {{Glossary("user agent")}} terminated the session.

This event is not cancelable and does not bubble.

### Event type

An {{domxref("XRSessionEvent")}} which, in addition to the generic {{domxref("Event")}} class, includes the following properties:

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which the event refers.

### Use cases

You can use this event to react to the ending of an WebXR session. You may want to display a UI element informing about the termination of the session, for example.

## Examples

To be informed when a WebXR session comes to an end, you can add a handler to your {{domxref("XRSession")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
XRSession.addEventListener("end", function(event) {
  /* the session has shut down */
});
```

Alternatively, you can use the `XRSession.onend` event handler property to establish a handler for the `end` event:

```js
XRSession.onend = function(event) {
 /* the session has shut down */
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
