---
title: "MIDIPort: statechange event"
short-title: statechange
slug: Web/API/MIDIPort/statechange_event
page-type: web-api-event
browser-compat: api.MIDIPort.statechange_event
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`statechange`** event of the {{domxref("MIDIPort")}} interface is fired when a port changes from open to closed, or closed to open.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("statechange", (event) => {});

onstatechange = (event) => {};
```

## Event type

A {{domxref("MIDIConnectionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MIDIConnectionEvent")}}

## Event properties

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : Returns a reference to a {{domxref("MIDIPort")}} instance for a port that has been connected or disconnected.

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
