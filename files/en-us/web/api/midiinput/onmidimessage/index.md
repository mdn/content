---
title: MIDIInput.onmidimessage
slug: Web/API/MIDIInput/onmidimessage
tags:
  - API
  - Property
  - Reference
  - onmidimessage
  - MIDIInput
browser-compat: api.MIDIInput.onmidimessage
---
{{APIRef("Web MIDI API")}}{{securecontext_header}}

The **`onmidimessage`** {{event("Event_handlers", "event handler")}} of the {{domxref("MIDIInput")}} interface processes `midimessage` events.

The event fires when the MIDI port corresponding to this {{domxref("MIDIInput")}} finishes receiving one or more MIDI messages. An instance of {{domxref("MIDIMessageEvent")}} containing the message that was received is passed to this event handler.

## Syntax

```js
MIDIInput.onmidimessage = function;
MIDIInput.addEventListener('midimessage', function);
```

## Examples

In the following example `onmidimessage` events are listened for on all input ports. When a message is received the {{domxref("MIDIMessageEvent.data")}} property is printed to the console.

```js
inputs.forEach((input) => {
  input.onmidimessage = function(message) {
    console.log(message.data);
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
