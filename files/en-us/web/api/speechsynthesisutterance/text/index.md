---
title: "SpeechSynthesisUtterance: text property"
short-title: text
slug: Web/API/SpeechSynthesisUtterance/text
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisUtterance.text
---

{{APIRef("Web Speech API")}}

The **`text`** property of the
{{domxref("SpeechSynthesisUtterance")}} interface gets and sets the text that will be synthesized when the utterance is spoken.

The text may be provided as plain text, or a well-formed [SSML](https://www.w3.org/TR/speech-synthesis/) document.
The SSML tags will be stripped away by devices that don't support SSML.

## Value

A string representing the text to the synthesized.
The maximum length of the text that can be spoken in each utterance is 32,767 characters.

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
  console.log(utterThis.text);
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
