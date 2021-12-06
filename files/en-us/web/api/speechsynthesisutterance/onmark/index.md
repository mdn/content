---
title: SpeechSynthesisUtterance.onmark
slug: Web/API/SpeechSynthesisUtterance/onmark
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onmark
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onmark
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onmark`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when the spoken utterance reaches a named [SSML mark tag](https://www.w3.org/TR/speech-synthesis/#S3.3.2) (when the
[`mark`](/en-US/docs/Web/API/SpeechSynthesisUtterance/mark_event)
event fires.)

## Syntax

```js
speechSynthesisUtteranceInstance.onmark = function() { /* ... */ };
```

## Examples

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

  ...

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }

  synth.speak(utterThis);

  utterThis.onmark = function(event) {
    console.log('A mark was reached: ' + event.name);
  }

  inputTxt.blur();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
