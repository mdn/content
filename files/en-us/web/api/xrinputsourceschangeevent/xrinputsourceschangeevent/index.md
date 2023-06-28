---
title: "XRInputSourcesChangeEvent: XRInputSourcesChangeEvent() constructor"
short-title: XRInputSourcesChangeEvent()
slug: Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent
page-type: web-api-constructor
browser-compat: api.XRInputSourcesChangeEvent.XRInputSourcesChangeEvent
---

{{APIRef("WebXR Device API")}}

The **`XRInputSourcesChangeEvent()`**
constructor creates and returns a new {{domxref("XRInputSourcesChangeEvent")}} object,
representing an update to the list of available [WebXR](/en-US/docs/Web/API/WebXR_Device_API) input devices. You
won't typically call this constructor yourself, as these events are created and sent to
you by the WebXR system.

## Syntax

```js-nolint
new XRInputSourcesChangeEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `inputsourceschange`.
- `options`
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `added`
      - : An array of zero or more {{domxref("XRInputSource")}} objects, each representing one input device which is newly available to use.
    - `removed`
      - : An array of zero or more {{domxref("XRInputSource")}} objects representing the input devices which are no longer available.
    - `session`
      - : The {{domxref("XRSession")}} to which the event applies.

### Return value

A new {{domxref("XRInputSourcesChangeEvent")}} object configured based upon
the input parameters provided.

## Examples

The following snippet of code creates a new `XRInputSourcesChangeEvent`
object indicating that a single new input source, described by an
{{domxref("XRInputSource")}} object named `newInputSource`, has been added to
the system.

```js
let iscEvent = new XRInputSourcesChangeEvent("inputsourceschange", {
  session: xrSession,
  added: [newInputSource],
  removed: [],
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
