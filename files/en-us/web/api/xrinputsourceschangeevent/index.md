---
title: XRInputSourcesChangeEvent
slug: Web/API/XRInputSourcesChangeEvent
page-type: web-api-interface
browser-compat: api.XRInputSourcesChangeEvent
---

{{APIRef("WebXR Device API")}} {{SecureContext_Header}}

The WebXR Device API interface **`XRInputSourcesChangeEvent`** is used to represent the {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}} event sent to an {{domxref("XRSession")}} when the set of available WebXR input controllers changes.

{{InheritanceDiagram}}

## Constructor

- {{domxref("XRInputSourcesChangeEvent.XRInputSourcesChangeEvent", "XRInputSourcesChangeEvent()")}}
  - : Creates and returns a new `XRInputSourcesChangeEvent` object. The specified type must be `inputsourceschange`, which is the only event that uses this interface.

## Instance properties

- {{domxref("XRInputSourcesChangeEvent.added", "added")}} {{ReadOnlyInline}}
  - : An array of zero or more {{domxref("XRInputSource")}} objects, each representing an input device which has been newly connected or enabled for use.
- {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} {{ReadOnlyInline}}
  - : An array of zero or more {{domxref("XRInputSource")}} objects representing the input devices newly connected or enabled for use.
- {{domxref("XRInputSourcesChangeEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which this input source change event is being directed.

## Instance methods

_While `XRInputSourcesChangeEvent` defines no methods of its own, it inherits methods from its parent interface, {{domxref("Event")}}._

## Event types

- {{domxref("XRSession.inputsourceschange_event", "inputsourceschange")}}
  - : Delivered to the {{domxref("XRSession")}} when the set of input devices available to it changes.

## Examples

The following example shows how to set up an event handler which uses `inputsourceschange` events to detect newly-available pointing devices and to load their models in preparation to display them in the next animation frame.

```js
xrSession.addEventListener("inputsourceschange", onInputSourcesChange);

function onInputSourcesChange(event) {
  for (const input of event.added) {
    if (input.targetRayMode === "tracked-pointer") {
      loadControllerMesh(input);
    }
  }
}
```

You can also add a handler for `inputsourceschange` events by setting the `oninputsourceschange` event handler:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
