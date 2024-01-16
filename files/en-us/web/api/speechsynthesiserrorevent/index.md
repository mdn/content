---
title: SpeechSynthesisErrorEvent
slug: Web/API/SpeechSynthesisErrorEvent
page-type: web-api-interface
browser-compat: api.SpeechSynthesisErrorEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechSynthesisErrorEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) contains information about any errors that occur while processing {{domxref("SpeechSynthesisUtterance")}} objects in the speech service.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SpeechSynthesisErrorEvent.SpeechSynthesisErrorEvent", "SpeechSynthesisErrorEvent()")}}
  - : Creates a new `SpeechSynthesisErrorEvent`.

## Instance properties

_`SpeechSynthesisErrorEvent` extends the {{domxref("SpeechSynthesisEvent")}} interface, which inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechSynthesisErrorEvent.error")}} {{ReadOnlyInline}}
  - : Returns an error code indicating what has gone wrong with a speech synthesis attempt.

## Instance methods

_`SpeechSynthesisErrorEvent` extends the {{domxref("SpeechSynthesisEvent")}} interface, which inherits methods from its parent interface, {{domxref("Event")}}._

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

  synth.speak(utterThis);

  utterThis.onerror = (event) => {
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`,
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
