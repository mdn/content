---
title: MIDIConnectionEvent()
slug: Web/API/MIDIConnectionEvent/MIDIConnectionEvent
page-type: web-api-constructor
tags:
  - API
  - Constructor
  - Reference
  - MIDIConnectionEvent
browser-compat: api.MIDIConnectionEvent.MIDIConnectionEvent
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIConnectionEvent()`** constructor creates a new {{domxref("MIDIConnectionEvent")}} object. Typically this constructor is not used as events are created when a new port becomes available, and the object is passed to the {{domxref("MIDIAccess.statechange_event", "statechange")}} event.

## Syntax

```js
new MIDIConnectionEvent(type)
new MIDIConnectionEvent(type, midiConnectionEventInit)
```

### Parameters

- `type`
  - : A string with one of `"connect"` or `"disconnect"`.
- `midiConnectionEventInit` {{optional_inline}}

  - : A dictionary including the following fields:

    - `port`
      - : The {{domxref("MIDIPort")}} instance representing the port that has connected or disconnected.
    - `bubbles` {{optional_inline}}
      - : A boolean value indicating whether the event bubbles. The default is
        `false`.
    - `cancelable` {{optional_inline}}
      - : A boolean value indicating whether the event can be cancelled. The
        default is `false`.
    - `composed` {{optional_inline}}
      - : A boolean value indicating whether the event will trigger listeners
        outside of a shadow root (see {{domxref("Event.composed")}} for more details). The
        default is `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
