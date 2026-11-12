---
title: "SpeechSynthesis: voiceschanged event"
short-title: voiceschanged
slug: Web/API/SpeechSynthesis/voiceschanged_event
page-type: web-api-event
browser-compat: api.SpeechSynthesis.voiceschanged_event
---

{{APIRef("Web Speech API")}}

The **`voiceschanged`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the list of {{domxref("SpeechSynthesisVoice")}} objects that would be returned by the {{domxref("SpeechSynthesis.getVoices()")}} method has changed (when the `voiceschanged` event fires.)

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("voiceschanged", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onvoiceschanged = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

This could be used to repopulate a list of voices that the user can choose between when the event fires. You can use the `voiceschanged` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
});
```

Or use the `onvoiceschanged` event handler property (but note that this replaces other event listeners added using `onvoiceschanged`, if any):

```js
const synth = window.speechSynthesis;
synth.onvoiceschanged = () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
