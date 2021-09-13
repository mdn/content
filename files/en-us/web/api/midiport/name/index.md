---
title: MIDIPort.name
slug: Web/API/MIDIPort/name
tags:
  - API
  - Property
  - Reference
  - name
  - MIDIPort
browser-compat: api.MIDIPort.name
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`name`** read-only property of the {{domxref("MIDIPort")}} interface returns the system name of the port.

## Syntax

```js
let aname = MIDIPort.name;
```

### Value

A {{domxref("DOMString","string")}} containing the system name of the port.

## Examples

The following example loops through all input ports and prints the name of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.name);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
