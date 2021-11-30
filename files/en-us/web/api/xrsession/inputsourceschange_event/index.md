---
title: 'XRSession: inputsourceschange event'
slug: Web/API/XRSession/inputsourceschange_event
tags:
  - API
  - AR
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
  - XRInputSources
  - XRSession
  - augmented
  - events
  - inputsourceschange
browser-compat: api.XRSession.inputsourceschange_event
---
{{APIRef("WebXR Device API")}}

The **`inputsourceschange`** event is sent to an {{domxref("XRSession")}} when the set of available WebXR input devices changes.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('inputsourceschange', () => { });

oninputsourceschange = event => { });
```

## Description

### Trigger

Triggered when the set of available WebXR input devices changes.

### Event type

An {{domxref("XRInputSourcesChangeEvent")}} which, in addition to the generic {{domxref("Event")}} class, includes the following properties:

- {{domxref("XRInputSourcesChangeEvent.added", "added")}} {{ReadOnlyInline}}
  - : An array of zero or more {{domxref("XRInputSource")}} objects, each representing an input device which has been recently connected or enabled.
- {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} {{ReadOnlyInline}}
  - : An array of zero or more {{domxref("XRInputSource")}} objects representing the input devices recently disconnected or disabled.
- {{domxref("XRInputSourcesChangeEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which this input source change event is being directed.

### Use cases

You can use this event to detect newly-available devices or when devices have become unavailable.

## Examples

The following example shows how to set up an event handler which uses `inputsourceschange` events to detect newly-available pointing devices and to load their models in preparation for displaying them in the next animation frame.

```js
xrSession.addEventListener("inputsourceschange", onInputSourcesChange);

function onInputSourcesChange(event) {
  for (let input of event.added) {
    if (input.targetRayMode == "tracked-pointer") {
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
