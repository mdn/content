---
title: XRSessionEvent
slug: Web/API/XRSessionEvent
tags:
  - API
  - AR
  - Event
  - Interface
  - Mixed
  - Reality
  - Reference
  - Session
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSession
  - XRSessionEvent
  - augmented
browser-compat: api.XRSessionEvent
---
{{APIRef("WebXR Device API")}}

The [WebXR Device API](/en-US/docs/Web/API/WebXR_Device_API)'s **`XRSessionEvent`** interface describes an event which indicates the change of the state of an {{domxref("XRSession")}}. These events occur, for example, when the session ends or the visibility of its context changes.

## Constructor

- {{domxref("XRSessionEvent.XRSessionEvent", "XRSessionEvent()")}}
  - : Creates and returns a new `XRSessionEvent` object.

## Properties

_In addition to properties inherited from its parent interface, {{domxref("Event")}}, `XRSessionEvent` provides the following:_

- {{domxref("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which the event refers.

## Methods

_While `XRSessionEvent` defines no methods, it inherits methods from its parent interface, {{domxref("Event")}}._

## Session event types

_The following events are represented using the `XRSessionEvent` interface, and are permitted values for its `type` property._

- {{domxref("XRSession.end_event", "end")}}
  - : Fired at the session when it has ended, after being terminated by the application or the {{Glossary("user agent")}}.
- {{domxref("XRSession.visibilitychange_event", "visibilitychange")}}
  - : Fired at the session whenever its visibility state changes.

## Examples

This example creates a listiener that watches for the visibility state of the session to change. It reacts by calling a function `mySessionVisible()` with a Boolean indicating whether or not the session is visible; this function might, for instance, spin up or reconfigure a worker that handles rendering the scene.

```js
xrSession.addEventListener("visibilitystate", e => {
  switch(e.session.visibilitystate) {
    case "visible":
    case "visible-blurred":
      mySessionVisible(true);
      break;
    case "hidden":
      mySessionVisible(false);
      break;
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
