---
title: SpeechSynthesisUtterance.rate
slug: Web/API/SpeechSynthesisUtterance/rate
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - rate
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.rate
---
{{APIRef("Web Speech API")}}

The **`rate`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the speed at which the utterance will be spoken at.

If unset, a default value of 1 will be used.

## Syntax

```js
var myRate = speechSynthesisUtteranceInstance.rate;
speechSynthesisUtteranceInstance.rate = 1.5;
```

### Value

A float representing the rate value.
It can range between 0.1 (lowest) and 10 (highest), with 1 being the default pitch for the current platform or voice, which should correspond to a normal speaking rate.
Other values act as a percentage relative to this, so for example 2 is twice as fast, 0.5 is half as fast, etc.

Some speech synthesis engines or voices may constrain the minimum and maximum rates further.
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
  utterThis.rate = 1.5;
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
