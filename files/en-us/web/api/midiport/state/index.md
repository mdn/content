---
title: "MIDIPort: state property"
short-title: state
slug: Web/API/MIDIPort/state
page-type: web-api-instance-property
browser-compat: api.MIDIPort.state
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`state`** read-only property of the {{domxref("MIDIPort")}} interface returns the state of the port.

## Value

A string containing the state of the port, one of:

- `"disconnected"`
  - : The device that this `MIDIPort` represents is disconnected from the system.
- `"connected"`
  - : The device that this `MIDIPort` represents is currently connected.

## Examples

The following example loops through all input ports and prints the state of each to the console.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
