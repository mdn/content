---
title: XRInputSourcesChangeEvent.added
slug: Web/API/XRInputSourcesChangeEvent/added
tags:
  - API
  - AR
  - Input Sources
  - Inputs
  - Mixed
  - Property
  - Read-only
  - Reality
  - Reference
  - VR
  - Virtual
  - XR
  - XRInputSource
  - XRInputSourcesChangeEvent
  - augmented
browser-compat: api.XRInputSourcesChangeEvent.added
---
{{APIRef("WebXR Device API")}}

The read-only {{domxref("XRInputSourcesChangeEvent")}}
property {{domxref("XRInputSourcesChangeEvent.added", "added")}} is a list of zero or
more input sources, each identified using an {{domxref("XRInputSource")}} object,
which have been newly made available for use.

## Syntax

```js
let addedInputs = xrInputSourcesChangeEvent.added;
```

### Value

An {{jsxref("Array")}} of zero or more {{domxref("XRInputSource")}} objects, each
representing one input device added to the XR system.

## Examples

The example below creates a handler for the
{{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} event that
processes the lists of added and removed from the WebXR system. It looks for new and
removed devices whose {{domxref("XRInputSource.targetRayMode", "targetRayMode")}} is
`tracked-pointer`.

```js
xrSession.oninputsourcescchange = event => {
  for (let input of event.added) {
    if (input.targetRayMode == "tracked-pointer") {
      addedPointerDevice(input);
    }
  }
  for (let input of event.removed) {
    if (input.targetRayMode == "tracked-pointer") {
      removedPointerDevice(input);
    }
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
