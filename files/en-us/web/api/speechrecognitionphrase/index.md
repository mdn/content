---
title: SpeechRecognitionPhrase
slug: Web/API/SpeechRecognitionPhrase
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SpeechRecognitionPhrase
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechRecognitionPhrase`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a phrase that can be passed to the speech recognition engine for [contextual biasing](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition).

## Instance properties

- {{domxref("SpeechRecognitionPhrase.boost")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A floating point number representing the amount of boost you want to apply to the corresponding `phrase`.
- {{domxref("SpeechRecognitionPhrase.phrase")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : A string containing the word or phrase you want boosted in the recognition engine's bias.

## Examples

### Basic usage

The following code first creates an array containing the phrases to boost and their {{domxref("SpeechRecognitionPhrase.boost", "boost")}} values. We convert this data into an `ObservableArray` of `SpeechRecognitionPhrase` objects by mapping the original array elements to {{domxref("SpeechRecognitionPhrase.SpeechRecognitionPhrase", "SpeechRecognitionPhrase()")}} constructor calls:

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

After creating a {{domxref("SpeechRecognition")}} instance, we add our contextual biasing phrases by setting the `phraseObjects` array as the value of the {{domxref("SpeechRecognition.phrases")}} property:

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
- {{domxref("SpeechRecognition.phrases")}}
