---
title: SpeechSynthesisVoice.localService
slug: Web/API/SpeechSynthesisVoice/localService
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisVoice
  - Web Speech API
  - localService
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisVoice.localService
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`localService`** read-only property of the
{{domxref("SpeechSynthesisVoice")}} interface returns a boolean value
indicating whether the voice is supplied by a local speech synthesizer service
(`true`), or a remote speech synthesizer service (`false`.)

This property is provided to allow differentiation in the case that some voice options
are provided by a remote service; it is possible that remote voices might have extra
latency, bandwidth or cost associated with them, so such distinction may be useful.

## Syntax

```js
var amILocal = speechSynthesisVoiceInstance.localService;
```

### Value

A boolean value.

## Examples

```js
for(i = 0; i < voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

  if(voices[i].default) {
    option.textContent += ' -- DEFAULT';
  }

  console.log(voices[i].localService);

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
