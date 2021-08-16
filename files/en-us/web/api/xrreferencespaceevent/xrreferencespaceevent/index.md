---
title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
tags:
  - API
  - AR
  - Constructor
  - Events
  - Mixed
  - Reality
  - Reference
  - Reference Space
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRReferenceSpaceEvent
  - augmented
  - events
browser-compat: api.XRReferenceSpaceEvent.XRReferenceSpaceEvent
---
{{APIRef("WebXR Device API")}}

The **`XRReferenceSpaceEvent()`**
constructor is used to create a new {{domxref("XRReferenceSpaceEvent")}} object, which
represents an event regarding the state of a WebXR reference space object,
{{domxref("XRReferenceSpace")}}.

Currently, only the {{domxref("XRReferenceSpace.reset_event", "reset")}} event is
defined using this type.

## Syntax

```js
let refSpaceEvent = new XRReferenceSpaceEvent(type, eventInitDict);
```

### Parameters

- `type`
  - : A {{domxref("DOMString")}} indicating the event type which has occurred. Currently,
    this is always `reset`.
- `eventInitDict`

  - : An object to configure the event. The properties are:

    - `referenceSpace`: The {{domxref("XRReferenceSpace")}} from which the event originates.
    - `transform`: An {{domxref("XRRigidTransform")}} which maps the old coordinate system (from before the changes indicated by this event) to the new coordiante system.

### Return value

A new `XRReferenceSpaceEvent` object, initialized as defined by the input parameters.

## Examples

This simple snippet calls the constructor to create a new reference space event of type {{domxref("XRReferenceSpace.reset_event", "reset")}}.

```js
let refSpaceEvent = new XRReferenceSpaceEvent("reset", {
  referenceSpace: myRefSpace,
  transform: myTransform
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
