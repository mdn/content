---
title: SpeechSynthesisUtterance.onpause
slug: Web/API/SpeechSynthesisUtterance/onpause
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onpause
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onpause
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onpause`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when the utterance is paused part way through (when the
{{event("pause_(SpeechSynthesis)", "pause")}} event fires.)

This occurs when the {{domxref("SpeechSynthesis.pause()")}} method is invoked.

## Syntax

```js
speechSynthesisUtteranceInstance.onpause = function() { /* ... */ };
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

  utterThis.onpause = function(event) {
    console.log('Speech paused after ' + event.elapsedTime + ' seconds.');
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
