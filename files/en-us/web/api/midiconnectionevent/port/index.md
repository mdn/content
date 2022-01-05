---
title: MIDIConnectionEvent.port
slug: Web/API/MIDIConnectionEvent/port
tags:
  - API
  - Property
  - Reference
  - port
  - MIDIConnectionEvent
browser-compat: api.MIDIConnectionEvent.port
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`port`** read-only property of the {{domxref("MIDIConnectionEvent")}} interface returns the port that has been disconnected or connected.

## Syntax

```js
let port = MIDIConnectionEvent.port;
```

### Value

A {{domxref("MIDIPort")}} object.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. When a port changes state, a `MIDIConnectionEvent` is passed to {{domxref("MIDIAccess.onstatechange")}}. Information about the port can then be printed to the console.

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
