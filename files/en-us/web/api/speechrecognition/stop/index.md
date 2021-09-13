---
title: SpeechRecognition.stop()
slug: Web/API/SpeechRecognition/stop
tags:
  - API
  - Experimental
  - Method
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - speech
  - stop
browser-compat: api.SpeechRecognition.stop
---
{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

The **`stop()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) stops the speech
recognition service from listening to incoming audio, and attempts to return a
{{domxref("SpeechRecognitionResult")}} using the audio captured so far.

## Syntax

```js
mySpeechRecognition.stop();
```

### Returns

Void.

### Parameters

None.

## Examples

```js
var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

abortBtn.onclick = function() {
  recognition.abort();
  console.log('Speech recognition aborted.');
}

recognition.onspeechend = function() {
  recognition.stop();
  console.log('Speech recognition has stopped.');
}
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
