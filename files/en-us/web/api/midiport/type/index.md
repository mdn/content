---
title: MIDIPort.type
slug: Web/API/MIDIPort/type
tags:
  - API
  - Property
  - Reference
  - type
  - MIDIPort
browser-compat: api.MIDIPort.type
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`type`** read-only property of the {{domxref("MIDIPort")}} interface returns the type of the port, indicating whether this is an input or output MIDI port.

## Syntax

```js
let type = MIDIPort.type;
```

### Value

A {{domxref("DOMString","string")}} containing the type of the port, one of:

- `"input"`
  - : The `MIDIPort` is an input port.
- `"output"`
  - : The `MIDIPort` is an output port.

## Examples

The following example loops through all input ports and prints the `type` of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.type); // should always be input
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
