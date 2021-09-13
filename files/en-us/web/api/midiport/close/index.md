---
title: MIDIPort.close()
slug: Web/API/MIDIPort/close
tags:
  - API
  - Method
  - Reference
  - close
  - MIDIPort
browser-compat: api.MIDIPort.close
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`close()`** method of the {{domxref("MIDIPort")}} interface makes the access to the MIDI device connected to this `MIDIPort` unavailable.

If the port is successfully closed a new {{domxref("MIDICOnnectionEvent")}} is queued to the {{domxref("MIDIPort.onstatechange")}} and {{domxref("MIDIAccess.onstatechange")}} event handlers, and the {{domxref("MIDIPort.connection")}} property is changed to `"closed"`.

## Syntax

```js
MIDIPort.close();
```

### Parameters

None.

### Return value

Returns a {{jsxref("Promise")}} which resolves once the port has been closed.

## Examples

The following example shows an output port being closed.

```js
let output = midiAccess.outputs.get(portID);
output.close(); // closes the port
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
