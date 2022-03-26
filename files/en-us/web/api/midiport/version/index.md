---
title: MIDIPort.version
slug: Web/API/MIDIPort/version
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

A {{domxref("DOMString","string")}} containing the version of the port.

## Examples

The following example loops through all input ports and prints the version of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.version);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
