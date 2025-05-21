---
title: "SpeechSynthesisUtterance: lang property"
short-title: lang
slug: Web/API/SpeechSynthesisUtterance/lang
page-type: web-api-instance-property
browser-compat: api.SpeechSynthesisUtterance.lang
---

{{APIRef("Web Speech API")}}

The **`lang`** property of the {{domxref("SpeechSynthesisUtterance")}} interface gets and sets the language of the utterance.

If unset, the app's (i.e., the {{htmlelement("html")}} [`lang`](/en-US/docs/Web/HTML/Reference/Global_attributes/lang) value) lang will be used, or the user-agent default if that is unset too.

## Value

A string representing a BCP 47 language tag.

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
  utterThis.lang = "en-US";
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
