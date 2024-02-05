---
title: "XRSession: end event"
short-title: end
slug: Web/API/XRSession/end_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.end_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

An `end` event is fired at an {{DOMxRef("XRSession")}} object when the WebXR session has ended, either because the web application has chosen to stop the session, or because the {{Glossary("user agent")}} terminated the session.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("end", (event) => {});

onend = (event) => {};
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

Triggered when the WebXR session has ended, either because the web application has chosen to stop the session, or because the {{Glossary("user agent")}} terminated the session.

This event is not cancelable and does not bubble.

### Use cases

You can use this event to react to the ending of an WebXR session. You may want to display a UI element informing about the termination of the session, for example.

## Examples

To be informed when a WebXR session comes to an end, you can add a handler to your {{domxref("XRSession")}} instance using {{domxref("EventTarget.addEventListener", "addEventListener()")}}, like this:

```js
XRSession.addEventListener("end", (event) => {
  /* the session has shut down */
});
```

Alternatively, you can use the `XRSession.onend` event handler property to establish a handler for the `end` event:

```js
XRSession.onend = (event) => {
  /* the session has shut down */
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
