---
title: SpeechRecognition.start()
slug: Web/API/SpeechRecognition/start
tags:
  - API
  - Method
  - Reference
  - SpeechRecognition
  - Web Speech API
  - recognition
  - speech
  - start
browser-compat: api.SpeechRecognition.start
---
{{APIRef("Web Speech API")}}

The **`start()`** method of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) starts the speech
recognition service listening to incoming audio with intent to recognize grammars
associated with the current {{domxref("SpeechRecognition")}}.

## Syntax

```js
start()
```

### Parameters

None.

### Return value

Void.

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

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
