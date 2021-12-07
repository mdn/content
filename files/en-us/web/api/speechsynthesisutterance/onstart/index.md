---
title: SpeechSynthesisUtterance.onstart
slug: Web/API/SpeechSynthesisUtterance/onstart
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onstart
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onstart
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onstart`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when the utterance has begun to be spoken (when the [start](/en-US/docs/Web/API/SpeechSynthesisUtterance/start_event) event
fires.)

This occurs when the {{domxref("SpeechSynthesis.speak()")}} method is invoked.

## Syntax

```js
speechSynthesisUtteranceInstance.onstart = function() { /* ... */ };
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

  utterThis.onstart = function(event) {
    console.log('We have started uttering this speech: ' + event.utterance.text);
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
