---
title: "MIDIConnectionEvent: port property"
short-title: port
slug: Web/API/MIDIConnectionEvent/port
page-type: web-api-instance-property
browser-compat: api.MIDIConnectionEvent.port
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`port`** read-only property of the {{domxref("MIDIConnectionEvent")}} interface returns the port that has been disconnected or connected.

## Value

A {{domxref("MIDIPort")}} object.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. When a port changes state, a `MIDIConnectionEvent` is passed to the {{domxref("MIDIAccess.statechange_event","statechange")}} event. Information about the port can then be printed to the console.

```js
navigator.requestMIDIAccess().then((access) => {
  access.onstatechange = (event) => {
    console.log(event.port.name, event.port.manufacturer, event.port.state);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
