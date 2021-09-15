---
title: MIDIPort.state
slug: Web/API/MIDIPort/state
tags:
  - API
  - Property
  - Reference
  - state
  - MIDIPort
browser-compat: api.MIDIPort.state
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`state`** read-only property of the {{domxref("MIDIPort")}} interface returns the state of the port.

## Syntax

```js
let state = MIDIPort.state;
```

### Value

A {{domxref("DOMString","string")}} containing the state of the port, one of:

- `"disconnected"`
  - : The device that this `MIDIPort` represents is disconnected from the system.
- `"connected"`
  - : The device that this `MIDIPort` represents is currently connected.

## Examples

The following example loops through all input ports and prints the state of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.state);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
