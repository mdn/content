---
title: SpeechRecognitionResultList
slug: Web/API/SpeechRecognitionResultList
page-type: web-api-interface
browser-compat: api.SpeechRecognitionResultList
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionResultList`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a collection of {{domxref("SpeechRecognitionResult")}} objects.
If recognition isn't in {{domxref("SpeechRecognition.continuous","continuous")}} mode, it contains only one result.

## Instance properties

- {{domxref("SpeechRecognitionResultList.length")}} {{ReadOnlyInline}}
  - : Returns the length of the "array" — the number of {{domxref("SpeechRecognitionResult")}} objects in the list.

## Instance methods

- {{domxref("SpeechRecognitionResultList.item")}}
  - : A standard getter that allows {{domxref("SpeechRecognitionResult")}} objects in the list to be accessed via array syntax.

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
