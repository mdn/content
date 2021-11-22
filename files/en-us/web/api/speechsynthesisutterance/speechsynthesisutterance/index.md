---
title: SpeechSynthesisUtterance()
slug: Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance
tags:
  - API
  - Constructor
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.SpeechSynthesisUtterance
---
{{APIRef("Web Speech API")}}

The `SpeechSynthesisUtterance()` constructor of the {{domxref("SpeechSynthesisUtterance")}} interface returns a new `SpeechSynthesisUtterance` object instance.

## Syntax

```js
var utterThis = new SpeechSynthesisUtterance(text);
```

### Parameters

- `text`
  - : A {{domxref("DOMString")}} containing the text that will be synthesized when the utterance is spoken..

## Examples

The following snippet is excerpted from our [Speech synthesizer demo](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis).

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
