---
title: MIDIPort.id
slug: Web/API/MIDIPort/id
tags:
  - API
  - Property
  - Reference
  - id
  - MIDIPort
browser-compat: api.MIDIPort.id
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`id`** read-only property of the {{domxref("MIDIPort")}} interface returns the unique ID of the port.

## Syntax

```js
let id = MIDIPort.id;
```

### Value

A {{domxref("DOMString","string")}} containing an ID for the port.

## Examples

The following example loops through all input ports and prints the id of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.id);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
