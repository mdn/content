---
title: 'MIDIInput: midimessage event'
slug: Web/API/MIDIInput/midimessage_event
page-type: web-api-event
tags:
  - midimessage
  - API
  - Event
  - Reference
  - MIDIInput
browser-compat: api.MIDIInput.midimessage_event
---
{{APIRef("Web MIDI API")}}{{securecontext_header}}

The `midimessage` event of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) is fired when the MIDI port corresponding to this {{domxref("MIDIInput")}} finishes receiving one or more MIDI messages. An instance of {{domxref("MIDIMessageEvent")}} containing the message that was received is passed to the event handler.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('midimessage', (event) => { });

onmidimessage = (event) => { };
```

## Event type

An {{domxref("MIDIMessageEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("MIDIMessageEvent")}}

## Event properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("MIDIMessageEvent.data")}}
  - : A {{jsxref("Uint8Array")}} containing the data bytes of a single MIDI message. See the [MIDI specification](https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message) for more information on its form.

## Examples

In the following example `midimessage` events are listened for on all input ports. When a message is received the {{domxref("MIDIMessageEvent.data")}} property is printed to the console.

```js
inputs.forEach((input) => {
  input.onmidimessage = (message) => {
    console.log(message.data);
  }
})
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
