---
title: SpeechSynthesisUtterance.onend
slug: Web/API/SpeechSynthesisUtterance/onend
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onend
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onend
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onend`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when the utterance has finished being spoken (when the [end](/en-US/docs/Web/API/SpeechSynthesisUtterance/end_event) event fires.)

## Syntax

```js
speechSynthesisUtteranceInstance.onend = function() { /* ... */ };
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

  utterThis.onend = function(event) {
    console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
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
