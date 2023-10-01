---
title: "Window: speechSynthesis property"
short-title: speechSynthesis
slug: Web/API/Window/speechSynthesis
page-type: web-api-instance-property
browser-compat: api.Window.speechSynthesis
---

{{APIRef()}}

The `speechSynthesis` read-only property of the Window object returns a {{domxref("SpeechSynthesis")}} object, which is the entry point into using [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) speech synthesis functionality.

## Value

A {{domxref("SpeechSynthesis")}} object.

## Examples

In our basic [Speech synthesizer demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis), we first grab a reference to the SpeechSynthesis controller using `window.speechSynthesis`.
After defining some necessary variables, we retrieve a list of the voices available using {{domxref("SpeechSynthesis.getVoices()")}} and populate a select menu with them so the user can choose what voice they want.

Inside the `inputForm.onsubmit` handler, we stop the form submitting with [preventDefault()](/en-US/docs/Web/API/Event/preventDefault), create a new {{domxref("SpeechSynthesisUtterance")}} instance containing the text from the text {{htmlelement("input")}}, set the utterance's voice to the voice selected in the {{htmlelement("select")}} element, and start the utterance speaking via the {{domxref("SpeechSynthesis.speak()")}} method.

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  utterThis.voice = voices.find((v) => v.name === selectedOption);
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
