---
title: "SpeechSynthesisEvent: SpeechSynthesisEvent() constructor"
short-title: SpeechSynthesisEvent()
slug: Web/API/SpeechSynthesisEvent/SpeechSynthesisEvent
page-type: web-api-constructor
browser-compat: api.SpeechSynthesisEvent.SpeechSynthesisEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechSynthesisEvent()`** constructor creates a new {{domxref("SpeechSynthesisEvent")}} object.

> **Note:** A web developer doesn't typically need to call this constructor, as the browser creates these objects itself when firing events.

## Syntax

```js-nolint
new SpeechSynthesisEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `start`, `end`, `error`, `pause`, `resume`, `mark`, or `boundary`.
- `options`
  - : An object that, _in addition to the properties defined in {{domxref("Event/Event", "Event()")}}_, has the following properties:
    - `utterance`
      - : A {{domxref("SpeechSynthesisUtterance")}} object, which is the speech request the event was triggered on.
    - `charIndex` {{Optional_inline}}
      - : The index position of the character in {{domxref("SpeechSynthesisUtterance.text")}} that was being spoken when the event was triggered. Its default value is `0`.
    - `charLength` {{Optional_inline}}
      - : The number of characters left to be spoken after the character at the {{DOMxRef("SpeechSynthesisEvent.charIndex", "charIndex")}} position. Its default value is `0`.
    - `elapsedTime` {{Optional_inline}}
      - : The elapsed time in seconds, after the {{domxref("SpeechSynthesisUtterance.text")}} started being spoken, at which the event was triggered. Its default value is `0`.
    - `name` {{Optional_inline}}
      - : The name associated with certain types of events: the name of the [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) marker reached in the case of a {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} event, or the type of boundary reached in the case of a {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} event. It defaults to the empty string (`""`).

### Return value

A new {{domxref("SpeechSynthesisEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SpeechSynthesisErrorEvent")}}
