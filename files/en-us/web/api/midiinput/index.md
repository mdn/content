---
title: MIDIInput
slug: Web/API/MIDIInput
page-type: web-api-interface
tags:
  - API
  - Draft
  - Interface
  - MIDIInput
  - NeedsExample
  - Reference
  - Web MIDI API
browser-compat: api.MIDIInput
---
{{APIRef("Web MIDI API")}}{{securecontext_header}}

The **`MIDIInput`** interface of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) receives messages from a MIDI input port.

{{InheritanceDiagram}}

## Properties

_This interface doesn't implement any specific properties, but inherits properties from {{domxref("MIDIPort")}}._

## Methods

_This interface doesn't implement any specific methods, but inherits methods from {{domxref("MIDIPort")}}._

### Events

- {{domxref("MIDIInput.midimessage_event", "midimessage")}}
  - : Fired when the current port receives a MIDI message.

## Examples

In the following example the name of each `MIDIInput` is printed to the console. Then, `midimessage` events are listened for on all input ports. When a message is received the {{domxref("MIDIMessageEvent.data")}} property is printed to the console.

```js
inputs.forEach((input) => {
  console.log(input.name); /* inherited property from MIDIPort */
  input.onmidimessage = (message) => {
    console.log(message.data);
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
