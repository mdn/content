---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
page-type: web-api-interface
browser-compat: api.SpeechRecognitionAlternative
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionAlternative`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a single word that has been recognized by the speech recognition service.

## Instance properties

- {{domxref("SpeechRecognitionAlternative.transcript")}} {{ReadOnlyInline}}
  - : Returns a string containing the transcript of the recognized word.
- {{domxref("SpeechRecognitionAlternative.confidence")}} {{ReadOnlyInline}}
  - : Returns a numeric estimate between 0 and 1 of how confident the speech recognition system is that the recognition is correct.

## Examples

This code is excerpted from our
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

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
