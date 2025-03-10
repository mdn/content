---
title: "XRInputSourcesChangeEvent: added property"
short-title: added
slug: Web/API/XRInputSourcesChangeEvent/added
page-type: web-api-instance-property
browser-compat: api.XRInputSourcesChangeEvent.added
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

The read-only {{domxref("XRInputSourcesChangeEvent")}}
property `added` is a list of zero or
more input sources, each identified using an {{domxref("XRInputSource")}} object,
which have been newly made available for use.

## Value

An {{jsxref("Array")}} of zero or more {{domxref("XRInputSource")}} objects, each
representing one input device added to the XR system.

## Examples

The example below creates a handler for the
{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} event that
processes the lists of added and removed from the WebXR system. It looks for new and
removed devices whose {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} is
`tracked-pointer`.

```js
xrSession.oninputsourcescchange = (event) => {
  for (const input of event.added) {
    if (input.targetRayMode === "tracked-pointer") {
      addedPointerDevice(input);
    }
  }
  for (const input of event.removed) {
    if (input.targetRayMode === "tracked-pointer") {
      removedPointerDevice(input);
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
