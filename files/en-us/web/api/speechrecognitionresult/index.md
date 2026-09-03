---
title: SpeechRecognitionResult
slug: Web/API/SpeechRecognitionResult
page-type: web-api-interface
browser-compat: api.SpeechRecognitionResult
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionResult`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a single recognition match, which may contain multiple {{domxref("SpeechRecognitionAlternative")}} objects.

## Instance properties

- {{domxref("SpeechRecognitionResult.isFinal")}} {{ReadOnlyInline}}
  - : A boolean value that states whether this result is final (true) or not (false) — if so, then this is the final time this result will be returned; if not, then this result is an interim result, and may be updated later on.
- {{domxref("SpeechRecognitionResult.length")}} {{ReadOnlyInline}}
  - : Returns the length of the "array" — the number of {{domxref("SpeechRecognitionAlternative")}} objects contained in the result (also referred to as "n-best alternatives".)

## Instance methods

- {{domxref("SpeechRecognitionResult.item")}}
  - : A standard getter that allows {{domxref("SpeechRecognitionAlternative")}} objects within the result to be accessed via array syntax.

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
