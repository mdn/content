---
title: SpeechSynthesis.speak()
slug: Web/API/SpeechSynthesis/speak
tags:
  - API
  - Experimental
  - Method
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - speak
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis.speak
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`speak()`** method of the {{domxref("SpeechSynthesis")}}
interface adds an {{domxref("SpeechSynthesisUtterance", "utterance")}} to the utterance
queue; it will be spoken when any other utterances queued before it have been spoken.

## Syntax

```js
speechSynthesisInstance.speak(utterance);
```

### Returns

Void.

### Parameters

- utterance
  - : A {{domxref("SpeechSynthesisUtterance")}} object.

## Examples

This snippet is excerpted from our [Speech
synthesiser demo](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis). When a form containing the text we want to speak is submitted,
we (amongst other things) create a new utterance containing this text, then speak it by
passing it into `speak()` as a parameter.

```js
var synth = window.speechSynthesis;

  ...

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(let i = 0; i < voices.length ; i++) {
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
