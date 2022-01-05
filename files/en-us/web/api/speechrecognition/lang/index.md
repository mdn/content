---
title: SpeechRecognition.lang
slug: Web/API/SpeechRecognition/lang
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - lang
  - recognition
  - speech
browser-compat: api.SpeechRecognition.lang
---
{{APIRef("Web Speech API")}}
The **`lang`** property of the {{domxref("SpeechRecognition")}}
interface returns and sets the language of the current `SpeechRecognition`.
If not specified, this defaults to the HTML {{htmlattrxref("lang","html")}} attribute
value, or the user agent's language setting if that isn't set either.

## Value

A {{domxref("DOMString")}} representing the BCP 47 language tag for the current `SpeechRecognition`.

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
