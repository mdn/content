---
title: "SpeechRecognitionPhrase: boost property"
short-title: boost
slug: Web/API/SpeechRecognitionPhrase/boost
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionPhrase.boost
---

{{APIRef("Web Speech API")}}

The **`boost`** read-only property of the
{{domxref("SpeechRecognitionResult")}} interface returns a floating pointing number representing the amount of boost you want to give the corresponding {{domxref("SpeechRecognitionPhrase.phrase", "phrase")}}.

## Value

A floating point number between `0.0` and `10.0` (inclusive) that represents the weight you want to apply to the `phrase`. This value is roughly equivalent to the natural log of the number of times more likely the website thinks this phrase to appear than what the speech recognition model knows. Higher values make the `phrase` more likely to be recognized.

A high value such as `9.0` or `10.0` might make the recognition engine erroneously recognize other phrases as the specified phrase. Therefore, such values should be used rarely when constructing `SpeechRecognitionPhrase` objects.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
