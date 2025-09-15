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

A floating pointing number between `0.0` and `10.0` (inclusive) representing the amount of boost you want to give to the `phrase`. Higher values make the `phrase` more likely to be recognized.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
