---
title: "SpeechRecognition: phrases property"
short-title: phrases
slug: Web/API/SpeechRecognition/phrases
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SpeechRecognition.phrases
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`phrases`** property of the
{{domxref("SpeechRecognition")}} interface sets an array of {{domxref("SpeechRecognitionPhrase")}} objects to be used for [contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition).

## Value

An `ObservableArray` of {{domxref("SpeechRecognitionPhrase")}} objects.

## Examples

### Basic usage

The following code first creates an array containing the phrases to boost and their {{domxref("SpeechRecognitionPhrase.boost", "boost")}} values. We convert this data to an `ObservableArray` of `SpeechRecognitionPhrase` objects by mapping the original array to {{domxref("SpeechRecognitionPhrase.SpeechRecognitionPhrase", "SpeechRecognitionPhrase()")}} constructor calls:

```js
const phraseData = [
  { phrase: "azure", boost: 5.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];

const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

After creating a {{domxref("SpeechRecognition")}} instance, we then plug our contextual biasing phrases into it by setting the `phraseObjects` array as the value of the `SpeechRecognition.phrases` property:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/on-device-speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- {{domxref("SpeechRecognitionPhrase")}}
