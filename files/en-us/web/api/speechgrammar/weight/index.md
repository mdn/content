---
title: SpeechGrammar.weight
slug: Web/API/SpeechGrammar/weight
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechGrammar
  - Web Speech API
  - recognition
  - speech
  - weight
browser-compat: api.SpeechGrammar.weight
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The optional **`weight`** property of the
{{domxref("SpeechGrammar")}} interface sets and returns the weight of the
`SpeechGrammar` object.

## Value

A float representing the weight of the grammar, in the range 0.0–1.0.

## Examples

```js
const grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in line 4.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
