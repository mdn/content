---
title: SpeechRecognitionEvent
slug: Web/API/SpeechRecognitionEvent
page-type: web-api-interface
browser-compat: api.SpeechRecognitionEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents the event object for the {{domxref("SpeechRecognition.result_event", "result")}} and {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} events, and contains all the data associated with an interim or final speech recognition result.

{{InheritanceDiagram}}

## Instance properties

_`SpeechRecognitionEvent` also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns an Extensible MultiModal Annotation markup language (EMMA) — XML — representation of the result.
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Returns the semantic meaning of what the user said.
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : Returns the lowest index value result in the {{domxref("SpeechRecognitionResultList")}} "array" that has actually changed.
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechRecognitionResultList")}} object representing all the speech recognition results for the current session.

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain
  // individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
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
