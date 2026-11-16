---
title: "MIDIPort: statechange event"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
page-type: web-api-event
browser-compat: api.MIDIPort.statechange_event
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`statechange`** event of the {{domxref("MIDIPort")}} interface is fired when a port changes from open to closed, or closed to open.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("statechange", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onstatechange = (event) => { }
```

## Event type

A {{domxref("MIDIConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Example

In the following example the current {{domxref("MIDIPort.state")}} is logged each time it changes.

```js
port.onstatechange = (event) => {
  console.log(port.state);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
