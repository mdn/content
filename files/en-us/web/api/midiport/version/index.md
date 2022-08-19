---
title: MIDIPort.version
slug: Web/API/MIDIPort/version
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - version
  - MIDIPort
browser-compat: api.MIDIPort.version
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`version`** read-only property of the {{domxref("MIDIPort")}} interface returns the version of the port.

## Value

A string containing the version of the port.

## Examples

The following example loops through all input ports and prints the version of each to the console.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.version);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
