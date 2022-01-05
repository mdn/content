---
title: SpeechSynthesisUtterance.onboundary
slug: Web/API/SpeechSynthesisUtterance/onboundary
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - onboundary
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.onboundary
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`onboundary`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface represents an event handler that will
run when the spoken utterance reaches a word or sentence boundary (when the
[`boundary`](/en-US/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
event fires.)

## Syntax

```js
speechSynthesisUtteranceInstance.onboundary = function() { /* ... */ };
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

  utterThis.onboundary = function(event) {
    console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
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
- [boundary
  event](/en-US/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
