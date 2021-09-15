---
title: SpeechRecognition.continuous
slug: Web/API/SpeechRecognition/continuous
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - continuous
  - recognition
  - speech
browser-compat: api.SpeechRecognition.continuous
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`continuous`** property of the
{{domxref("SpeechRecognition")}} interface controls whether continuous results are
returned for each recognition, or only a single result.

It defaults to single results (`false`.)

## Syntax

```js
var myContinuous = mySpeechRecognition.continuous;
mySpeechRecognition.continuous = true;
```

### Value

A boolean value representing the current `SpeechRecognition`'s
continuous status. `true` means continuous, and `false` means not
continuous (single result each time.)

## Examples

This code is excerpted from our [Speech
color changer](https://github.com/mdn/web-speech-api/blob/master/speech-color-changer/script.js) example.

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = false;
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
