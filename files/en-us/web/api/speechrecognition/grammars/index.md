---
title: SpeechRecognition.grammars
slug: Web/API/SpeechRecognition/grammars
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - grammars
  - recognition
  - speech
browser-compat: api.SpeechRecognition.grammars
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`grammars`** property of the
{{domxref("SpeechRecognition")}} interface returns and sets a collection of
{{domxref("SpeechGrammar")}} objects that represent the grammars that will be understood
by the current `SpeechRecognition`.

## Syntax

```js
var myGrammars = mySpeechRecognition.grammars;
mySpeechRecognition.grammars = mySpeechGrammarList;
```

### Value

A {{domxref("SpeechGrammarList")}} containing the {{domxref("SpeechGrammar")}} objects
that represent your grammar for your app.

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

### Firefox OS permissions

To use speech recognition in an app, you need to specify the following permissions in
your [manifest](/en-US/docs/Web/Apps/Build/Manifest):

```json
"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}
```

You also need a privileged app, so you need to include this as well:

```json
  "type": "privileged"
```

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
