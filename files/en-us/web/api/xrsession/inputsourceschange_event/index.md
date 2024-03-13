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

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("inputsourceschange", (event) => {});

oninputsourceschange = (event) => {};
```

## Event type

An {{domxref("XRInputSourcesChangeEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("XRInputSourcesChangeEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("XRInputSourcesChangeEvent.added", "added")}} {{ReadOnlyInline}}
  - : An array of zero or more {{domxref("XRInputSource")}} objects, each representing an input device which has been recently connected or enabled.
- {{domxref("XRInputSourcesChangeEvent.removed", "removed")}} {{ReadOnlyInline}}
  - : An array of zero or more {{domxref("XRInputSource")}} objects representing the input devices recently disconnected or disabled.
- {{domxref("XRInputSourcesChangeEvent.session", "session")}} {{ReadOnlyInline}}
  - : The {{domxref("XRSession")}} to which this input source change event is being directed.

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

You can also add a handler for `inputsourceschange` events by setting the `oninputsourceschange` event handler:

```js
xrSession.oninputsourceschange = onInputSourcesChange;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
