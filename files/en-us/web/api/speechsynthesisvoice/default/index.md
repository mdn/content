---
title: SpeechSynthesisVoice.default
slug: Web/API/SpeechSynthesisVoice/default
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechSynthesisVoice
  - Web Speech API
  - default
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisVoice.default
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`default`** read-only property of the
{{domxref("SpeechSynthesisVoice")}} interface returns a boolean value
indicating whether the voice is the default voice for the current app
(`true`), or not (`false`.)

> **Note:** For some devices, it might be the default voice for the
> voice's language. The spec is not very clear on which it should be, so some
> implementations may differ.

## Syntax

```js
var amIDefault = speechSynthesisVoiceInstance.default;
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
