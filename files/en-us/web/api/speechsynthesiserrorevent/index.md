---
title: SpeechSynthesisErrorEvent
slug: Web/API/SpeechSynthesisErrorEvent
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechSynthesisErrorEvent
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisErrorEvent
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechSynthesisErrorEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) contains information about any errors that occur while processing {{domxref("SpeechSynthesisUtterance")}} objects in the speech service.

## Properties

_`SpeechSynthesisErrorEvent` extends the {{domxref("SpeechSynthesisEvent")}} interface, which inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechSynthesisErrorEvent.error")}} {{readonlyinline}}
  - : Returns an error code indicating what has gone wrong with a speech synthesis attempt.

## Methods

_`SpeechSynthesisErrorEvent` extends the {{domxref("SpeechSynthesisEvent")}} interface, which inherits methods from its parent interface, {{domxref("Event")}}._

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
