---
title: "XRSession: inputsourceschange event"
short-title: inputsourceschange
slug: Web/API/XRSession/inputsourceschange_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.XRSession.inputsourceschange_event
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

The **`inputsourceschange`** event is sent to an {{domxref("XRSession")}} when the set of available WebXR input devices changes.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("inputsourceschange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
oninputsourceschange = (event) => { }
```

## Event type

An {{domxref("XRInputSourcesChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourcesChangeEvent")}}

## Description

### Trigger

Triggered when the set of available WebXR input devices changes.

### Use cases

You can use this event to detect newly-available devices or when devices have become unavailable.

## Examples

The following example shows how to set up an event handler which uses `inputsourceschange` events to detect newly-available pointing devices and to load their models in preparation for displaying them in the next animation frame.

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

You can also add a handler for `inputsourceschange` events by setting the `oninputsourceschange` event handler (but note that this replaces other event listeners added using `oninputsourceschange`, if any):

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
