---
title: "SpeechSynthesisUtterance: SpeechSynthesisUtterance() constructor"
short-title: SpeechSynthesisUtterance()
slug: Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance
page-type: web-api-constructor
browser-compat: api.SpeechSynthesisUtterance.SpeechSynthesisUtterance
---

{{APIRef("Web Speech API")}}

The `SpeechSynthesisUtterance()` constructor of the {{domxref("SpeechSynthesisUtterance")}} interface returns a new `SpeechSynthesisUtterance` object instance.

## Syntax

```js-nolint
new SpeechSynthesisUtterance(text)
```

### Parameters

- `text`
  - : A string containing the text that will be synthesized when the utterance is spoken.

## Examples

The following snippet is excerpted from our [Speech synthesizer demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis).

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
