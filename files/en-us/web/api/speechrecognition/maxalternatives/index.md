---
title: SpeechRecognition.maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - maxAlternatives
  - recognition
  - speech
browser-compat: api.SpeechRecognition.maxAlternatives
---
{{APIRef("Web Speech API")}}

The **`maxAlternatives`** property of the
{{domxref("SpeechRecognition")}} interface sets the maximum number of
{{domxref("SpeechRecognitionAlternative")}}s provided per
{{domxref("SpeechRecognitionResult")}}.

The default value is 1.

## Value

A number representing the maximum returned alternatives for each result.

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

```js
const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// ...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
