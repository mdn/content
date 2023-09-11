---
title: "SpeechSynthesisUtterance: pitch property"
short-title: pitch
slug: Web/API/SpeechSynthesisUtterance/pitch
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisUtterance.pitch
---

{{APIRef("Web Speech API")}}

The **`pitch`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the pitch at which the utterance will be spoken at.

If unset, a default value of 1 will be used.

## Value

A float representing the pitch value.
It can range between 0 (lowest) and 2 (highest), with 1 being the default pitch for the current platform or voice. Some speech synthesis engines or voices may constrain the minimum and maximum rates further.
If [SSML](https://www.w3.org/TR/speech-synthesis/) is used, this value will be overridden by [prosody tags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) in the markup.

## Examples

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// ...

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
  utterThis.pitch = 1.5;
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
