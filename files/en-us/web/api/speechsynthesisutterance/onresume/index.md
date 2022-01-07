---
title: SpeechSynthesisUtterance.onresume
slug: Web/API/SpeechSynthesisUtterance/onresume
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onresume
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onresume
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onresume`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when a paused utterance is resumed (when the [resume](/en-US/docs/Web/API/SpeechSynthesisUtterance/resume_event) event
fires.)

This occurs when the {{domxref("SpeechSynthesis.resume()")}} method is invoked on a
paused speech synthesis instance.

## Syntax

```js
speechSynthesisUtteranceInstance.onresume = function() { /* ... */ };
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

  utterThis.onresume = function(event) {
    console.log('Speech resumed after ' + event.elapsedTime + ' seconds.');
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
