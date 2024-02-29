---
title: "XRSession: visibilitychange event"
short-title: visibilitychange
slug: Web/API/XRSession/visibilitychange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.visibilitychange_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`visibilitychange`** event is sent to an {{domxref("XRSession")}} to inform it when it becomes visible or hidden, or when it becomes visible but not currently focused. Upon receiving the event, you can check the value of the session's {{domxref("XRSession.visibilityState", "visibilityState")}} property to determine the new visibility state.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("visibilitychange", (event) => {});

onvisibilitychange = (event) => {};
```

## Event type

An {{domxref("XRSessionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRSessionEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which the event refers.

## Description

### Trigger

Triggered when an {{domxref("XRSession")}} becomes visible or hidden, or when it becomes visible but not currently focused.

When the `XRSession` receives this event, the visibility state has already been changed.

### Use cases

Upon receiving the event, you can check the value of the session's {{domxref("XRSession.visibilityState", "visibilityState")}} property to determine the new visibility state.

## Examples

This example demonstrates how to listen for a `visibilitychange` event on a WebXR session, using {{domxref("EventTarget.addEventListener", "addEventListener()")}} to begin listening for the event:

```js
navigator.xr.requestSession("inline").then((xrSession) => {
  xrSession.addEventListener("visibilitychange", (e) => {
    switch (e.session.visibilityState) {
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

You can also create the event handler by assigning it to the {{domxref("XRSession")}}'s `onvisibilitychange` event handler property, like this:

```js
xrSession.onvisibilitychange = (e) => {
  /* event handled here */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
