---
title: SpeechSynthesisUtterance.text
slug: Web/API/SpeechSynthesisUtterance/text
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Text
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.text
---
{{APIRef("Web Speech API")}}

The **`text`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface gets and sets the text that will be synthesised when the utterance is spoken.

The text may be provided as plain text, or a well-formed [SSML](https://www.w3.org/TR/speech-synthesis/) document.
The SSML tags will be stripped away by devices that don't support SSML.

## Syntax

```js
var myText = speechSynthesisUtteranceInstance.text;
speechSynthesisUtteranceInstance.text = 'Hello I am speaking';
```

### Value

A {{domxref("DOMString")}} representing the text to the synthesised.
The maximum length of the text that can be spoken in each utterance is 32,767 characters.

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
  console.log(utterThis.text);
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
