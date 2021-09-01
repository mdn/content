---
title: XRSessionEvent()
slug: Web/API/XRSessionEvent/XRSessionEvent
tags:
  - API
  - Constructor
  - Mixed
  - Reality
  - Reference
  - Session
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRSessionEvent
  - augmented
  - events
browser-compat: api.XRSessionEvent.XRSessionEvent
---
{{APIRef("WebXR Device API")}}

The WebXR Device API's
**`XRSessionEvent()`** constructor creates and returns a new
{{domxref("XRSessionEvent")}} object. These objects represent events announcing
state changes in an {{domxref("XRSession")}} representing an augmented or virtual
reality session.

## Syntax

```js
newXRSessionEvent = new XRSessionEvent(type, eventInitDict);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} indicating which of the events represented by objects of
    type `XRSessionEvent` this particular object represents. See [`XRSessionEvent > Session event types`](/en-US/docs/Web/API/XRSessionEvent#session_event_types) for a list of the permitted values.
- `eventInitDict`

  - : An object with the following values:

    - `session`: The {{domxref("XRSession")}} to which the event is to be delivered.

### Return value

A newly-created {{domxref("XRSessionEvent")}} object representing an object of the
specfied type and configured as described by the `eventInitDict` parameter.

## Examples

See [`XRSessionEvent`](/en-US/docs/Web/API/XRSessionEvent#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
