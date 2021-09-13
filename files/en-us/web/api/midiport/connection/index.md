---
title: MIDIPort.connection
slug: Web/API/MIDIPort/connection
tags:
  - API
  - Property
  - Reference
  - connection
  - MIDIPort
browser-compat: api.MIDIPort.connection
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`connection`** property of the {{domxref("MIDIPort")}} interface returns the connection state of the port.

## Syntax

```js
let connection = MIDIPort.connection;
```

### Value

Returns a {{domxref("DOMString","string")}} containing the connection state of the port, one of:

- `"open"`
  - : The device that this `MIDIPort` represents has been opened and is available.
- `"closed"`
  - : The device that this `MIDIPort` represents has not been opened, or has been closed.
- `"pending"`
  - : The device that this `MIDIPort` represents has been opened but has subsequently disconnected .

## Examples

The following example loops through all input ports and prints the connection status of each to the console.

```js
for (let entry of midiAccess.inputs) {
  let input = entry[1];
  console.log(input.connection);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
