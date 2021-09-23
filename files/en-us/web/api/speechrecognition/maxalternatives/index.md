---
title: SpeechRecognition.maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - maxAlternatives
  - recognition
  - speech
browser-compat: api.SpeechRecognition.maxAlternatives
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`maxAlternatives`** property of the
{{domxref("SpeechRecognition")}} interface sets the maximum number of
{{domxref("SpeechRecognitionAlternative")}}s provided per
{{domxref("SpeechRecognitionResult")}}.

The default value is 1.

## Syntax

```js
var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
mySpeechRecognition.maxAlternatives = 2;
```

### Value

A number representing the maximum returned alternatives for each result.

## Examples

This code is excerpted from our [Speech
color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) example.

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

...
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
