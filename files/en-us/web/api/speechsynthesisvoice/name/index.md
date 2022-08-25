---
title: SpeechSynthesisVoice.name
slug: Web/API/SpeechSynthesisVoice/name
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - SpeechSynthesisVoice
  - Web Speech API
  - name
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisVoice.name
---
{{APIRef("Web Speech API")}}

The **`name`** read-only property of the
{{domxref("SpeechSynthesisVoice")}} interface returns a human-readable name that
represents the voice.

## Value

A string representing the name of the voice.

## Examples

```js
for (let i = 0; i < voices.length ; i++) {
  const option = document.createElement('option');
  option.textContent = `${voices[i].name} (${voices[i].lang})`;

  if (voices[i].default) {
    option.textContent += ' — DEFAULT';
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
