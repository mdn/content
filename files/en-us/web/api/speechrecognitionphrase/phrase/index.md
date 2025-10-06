---
title: "SpeechRecognitionPhrase: phrase property"
short-title: phrase
slug: Web/API/SpeechRecognitionPhrase/phrase
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SpeechRecognitionPhrase.phrase
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`phrase`** read-only property of the {{domxref("SpeechRecognitionPhrase")}} interface returns a string containing the word or phrase you want boosted in the recognition engine's [contextual bias](/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#contextual_biasing_in_speech_recognition).

## Value

A string.

## Examples

### Basic usage

The {{domxref("SpeechRecognition.phrases")}} property holds an array of `SpeechRecognitionPhrase` objects representing contextual biasing phrases. This array can be modified just like a normal JavaScript array, for example by pushing new phrases to it dynamically:

```js
recognition.phrases.push(new SpeechRecognitionPhrase("thistle", 5.0));
```

You can then access these objects and their properties like so. To return the `phrase` value of the added phrase, you could do this:

```js
// Should return "thistle"
recognition.phrases[0].phrase;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
