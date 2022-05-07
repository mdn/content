---
title: MIDIMessageEvent.MIDIMessageEvent()
slug: Web/API/MIDIMessageEvent/MIDIMessageEvent
tags:
  - API
  - Constructor
  - Reference
  - MIDIMessageEvent
browser-compat: api.MIDIMessageEvent.MIDIMessageEvent
---
{{securecontext_header}}{{APIRef("Web MIDI API")}}

The **`MIDIMessageEvent()`** constructor creates a new {{domxref("MIDIMessageEvent")}} object. Typically this constructor is not used as events are created when a {{domxref("MIDIInput")}} finishes receiving one or more MIDI messages.

## Syntax

```js
new MIDIMessageEvent(type);
new MIDIMessageEvent(type, MIDIMessageEventInit);
```

### Parameters

- `type`
  - : Will always be `'MIDIMessageEvent'`.
- `MIDIMessageEventInit`{{optional_inline}}

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
        outside of a shadow root (see {{domxref("Event.composed")}} for details). The
        default is `false`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
