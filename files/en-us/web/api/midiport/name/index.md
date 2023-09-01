---
title: "MIDIPort: name property"
short-title: name
slug: Web/API/MIDIPort/name
page-type: web-api-instance-property
browser-compat: api.MIDIPort.name
---

{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`name`** read-only property of the {{domxref("MIDIPort")}} interface returns the system name of the port.

## Value

A string containing the system name of the port.

## Examples

The following example loops through all input ports and prints the name of each to the console.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.name);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
