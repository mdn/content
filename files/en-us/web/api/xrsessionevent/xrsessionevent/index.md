---
title: "XRSessionEvent: XRSessionEvent() constructor"
short-title: XRSessionEvent()
slug: Web/API/XRSessionEvent/XRSessionEvent
page-type: web-api-constructor
browser-compat: api.XRSessionEvent.XRSessionEvent
---

{{APIRef("WebXR Device API")}}

The WebXR Device API's
**`XRSessionEvent()`** constructor creates and returns a new
{{domxref("XRSessionEvent")}} object. These objects represent events announcing
state changes in an {{domxref("XRSession")}} representing an augmented or virtual
reality session.

## Syntax

```js-nolint
new XRSessionEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `end` or `visibilitychange`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `session`
      - : The {{domxref("XRSession")}} to which the event is to be delivered.

### Return value

A new {{domxref("XRSessionEvent")}} object representing an object of the
specified type and configured as described by the `options` parameter.

## Examples

See [`XRSessionEvent`](/en-US/docs/Web/API/XRSessionEvent#examples) for example code.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
