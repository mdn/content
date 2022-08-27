---
title: SpeechRecognition.interimResults
slug: Web/API/SpeechRecognition/interimResults
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechRecognition.interimResults
---
{{APIRef("Web Speech API")}}

The **`interimResults`** property of the
{{domxref("SpeechRecognition")}} interface controls whether interim results should be
returned (`true`) or not (`false`.) Interim results are results
that are not yet final (e.g. the {{domxref("SpeechRecognitionResult.isFinal")}} property
is `false`.)

The default value for **`interimResults`** is `false`.

## Value

A boolean value representing the state of the current
`SpeechRecognition`'s interim results. `true` means interim
results are returned, and `false` means they aren't.

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
