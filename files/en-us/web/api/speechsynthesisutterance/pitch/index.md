---
title: SpeechSynthesisUtterance.pitch
slug: Web/API/SpeechSynthesisUtterance/pitch
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - pitch
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.pitch
---
{{APIRef("Web Speech API")}}

The **`pitch`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the pitch at which the utterance will be spoken at.

If unset, a default value of 1 will be used.

## Syntax

```js
// default 1
speechSynthesisUtteranceInstance.pitch = 1.5;
```

### Value

A float representing the pitch value.
It can range between 0 (lowest) and 2 (highest), with 1 being the default pitch for the current platform or voice. Some speech synthesis engines or voices may constrain the minimum and maximum rates further.
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
  utterThis.pitch = 1.5;
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
