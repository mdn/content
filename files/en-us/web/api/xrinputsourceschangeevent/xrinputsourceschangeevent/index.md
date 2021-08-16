---
title: XRInputSourcesChangeEvent()
slug: Web/API/XRInputSourcesChangeEvent/XRInputSourcesChangeEvent
tags:
  - API
  - AR
  - Change
  - Constructor
  - Input Sources
  - Inputs
  - Mixed
  - Reality
  - Reference
  - VR
  - Virtual
  - WebXR
  - WebXR API
  - WebXR Device API
  - XR
  - XRInputSourcesChangeEvent
  - augmented
browser-compat: api.XRInputSourcesChangeEvent.XRInputSourcesChangeEvent
---
{{APIRef("WebXR Device API")}}

The **`XRInputSourcesChangeEvent()`**
constructor creates and returns a new {{domxref("XRInputSourcesChangeEvent")}} object,
representing an update to the list of available [WebXR](/en-US/docs/Web/API/WebXR_Device_API) input devices. You
won't typically call this constructor yourself, as these events are created and sent to
you by the WebXR system.

## Syntax

```js
newInputSourcesChangeEvent = new XRInputSourcesChangeEvent(type, eventInitDict);
```

### Parameters

- `type`
  - : A string indicating the type of event which has occurred. This
    string must always be `inputsourceschange`.
- `eventInitDict`

  - : An object that provides options to configure the event. It may contain the following properties:

    - `added`: An array of zero or more {{domxref("XRInputSource")}} objects, each representing one input device which is newly available to use.
    - `removed`: An array of zero or more {{domxref("XRInputSource")}} objects representing the input devices which are no longer available.
    - `session`: The {{domxref("XRSession")}} to which the event applies.

### Return value

A newly-created {{domxref("XRInputSourcesChangeEvent")}} object configured based upon
the input parameters provided.

## Event types

{{page("/en-US/docs/Web/API/XRInputSourcesChangeEvent", "Event types")}}

## Example

The following snippet of code creates a new `XRInputSourcesChangeEvent`
object indicating that a single new input source, described by an
{{domxref("XRInputSource")}} object named `newInputSource`, has been added to
the system.

```js
let iscEvent = new XRInputSourcesChangeEvent("inputsourceschange", { session: xrSession,
                           added: [newInputSource], removed: [] });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
