---
title: SpeechGrammarList()
slug: Web/API/SpeechGrammarList/SpeechGrammarList
tags:
  - API
  - Constructor
  - Experimental
  - Reference
  - SpeechGrammarList
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechGrammarList.SpeechGrammarList
---
{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`SpeechGrammarList()`** constructor creates a new
`SpeechGrammarList` object instance.

## Syntax

```js
var myGrammarList = new SpeechGrammarList();
```

### Parameters

None.

## Examples

In our simple [Speech
color changer](https://github.com/mdn/web-speech-api/tree/master/speech-color-changer) example, we create a new `SpeechRecognition` object
instance using the {{domxref("SpeechRecognition.SpeechRecognition",
  "SpeechRecognition()")}} constructor, create a new {{domxref("SpeechGrammarList")}}, add
our grammar string to it using the {{domxref("SpeechGrammarList.addFromString")}}
method, and set it to be the grammar that will be recognized by the
`SpeechRecognition` instance using the
{{domxref("SpeechRecognition.grammars")}} property.

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
