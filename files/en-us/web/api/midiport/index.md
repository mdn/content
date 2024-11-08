---
title: MIDIPort
slug: Web/API/MIDIPort
page-type: web-api-interface
browser-compat: api.MIDIPort
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIPort`** interface of the {{domxref('Web MIDI API','','',' ')}} represents a MIDI input or output port.

A `MIDIPort` instance is created when a new MIDI device is connected. Therefore it has no constructor.

{{InheritanceDiagram}}

## Instance properties

- {{domxref("MIDIPort.id")}} {{ReadOnlyInline}}
  - : Returns a string containing the unique ID of the port.
- {{domxref("MIDIPort.manufacturer")}} {{ReadOnlyInline}}
  - : Returns a string containing the manufacturer of the port.
- {{domxref("MIDIPort.name")}} {{ReadOnlyInline}}
  - : Returns a string containing the system name of the port.
- {{domxref("MIDIPort.type")}} {{ReadOnlyInline}}

  - : Returns a string containing the type of the port, one of:

    - `"input"`
      - : The `MIDIPort` is an input port.
    - `"output"`
      - : The `MIDIPort` is an output port.

- {{domxref("MIDIPort.version")}} {{ReadOnlyInline}}
  - : Returns a string containing the version of the port.
- {{domxref("MIDIPort.state")}} {{ReadOnlyInline}}

  - : Returns a string containing the state of the port, one of:

    - `"disconnected"`
      - : The device that this `MIDIPort` represents is disconnected from the system.
    - `"connected"`
      - : The device that this `MIDIPort` represents is currently connected.

- {{domxref("MIDIPort.connection")}} {{ReadOnlyInline}}

  - : Returns a string containing the connection state of the port, one of:

    - `"open"`
      - : The device that this `MIDIPort` represents has been opened and is available.
    - `"closed"`
      - : The device that this `MIDIPort` represents has not been opened, or has been closed.
    - `"pending"`
      - : The device that this `MIDIPort` represents has been opened but has subsequently disconnected.

## Instance methods

_This interface also inherits methods from {{domxref("EventTarget")}}._

- {{domxref("MIDIPort.open()")}}
  - : Makes the MIDI device connected to this `MIDIPort` explicitly available, and returns a {{jsxref("Promise")}} which resolves once access to the port has been successful.
- {{domxref("MIDIPort.close()")}}
  - : Makes the MIDI device connected to this `MIDIPort` unavailable, changing the {{domxref("MIDIPort.state","state")}} from `"open"` to `"closed"`. This returns a {{jsxref("Promise")}} which resolves once the port has been closed.

## Events

- {{domxref("MIDIPort.statechange_event", "statechange")}}
  - : Called when an existing port changes its state or connection.

## Examples

### List ports and their information

The following example lists input and output ports, and displays information about them using properties of `MIDIPort`.

```js
function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}'] id:'${input.id}' manufacturer: '${input.manufacturer}' name: '${input.name}' version: '${input.version}'`,
    );
  }

  for (const entry of midiAccess.outputs) {
    const output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id: '${output.id}' manufacturer: '${output.manufacturer}' name: '${output.name}' version: '${output.version}'`,
    );
  }
}
```

### Add available ports to a select list

The following example takes the list of input ports and adds them to a select list, in order that a user can choose the device they want to use.

```js
inputs.forEach((port, key) => {
  const opt = document.createElement("option");
  opt.text = port.name;
  document.getElementById("port-selector").add(opt);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
