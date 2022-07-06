---
title: MIDIPort.open()
slug: Web/API/MIDIPort/open
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - open
  - MIDIPort
browser-compat: api.MIDIPort.open
---
{{securecontext_header}}{{DefaultAPISidebar("Web MIDI API")}}

The **`open()`** method of the {{domxref("MIDIPort")}} interface makes the MIDI device connected to this `MIDIPort` explicitly available.

If the port is successfully opened a new {{domxref("MIDIConnectionEvent")}} is queued to the {{domxref("MIDIPort.onstatechange")}} and {{domxref("MIDIAccess.onstatechange")}} event handlers, and the {{domxref("MIDIPort.connection")}} property is changed to `"open"`.

If the port is already open when this method is called, then the promise will resolve successfully.

## Syntax

```js
open()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} which resolves once access to the port has been successfully obtained.

### Exceptions

- `InvalidAccessError` {{domxref("DOMException")}}
  - : The promise is rejected with this error if the port is unavailable and cannot be opened.

## Examples

The following example shows an output port being opened.

```js
const output = midiAccess.outputs.get(portID);
output.open(); // opens the port
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
