---
title: "MIDIMessageEvent: MIDIMessageEvent() constructor"
short-title: MIDIMessageEvent()
slug: Web/API/MIDIMessageEvent/MIDIMessageEvent
page-type: web-api-constructor
browser-compat: api.MIDIMessageEvent.MIDIMessageEvent
---

{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIMessageEvent()`** constructor creates a new {{domxref("MIDIMessageEvent")}} object. Typically this constructor is not used as events are created when a {{domxref("MIDIInput")}} finishes receiving one or more MIDI messages.

## Syntax

```js-nolint
new MIDIMessageEvent(type)
new MIDIMessageEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers always set it to `MIDIMessageEvent`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can have the following properties:
    - `data`
      - : A {{jsxref("Uint8Array")}} instance containing the data bytes of the MIDI message.

### Return value

A new {{domxref("MIDIMessageEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
