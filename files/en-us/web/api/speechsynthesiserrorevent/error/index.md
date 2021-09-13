---
title: SpeechSynthesisErrorEvent.error
slug: Web/API/SpeechSynthesisErrorEvent/error
tags:
  - API
  - Error
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisErrorEvent
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisErrorEvent.error
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`error`** property of the
{{domxref("SpeechSynthesisErrorEvent")}} interface returns an error code indicating what
has gone wrong with a speech synthesis attempt.

## Syntax

```js
myError = event.error;
```

### Value

A {{domxref("DOMString")}} containing an error code. Possible codes are:

- `canceled`
  - : A {{domxref("SpeechSynthesis.cancel")}} method call caused the
    {{domxref("SpeechSynthesisUtterance")}} to be removed from the queue before it had
    begun being spoken.
- `interrupted`
  - : A {{domxref("SpeechSynthesis.cancel")}} method call caused the
    {{domxref("SpeechSynthesisUtterance")}} to be interrupted after it had begun being
    spoken and before it completed.
- `audio-busy`
  - : The operation couldn't be completed at this time because the user-agent couldn't
    access the audio output device (for example, the user may need to correct this by
    closing another application.)
- `audio-hardware`
  - : The operation couldn't be completed at this time because the user-agent couldn't
    identify an audio output device (for example, the user may need to connect a speaker
    or configure system settings.)
- `network`
  - : The operation couldn't be completed at this time because some required network
    communication failed.
- `synthesis-unavailable`
  - : The operation couldn't be completed at this time because no synthesis engine was
    available (For example, the user may need to install or configure a synthesis engine.)
- `synthesis-failed`
  - : The operation failed because the synthesis engine raised an error.
- `language-unavailable`
  - : No appropriate voice was available for the language set in
    {{domxref("SpeechSynthesisUtterance.lang")}}.
- `voice-unavailable`
  - : The voice set in {{domxref("SpeechSynthesisUtterance.voice")}} was not available.
- `text-too-long`
  - : The contents of the {{domxref("SpeechSynthesisUtterance.text")}} attribute was too
    long to synthesize.
- `invalid-argument`
  - : The content of the {{domxref("SpeechSynthesisUtterance.rate")}},
    {{domxref("SpeechSynthesisUtterance.pitch")}} or
    {{domxref("SpeechSynthesisUtterance.volume")}} property was not valid.

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
    console.error('An error has occurred with the speech synthesis: ' + event.error);
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
