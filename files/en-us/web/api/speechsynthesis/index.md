---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesis
---
{{APIRef("Web Speech API")}}

The **`SpeechSynthesis`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.

{{InheritanceDiagram}}

## Properties

_`SpeechSynthesis` also inherits properties from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.paused")}} {{ReadOnlyInline}}
  - : A boolean value that returns `true` if the `SpeechSynthesis` object is in a paused state.
- {{domxref("SpeechSynthesis.pending")}} {{ReadOnlyInline}}
  - : A boolean value that returns `true` if the utterance queue contains as-yet-unspoken utterances.
- {{domxref("SpeechSynthesis.speaking")}} {{ReadOnlyInline}}
  - : A boolean value that returns `true` if an utterance is currently in the process of being spoken — even if `SpeechSynthesis` is in a paused state.

## Methods

_`SpeechSynthesis` also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.cancel()")}}
  - : Removes all utterances from the utterance queue.
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : Returns a list of {{domxref("SpeechSynthesisVoice")}} objects representing all the available voices on the current device.
- {{domxref("SpeechSynthesis.pause()")}}
  - : Puts the `SpeechSynthesis` object into a paused state.
- {{domxref("SpeechSynthesis.resume()")}}
  - : Puts the `SpeechSynthesis` object into a non-paused state: resumes it if it was already paused.
- {{domxref("SpeechSynthesis.speak()")}}
  - : Adds an {{domxref("SpeechSynthesisUtterance", "utterance")}} to the utterance queue; it will be spoken when any other utterances queued before it have been spoken.

## Events

Listen to this event using [`addEventListener()`](/en-US/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`voiceschanged`](/en-US/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : Fired when the list of {{domxref("SpeechSynthesisVoice")}} objects that would be returned by the {{domxref("SpeechSynthesis.getVoices()")}} method has changed.
    Also available via the `onvoiceschanged` property.

## Examples

First, a simple example:

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

Now we'll look at a more fully-fledged example. In our [Speech synthesizer demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis), we first grab a reference to the SpeechSynthesis controller using `window.speechSynthesis`. After defining some necessary variables, we retrieve a list of the voices available using {{domxref("SpeechSynthesis.getVoices()")}} and populate a select menu with them so the user can choose what voice they want.

Inside the `inputForm.onsubmit` handler, we stop the form submitting with [preventDefault()](/en-US/docs/Web/API/Event/preventDefault),  create a new {{domxref("SpeechSynthesisUtterance")}} instance containing the text from the text {{htmlelement("input")}}, set the utterance's voice to the voice selected in the {{htmlelement("select")}} element, and start the utterance speaking via the {{domxref("SpeechSynthesis.speak()")}} method.

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector('form');
const inputTxt = document.querySelector('.txt');
const voiceSelect = document.querySelector('select');
const pitch = document.querySelector('#pitch');
const pitchValue = document.querySelector('.pitch-value');
const rate = document.querySelector('#rate');
const rateValue = document.querySelector('.rate-value');

let voices = [];

function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
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
  const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  inputTxt.blur();
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
