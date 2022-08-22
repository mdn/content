---
title: XRReferenceSpaceEvent()
slug: Web/API/XRReferenceSpaceEvent/XRReferenceSpaceEvent
page-type: web-api-constructor
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

## Syntax

```js
new XRReferenceSpaceEvent(type, options)
```

### Parameters

- `type`
  - :  A string with the name of the event.
    It is case-sensitive and browsers always set it to `reset`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `referenceSpace`
      - : The {{domxref("XRReferenceSpace")}} from which the event originates.
    - `transform`
      - : An {{domxref("XRRigidTransform")}} which maps the old coordinate system (from before the changes indicated by this event) to the new coordinate system.

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
