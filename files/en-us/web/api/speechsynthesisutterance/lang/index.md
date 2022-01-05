---
title: SpeechSynthesisUtterance.lang
slug: Web/API/SpeechSynthesisUtterance/lang
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisUtterance
  - Web Speech API
  - lang
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisUtterance.lang
---
{{APIRef("Web Speech API")}}

The **`lang`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the language of the utterance.

If unset, the app's (i.e. the {{htmlelement("html")}} {{htmlattrxref("lang", "html")}} value) lang will be used, or the user-agent default if that is unset too.

## Syntax

```js
var myLang = speechSynthesisUtteranceInstance.lang;
speechSynthesisUtteranceInstance.lang = 'en-US';
```

### Value

A {{domxref("DOMString")}} representing a BCP 47 language tag.

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
  utterThis.lang = 'en-US';
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
