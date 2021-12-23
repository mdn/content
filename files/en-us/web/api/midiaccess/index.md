---
title: MIDIAccess
slug: Web/API/MIDIAccess
tags:
  - API
  - Interface
  - Reference
  - Web MIDI API
browser-compat: api.MIDIAccess
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIAccess`** interface of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) provides methods for listing MIDI input and output devices, and obtaining access to those devices.

## Properties

- {{domxref("MIDIAccess.inputs")}} {{readonlyinline}}
  - : Returns an instance of {{domxref("MIDIInputMap")}} which provides access to any available MIDI input ports.
- {{domxref("MIDIAccess.outputs")}} {{readonlyinline}}
  - : Returns an instance of {{domxref("MIDIOutputMap")}} which provides access to any available MIDI output ports.
- {{domxref("MIDIAccess.sysexEnabled")}} {{readonlyinline}}
  - : A boolean attribute indicating whether system exclusive support is enabled on the current MIDIAccess instance.

### Event Handlers

- {{domxref("MIDIAccess.onstatechange")}}
  - : Called whenever a new MIDI port is added or an existing port changes state.

## Examples

The {{domxref("Navigator.requestMIDIAccess()")}} method returns a promise that resolves with a {{domxref("MIDIAccess")}} object. Information about the input and output ports is returned.

When a port changes state, information about that port is printed to the console.

```js
navigator.requestMIDIAccess()
  .then(function(access) {

     // Get lists of available MIDI controllers
     const inputs = access.inputs.values();
     const outputs = access.outputs.values();

     access.onstatechange = function(e) {

       // Print information about the (dis)connected MIDI controller
       console.log(e.port.name, e.port.manufacturer, e.port.state);
     };
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
