---
title: SpeechRecognitionPhrase
slug: Web/API/SpeechRecognitionPhrase
page-type: web-api-interface
browser-compat: api.SpeechRecognitionPhrase
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionPhrase`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a phrase that can be passed into the speech recognition engine to be used for [speech recognition contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#speech_recognition_contextual_biasing).

## Instance properties

- {{domxref("SpeechRecognitionPhrase.boost")}} {{ReadOnlyInline}}
  - : A floating pointing number representing the amount of boost you want to give the corresponding `phrase`.
- {{domxref("SpeechRecognitionPhrase.phrase")}} {{ReadOnlyInline}}
  - : A string containing a word or phrase you want boosted in terms of the engine's bias towards it.

## Examples

### Basic usage

The following code first creates an array containing the phrases to boost and their {{domxref("SpeechRecognitionPhrase.boost", "boost")}} values. We convert this data to an `ObservableArray` of `SpeechRecognitionPhrase` objects by mapping the original array to {{domxref("SpeechRecognitionPhrase.SpeechRecognitionPhrase", "SpeechRecognitionPhrase()")}} constructor calls:

```js
const phraseData = [
  { phrase: "azure", boost: 10.0 },
  { phrase: "khaki", boost: 3.0 },
  { phrase: "tan", boost: 2.0 },
];

const phraseObjects = phraseData.map(
  (p) => new SpeechRecognitionPhrase(p.phrase, p.boost),
);
```

After creating a {{domxref("SpeechRecognition")}} instance, we can then plug our contextual biasing phrases into it by setting the `phraseObjects` array as the value of the {{domxref("SpeechRecognition.phrases")}} property:

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.processLocally = true;
recognition.phrases = phraseObjects;

// …
```

This code is excerpted from our [on-device speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/on-device-speech-color-changer) ([run the demo live](https://mdn.github.io/dom-examples/web-speech-api/speech-color-changer/)). See [Using the Web Speech API](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) for a full explanation.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
- {{domxref("SpeechRecognition.phrases")}}
