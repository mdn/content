---
title: SpeechSynthesisUtterance.voice
slug: Web/API/SpeechSynthesisUtterance/voice
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Voice
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.voice
---
{{APIRef("Web Speech API")}}

The **`voice`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the voice that will be used to speak the utterance.

This should be set to one of the {{domxref("SpeechSynthesisVoice")}} objects returned by {{domxref("SpeechSynthesis.getVoices()")}}.
If not set by the time the utterance is spoken, the voice used will be the most suitable default voice available for the utterance's {{domxref("SpeechSynthesisUtterance.lang","lang")}} setting.

## Syntax

```js
var myVoice = speechSynthesisUtteranceInstance.voice;
speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;
```

### Value

A {{domxref("SpeechSynthesisVoice")}} object.

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
  inputTxt.blur();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
