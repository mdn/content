---
title: SpeechSynthesisVoice.voiceURI
slug: Web/API/SpeechSynthesisVoice/voiceURI
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisVoice
  - Web Speech API
  - speech
  - synthesis
  - voiceURI
browser-compat: api.SpeechSynthesisVoice.voiceURI
---
{{APIRef("Web Speech API")}}

The **`voiceURI`** read-only property of the
{{domxref("SpeechSynthesisVoice")}} interface returns the type of URI and location of
the speech synthesis service for this voice.

## Value

A {{domxref("DOMString")}} representing the URI of the voice. This is a generic URI and
can point to local or remote services, e.g. it could be a proprietary system URN or a URL to a remote service.

## Examples

```js
for(i = 0; i < voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

  if(voices[i].default) {
    option.textContent += ' -- DEFAULT';
  }

  console.log(voices[i].voiceURI);
  // On Mac, this returns URNs, for example 'urn:moz-tts:osx:com.apple.speech.synthesis.voice.daniel'

  option.setAttribute('data-lang', voices[i].lang);
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
