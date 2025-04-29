---
title: "SpeechSynthesisUtterance: voice property"
short-title: voice
slug: Web/API/SpeechSynthesisUtterance/voice
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisUtterance.voice
---

{{APIRef("Web Speech API")}}

The **`voice`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the voice that will be used to speak the utterance.

This should be set to one of the {{domxref("SpeechSynthesisVoice")}} objects returned by {{domxref("SpeechSynthesis.getVoices()")}}.
If not set by the time the utterance is spoken, the voice used will be the most suitable default voice available for the utterance's {{domxref("SpeechSynthesisUtterance.lang","lang")}} setting.

## Value

A {{domxref("SpeechSynthesisVoice")}} object.

## Examples

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// …

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
