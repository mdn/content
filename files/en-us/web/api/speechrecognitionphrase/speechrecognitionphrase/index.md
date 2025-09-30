---
title: "SpeechRecognitionPhrase: SpeechRecognitionPhrase() constructor"
short-title: SpeechRecognitionPhrase()
slug: Web/API/SpeechRecognitionPhrase/SpeechRecognitionPhrase
page-type: web-api-constructor
browser-compat: api.SpeechRecognitionPhrase.SpeechRecognitionPhrase
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionPhrase()`** constructor creates a new {{domxref("SpeechRecognitionPhrase")}} object.

An array of `SpeechRecognitionPhrase` objects is passed into the speech recognition engine via the {{domxref("SpeechRecognition.phrases")}} property for [contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition).

## Syntax

```js-nolint
new SpeechRecognitionPhrase(phrase)
new SpeechRecognitionPhrase(boost, phrase)
```

### Parameters

- `boost` {{optional_inline}}
  - : A floating point number between `0.0` and `10.0` (inclusive) that represents the weight you want to apply to the `phrase`. This value is roughly equivalent to the natural log of the number of times more likely the website thinks this phrase to appear than what the speech recognition model knows. Higher values make the `phrase` more likely to be recognized. A value of `0.0` means the phrase is not boosted at all, whereas a value of `10.0` means the phrase is extremely likely to appear. If not specified, the `boost` defaults to `1.0`.
    > [!NOTE]
    > A high value such as `9.0` or `10.0` might make the recognition engine erroneously recognize other phrases as the specified phrase, therefore such values should be rarely set when constructuring `SpeechRecognitionPhrase` objects.
- `phrase`
  - : A string containing a word or phrase you want boosted.

### Return value

A new {{domxref("SpeechRecognitionPhrase")}} object.

### Exceptions

- `SyntaxError` {{domxref("DOMException")}}
  - : The specified `boost` value is less than `0.0` or greater than `10.0`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SpeechRecognition")}}
- {{domxref("SpeechRecognition.phrases")}}
