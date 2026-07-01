---
title: SpeechRecognitionEvent
slug: Web/API/SpeechRecognitionEvent
page-type: web-api-interface
browser-compat: api.SpeechRecognitionEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents the event object for the {{domxref("SpeechRecognition.result_event", "result")}} and {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} events, and contains all the data associated with an interim or final speech recognition result.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SpeechRecognitionEvent.SpeechRecognitionEvent", "SpeechRecognitionEvent()")}}
  - : Creates a new `SpeechRecognitionEvent` object.

## Instance properties

_`SpeechRecognitionEvent` also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : Returns the lowest index value result in the {{domxref("SpeechRecognitionResultList")}} "array" that has actually changed.
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechRecognitionResultList")}} object representing all the speech recognition results for the current session.

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
