---
title: "SpeechGrammar: src property"
short-title: src
slug: Web/API/SpeechGrammar/src
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.SpeechGrammar.src
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`src`** property of the {{domxref("SpeechGrammar")}} interface
is used to get or set a string that contains the grammar within the `SpeechGrammar` object.

## Value

A string representing the grammar.

## Examples

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in addFromString.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
