---
title: "MIDIPort: id property"
short-title: id
slug: Web/API/MIDIPort/id
page-type: web-api-instance-property
browser-compat: api.MIDIPort.id
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`id`** read-only property of the {{domxref("MIDIPort")}} interface returns the unique ID of the port.

## Value

A string containing an ID for the port.

## Examples

The following example loops through all input ports and prints the id of each to the console.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.id);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
