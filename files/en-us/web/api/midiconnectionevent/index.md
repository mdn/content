---
title: MIDIConnectionEvent
slug: Web/API/MIDIConnectionEvent
tags:
  - API
  - Draft
  - Interface
  - MIDI
  - MIDIConnectionEvent
  - Reference
  - Web MIDI API
browser-compat: api.MIDIConnectionEvent
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIConnectionEvent`** interface of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) is the event passed to the {{domxref("MIDIAccess.onstatechange","onstatechange")}} event handler of the {{domxref("MIDIAccess")}} interface and the {{domxref("MIDIPort.onstatechange","onstatechange")}} event of the {{domxref("MIDIPort")}} interface. This occurs any time a new port becomes available, or when a previously available port becomes unavailable. For example, this event is fired whenever a MIDI device is either plugged in to or unplugged from a computer.

## Constructor

- {{domxref("MIDIConnectionEvent.MIDIConnectionEvent")}}
  - : Creates a new `MIDIConnectionEvent` object.

## Properties

- {{domxref("MIDIConnectionEvent.port")}}{{readonlyinline}}
  - : Returns a reference to a {{domxref("MIDIPort")}} instance for a port that has been connected or disconnected."

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. When a port changes state, a `MIDIConnectionEvent` is passed to {{domxref("MIDIAccess.onstatechange")}}, information about the port can then be printed to the console.

```js
navigator.requestMIDIAccess()
  .then(function(access) {

     access.onstatechange = function(e) {
       console.log(e.port.name, e.port.manufacturer, e.port.state);
     };
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
