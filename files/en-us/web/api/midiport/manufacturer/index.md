---
title: MIDIPort.manufacturer
slug: Web/API/MIDIPort/manufacturer
tags:
  - API
  - Property
  - Reference
  - manufacturer
  - MIDIPort
browser-compat: api.MIDIPort.manufacturer
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`manufacturer`** read-only property of the {{domxref("MIDIPort")}} interface returns the manufacturer of the port.

## Syntax

```js
let manufacturer = MIDIPort.manufacturer;
```

### Value

A {{domxref("DOMString","string")}} containing the manufacturer of the port.

## Examples

The following example loops through all input ports and prints the manufacturer of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.manufacturer);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
