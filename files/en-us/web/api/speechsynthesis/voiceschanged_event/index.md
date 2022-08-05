---
title: 'SpeechSynthesis: voiceschanged event'
slug: Web/API/SpeechSynthesis/voiceschanged_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesis.voiceschanged_event
---
{{APIRef("Web Speech API")}}

The **`voiceschanged`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the list of {{domxref("SpeechSynthesisVoice")}} objects that would be returned by the {{domxref("SpeechSynthesis.getVoices()")}} method has changed (when the `voiceschanged` event fires.)

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('voiceschanged', (event) => { })

onvoiceschanged = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

This could be used to repopulate a list of voices that the user can choose between when the event fires. You can use the `voiceschanged` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const synth = window.speechSynthesis;

synth.addEventListener('voiceschanged', () => {
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
});
```

Or use the `onvoiceschanged` event handler property:

```js
const synth = window.speechSynthesis;
synth.onvoiceschanged = () => {
  const voices = synth.getVoices();
  for (let i = 0; i < voices.length ; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
