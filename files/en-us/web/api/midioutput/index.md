---
title: MIDIOutput
slug: Web/API/MIDIOutput
tags:
  - API
  - Interface
  - Reference
  - MIDIOutput
browser-compat: api.MIDIOutput
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIOutput`** interface of the {{domxref('Web MIDI API','','',' ')}} provides methods to add messages to the queue of an output device, and to clear the queue of messages.

## Properties

_This interface doesn't implement any specific properties, but inherits properties from {{domxref("MIDIPort")}}._

## Methods

_This interface also inherits methods from {{domxref("MIDIPort")}}._

- {{domxref("MIDIoutput.send()")}}
  - : Queues a message to be sent to the MIDI port.
- {{domxref("MIDIOutput.clear()")}}
  - : Clears any pending send data from the queue.

## Examples

The following example sends a middle C immediately on MIDI channel 1.

```js
function sendMiddleC( midiAccess, portID ) {
  var noteOnMessage = [0x90, 60, 0x7f];    // note on, middle C, full velocity
  var output = midiAccess.outputs.get(portID);
  output.send(noteOnMessage); // sends the message.
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
