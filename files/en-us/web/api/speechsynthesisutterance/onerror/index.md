---
title: SpeechSynthesisUtterance.onerror
slug: Web/API/SpeechSynthesisUtterance/onerror
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - onerror
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onerror
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onerror`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when an error occurs that prevents the utterance from being successfully spoken (when
the {{event("error_(SpeechSynthesis)", "error")}} event fires.)

## Syntax

```js
speechSynthesisUtteranceInstance.onerror = function() { /* ... */ };
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

  utterThis.onerror = function(event) {
    console.log('An error has occurred with the speech synthesis: ' + event.error);
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
