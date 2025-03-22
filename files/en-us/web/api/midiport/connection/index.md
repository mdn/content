---
title: "MIDIPort: connection property"
short-title: connection
slug: Web/API/MIDIPort/connection
page-type: web-api-instance-property
browser-compat: api.MIDIPort.connection
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`connection`** read-only property of the {{domxref("MIDIPort")}} interface returns the connection state of the port.

## Value

Returns a string containing the connection state of the port, one of:

- `"open"`
  - : The device that this `MIDIPort` represents has been opened and is available.
- `"closed"`
  - : The device that this `MIDIPort` represents has not been opened, or has been closed.
- `"pending"`
  - : The device that this `MIDIPort` represents has been opened but has subsequently disconnected.

## Examples

The following example loops through all input ports and prints the connection status of each to the console.

```js
for (const entry of midiAccess.inputs) {
  const input = entry[1];
  console.log(input.connection);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
