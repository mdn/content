---
title: MIDIOutput.send()
slug: Web/API/MIDIOutput/send
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - send
  - MIDIOutput
browser-compat: api.MIDIOutput.send
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`send()`** method of the {{domxref("MIDIOutput")}} interface queues messages for the corresponding MIDI port. The message can be sent immediately, or with an optional timestamp to delay sending.

## Syntax

```js
send(data)
send(data, timestamp)
```

### Parameters

- `data`
  - : A sequence of one or more [valid MIDI messages](https://www.midi.org/midi-articles/about-midi-part-3-midi-messages). Each entry represents a single byte of data.
- `timestamp` {{optional_inline}}
  - : A {{domxref("DOMHighResTimestamp")}} with the time in milliseconds, which is the delay before sending the message.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if `data` is not a valid sequence, or does not contain a valid MIDI message.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Thrown if `data` is a system exclusive message, and the {{domxref("MIDIAccess")}} did not enable exclusive access.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the port is disconnected.

## Examples

In the following example a middle C note is sent immediately, followed by a note off message one second later.

```js
function sendMiddleC(midiAccess, portID) {
  const noteOnMessage = [0x90, 60, 0x7f];    // note on middle C, full velocity
  const output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage);  //omitting the timestamp means send immediately.
  output.send([0x80, 60, 0x40], window.performance.now() + 1000.0); // timestamp = now + 1000ms.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
