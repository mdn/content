---
title: SpeechRecognitionResult
slug: Web/API/SpeechRecognitionResult
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - SpeechRecognitionResult
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechRecognitionResult
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionResult`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a single recognition match, which may contain multiple {{domxref("SpeechRecognitionAlternative")}} objects.

> **Note:** This interface is a legacy type that existed because of a [historical accident](https://stackoverflow.com/questions/74630989/why-use-domstringlist-rather-than-an-array/74641156#74641156) and only kept for not breaking the code that have already used it. Modern APIs use Types that wrap around ECMAScript array types so you can treat them like an ECMAScript array, and at the same time impose additional semantics on their usage like making their items read-only.

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
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
