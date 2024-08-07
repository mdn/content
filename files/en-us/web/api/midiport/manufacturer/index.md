---
title: "MIDIPort: manufacturer property"
short-title: manufacturer
slug: Web/API/MIDIPort/manufacturer
page-type: web-api-instance-property
browser-compat: api.MIDIPort.manufacturer
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`manufacturer`** read-only property of the {{domxref("MIDIPort")}} interface returns the manufacturer of the port.

## Value

A string containing the manufacturer of the port.

## Examples

The following example loops through all input ports and prints the manufacturer of each to the console.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.manufacturer);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
