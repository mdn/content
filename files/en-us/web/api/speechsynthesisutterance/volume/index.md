---
title: SpeechSynthesisUtterance.volume
slug: Web/API/SpeechSynthesisUtterance/volume
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Volume
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.volume
---
{{APIRef("Web Speech API")}}

The **`volume`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the volume that the utterance will be spoken at.

If not set, the default value 1 will be used.

## Syntax

```js
var myVolume = speechSynthesisUtteranceInstance.volume;
speechSynthesisUtteranceInstance.volume = 0.5;
```

### Value

A float that represents the volume value, between 0 (lowest) and 1 (highest.)

If [SSML](https://www.w3.org/TR/speech-synthesis/) is used, this value will be overridden by [prosody tags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) in the markup.

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
  utterThis.volume = 0.5;
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
