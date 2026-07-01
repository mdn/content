---
title: "SpeechSynthesisErrorEvent: SpeechSynthesisErrorEvent() constructor"
short-title: SpeechSynthesisErrorEvent()
slug: Web/API/SpeechSynthesisErrorEvent/SpeechSynthesisErrorEvent
page-type: web-api-constructor
browser-compat: api.SpeechSynthesisErrorEvent.SpeechSynthesisErrorEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechSynthesisErrorEvent()`** constructor creates a new {{domxref("SpeechSynthesisErrorEvent")}} object.

> [!NOTE]
> A web developer doesn't typically need to call this constructor, as the browser creates these objects itself when firing events.

## Syntax

```js-nolint
new SpeechSynthesisErrorEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `error`.
- `options`
  - : An object that, _in addition to the properties defined in {{domxref("SpeechSynthesisEvent/SpeechSynthesisEvent", "SpeechSynthesisEvent()")}}_, has the following properties:
    - `error`
      - : A string containing the error reason. Possible values are:
        - `canceled`
          - : A {{domxref("SpeechSynthesis.cancel")}} method call caused the {{domxref("SpeechSynthesisUtterance")}} to be removed from the queue before speech started.
        - `interrupted`
          - : A {{domxref("SpeechSynthesis.cancel")}} method call caused the {{domxref("SpeechSynthesisUtterance")}} to be interrupted after speech had started but before it completed.
        - `audio-busy`
          - : The operation couldn't be completed at this time because the user-agent couldn't access the audio output device (for example, the user may need to correct this by closing another application).
        - `audio-hardware`
          - : The operation couldn't be completed at this time because the user-agent couldn't identify an audio output device (for example, the user may need to connect a speaker or configure system settings.)
        - `network`
          - : The operation couldn't be completed at this time because some required network communication failed.
        - `synthesis-unavailable`
          - : The operation couldn't be completed at this time because no synthesis engine was available (for example, the user may need to install or configure a synthesis engine).
        - `synthesis-failed`
          - : The operation failed because the synthesis engine raised an error.
        - `language-unavailable`
          - : No appropriate voice was available for the language set in {{domxref("SpeechSynthesisUtterance.lang")}}. You can use the [`window.speechSynthesis.getVoices()`](/en-US/docs/Web/API/SpeechSynthesis/getVoices) method to determine which voices and languages are supported in the user's browser.
        - `voice-unavailable`
          - : The voice set in {{domxref("SpeechSynthesisUtterance.voice")}} was not available.
        - `text-too-long`
          - : The contents of the {{domxref("SpeechSynthesisUtterance.text")}} attribute was too long to synthesize.
        - `invalid-argument`
          - : The content of the {{domxref("SpeechSynthesisUtterance.rate")}}, {{domxref("SpeechSynthesisUtterance.pitch")}} or {{domxref("SpeechSynthesisUtterance.volume")}} property was not valid.
        - `not-allowed`
          - : The operation's start was not allowed.

### Return value

A new {{domxref("SpeechSynthesisErrorEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SpeechSynthesisEvent")}}
