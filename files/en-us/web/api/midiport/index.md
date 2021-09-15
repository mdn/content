---
title: MIDIPort
slug: Web/API/MIDIPort
tags:
  - API
  - Interface
  - Reference
  - MIDIPort
browser-compat: api.MIDIPort
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`MIDIPort`** interface of the {{domxref('Web MIDI API','','',' ')}} represents a MIDI input or output port.

A `MIDIPort` instance is created when a new MIDI device is connected. Therefore it has no constructor.

## Properties

- {{domxref("MIDIPort.id")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMString","string")}} containing the unique ID of the port.
- {{domxref("MIDIPort.manufacturer")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMString","string")}} containing the manufacturer of the port.
- {{domxref("MIDIPort.name")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMString","string")}} containing the system name of the port.
- {{domxref("MIDIPort.type")}}{{ReadOnlyInline}}

  - : Returns a {{domxref("DOMString","string")}} containing the type of the port, one of:

    - `"input"`
      - : The `MIDIPort` is an input port.
    - `"output"`
      - : The `MIDIPort` is an output port.

- {{domxref("MIDIPort.version")}}{{ReadOnlyInline}}
  - : Returns a {{domxref("DOMString","string")}} containing the version of the port.
- {{domxref("MIDIPort.state")}}{{ReadOnlyInline}}

  - : Returns a {{domxref("DOMString","string")}} containing the state of the port, one of:

    - `"disconnected"`
      - : The device that this `MIDIPort` represents is disconnected from the system.
    - `"connected"`
      - : The device that this `MIDIPort` represents is currently connected.

- {{domxref("MIDIPort.connection")}}{{ReadOnlyInline}}

  - : Returns a {{domxref("DOMString","string")}} containing the connection state of the port, one of:

    - `"open"`
      - : The device that this `MIDIPort` represents has been opened and is available.
    - `"closed"`
      - : The device that this `MIDIPort` represents has not been opened, or has been closed.
    - `"pending"`
      - : The device that this `MIDIPort` represents has been opened but has subsequently disconnected .

### Event handlers

- {{domxref("MIDIPort.onstatechange")}}
  - : Called when an existing port changes its state or connection.

## Methods

_This interface also inherits methods from {{domxref("EventTarget")}}._

- {{domxref("MIDIPort.open()")}}
  - : Makes the MIDI device connected to this `MIDIPort` explicitly available, and returns a {{jsxref("Promise")}} which resolves once access to the port has been successful.
- {{domxref("MIDIPort.close()")}}
  - : Makes the MIDI device connected to this `MIDIPort` unavailable, changing the {{domxref("MIDIPort.state","state")}} from `"open"` to `"closed"`. This returns a {{jsxref("Promise")}} which resolves once the port has been closed.

## Examples

### List ports and their information

The following example lists input and output ports, and displays information about them using properties of `MIDIPort`.

```js
function listInputsAndOutputs( midiAccess ) {
  for (var entry of midiAccess.inputs) {
    var input = entry[1];
    console.log( "Input port [type:'" + input.type + "'] id:'" + input.id +
      "' manufacturer:'" + input.manufacturer + "' name:'" + input.name +
      "' version:'" + input.version + "'" );
  }

  for (var entry of midiAccess.outputs) {
    var output = entry[1];
    console.log( "Output port [type:'" + output.type + "'] id:'" + output.id +
      "' manufacturer:'" + output.manufacturer + "' name:'" + output.name +
      "' version:'" + output.version + "'" );
  }
}
```

### Add available ports to a select list

The following example takes the list of input ports and adds them to a select list, in order that a user can choose the device they want to use.

```js
inputs.forEach( function( port, key ) {
  var opt = document.createElement("option");
  opt.text = port.name;
  document.getElementById("inputportselector").add(opt);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
