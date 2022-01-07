---
title: SpeechSynthesis.getVoices()
slug: Web/API/SpeechSynthesis/getVoices
tags:
  - API
  - Method
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - getVoices
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis.getVoices
---
{{APIRef("Web Speech API")}}

The **`getVoices()`** method of the
{{domxref("SpeechSynthesis")}} interface returns a list of
{{domxref("SpeechSynthesisVoice")}} objects representing all the available voices on the
current device.

## Syntax

```js
getVoices()
```

### Parameters

None.

### Return value

A list (array) of {{domxref("SpeechSynthesisVoice")}} objects.

## Example

### JavaScript

```js
function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  var voices = speechSynthesis.getVoices();

  for(var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}

populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

### HTML

```html
<select id="voiceSelect"></select>
```

{{EmbedLiveSample("Example", 400, 25)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
