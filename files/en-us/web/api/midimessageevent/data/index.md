---
title: "MIDIMessageEvent: data property"
short-title: data
slug: Web/API/MIDIMessageEvent/data
page-type: web-api-instance-property
browser-compat: api.MIDIMessageEvent.data
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`data`** read-only property of the {{domxref("MIDIMessageEvent")}} interface returns the MIDI data bytes of a single MIDI message.

## Value

A {{jsxref("Uint8Array")}}.

## Examples

In the following example {{domxref("MIDIInput.midimessage_event", "midimessage")}} events are listened for on all input ports. When a message is received the value of `data` is printed to the console.

```js
inputs.forEach((input) => {
  input.onmidimessage = (message) => {
    console.log(message.data);
  };
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
