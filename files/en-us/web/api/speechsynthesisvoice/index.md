---
title: SpeechSynthesisVoice
slug: Web/API/SpeechSynthesisVoice
page-type: web-api-interface
browser-compat: api.SpeechSynthesisVoice
---

{{APIRef("Web Speech API")}}

The **`SpeechSynthesisVoice`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents a voice that the system supports.
Every `SpeechSynthesisVoice` has its own relative speech service including information about language, name and URI.

## Instance properties

- {{domxref("SpeechSynthesisVoice.default")}} {{ReadOnlyInline}}
  - : A boolean value indicating whether the voice is the default voice for the current app language (`true`), or not (`false`.)
- {{domxref("SpeechSynthesisVoice.lang")}} {{ReadOnlyInline}}
  - : Returns a BCP 47 language tag indicating the language of the voice.
- {{domxref("SpeechSynthesisVoice.localService")}} {{ReadOnlyInline}}
  - : A boolean value indicating whether the voice is supplied by a local speech synthesizer service (`true`), or a remote speech synthesizer service (`false`.)
- {{domxref("SpeechSynthesisVoice.name")}} {{ReadOnlyInline}}
  - : Returns a human-readable name that represents the voice.
- {{domxref("SpeechSynthesisVoice.voiceURI")}} {{ReadOnlyInline}}
  - : Returns the type of URI and location of the speech synthesis service for this voice.

## Examples

The following snippet is excerpted from our [Speech synthesizer demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js).

```js
const synth = window.speechSynthesis;
function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
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
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  utterThis.onpause = (event) => {
    const char = event.utterance.text.charAt(event.charIndex);
    console.log(
      `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
    );
  };

  inputTxt.blur();
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
