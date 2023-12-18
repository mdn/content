---
title: MIDIConnectionEvent
slug: Web/API/MIDIConnectionEvent
page-type: web-api-interface
browser-compat: api.MIDIConnectionEvent
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIConnectionEvent`** interface of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) is the event passed to the {{domxref("MIDIAccess.statechange_event","statechange")}} event of the {{domxref("MIDIAccess")}} interface and the {{domxref("MIDIPort.statechange_event","statechange")}} event of the {{domxref("MIDIPort")}} interface. This occurs any time a new port becomes available, or when a previously available port becomes unavailable. For example, this event is fired whenever a MIDI device is either plugged in to or unplugged from a computer.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MIDIConnectionEvent.MIDIConnectionEvent", "MIDIConnectionEvent()")}}
  - : Creates a new `MIDIConnectionEvent` object.

## Instance properties

- {{domxref("MIDIConnectionEvent.port")}} {{ReadOnlyInline}}
  - : Returns a reference to a {{domxref("MIDIPort")}} instance for a port that has been connected or disconnected.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. When a port changes state, a `MIDIConnectionEvent` is passed to {{domxref("MIDIAccess.statechange_event", "statechange")}} event. Information about the port can then be printed to the console.

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
