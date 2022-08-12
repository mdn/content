---
title: MIDIMessageEvent
slug: Web/API/MIDIMessageEvent
page-type: web-api-interface
tags:
  - API
  - Interface
  - MIDI
  - MIDIMessageEvent
  - Reference
  - Web MIDI API
browser-compat: api.MIDIMessageEvent
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIMessageEvent`** interface of the [Web MIDI API](/en-US/docs/Web/API/Web_MIDI_API) represents the event passed to the {{domxref("MIDIInput.midimessage_event","midimessage")}} event of the {{domxref("MIDIInput")}} interface. A `midimessage` event is fired every time a MIDI message is sent from a device represented by a {{domxref("MIDIInput")}}, for example when a MIDI keyboard key is pressed, a knob is tweaked, or a slider is moved.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MIDIMessageEvent.MIDIMessageEvent", "MIDIMessageEvent()")}}
  - : Creates a new `MIDIMessageEvent` object instance.

## Properties

_This interface also inherits properties from {{domxref("Event")}}._

- {{domxref("MIDIMessageEvent.data")}}
  - : A {{jsxref("Uint8Array")}} containing the data bytes of a single MIDI message. See the [MIDI specification](https://www.midi.org/specifications-old/item/table-1-summary-of-midi-message) for more information on its form.

## Methods

_This interface doesn't implement any specific methods, but inherits methods from {{domxref("Event")}}._

## Examples

The following example prints all MIDI messages to the console.

```js
navigator.requestMIDIAccess().then((midiAccess) => {
  Array.from(midiAccess.inputs).forEach((input) => {
    input[1].onmidimessage = (msg) => { console.log(msg); }
  })
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
