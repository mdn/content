---
title: SpeechGrammarList.length
slug: Web/API/SpeechGrammarList/length
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechGrammarList
  - Web Speech API
  - length
  - recognition
  - speech
browser-compat: api.SpeechGrammarList.length
---
{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`length`** read-only property of the
{{domxref("SpeechGrammarList")}} interface returns the number of
{{domxref("SpeechGrammar")}} objects contained in the {{domxref("SpeechGrammarList")}}.

## Syntax

```js
var myListLength = speechGrammarListInstance.length;
```

### Value

A number indicating the number of {{domxref("SpeechGrammar")}} objects contained in the
{{domxref("SpeechGrammarList")}}.

## Examples

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

speechRecognitionList.length; // should return 1.
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
