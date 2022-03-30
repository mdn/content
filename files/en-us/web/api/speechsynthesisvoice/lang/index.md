---
title: SpeechSynthesisVoice.lang
slug: Web/API/SpeechSynthesisVoice/lang
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisVoice
  - Web Speech API
  - lang
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisVoice.lang
---
{{APIRef("Web Speech API")}}

The **`lang`** read-only property of the {{domxref("SpeechSynthesisVoice")}} interface returns a BCP 47 language tag indicating the language of the voice.

## Value

A {{domxref("DOMString")}} representing the language of the device.

## Examples

```js
for(i = 0; i < voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

  if(voices[i].default) {
    option.textContent += ' -- DEFAULT';
  }

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
