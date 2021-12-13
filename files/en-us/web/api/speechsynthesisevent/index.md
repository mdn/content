---
title: SpeechSynthesisEvent
slug: Web/API/SpeechSynthesisEvent
tags:
  - API
  - Interface
  - Reference
  - SpeechSynthesisEvent
  - Web Speech API
  - speech
  - synthesis
browser-compat: api.SpeechSynthesisEvent
---
{{APIRef("Web Speech API")}}

The **`SpeechSynthesisEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) contains information about the current state of {{domxref("SpeechSynthesisUtterance")}} objects that have been processed in the speech service.

## Properties

_The {{domxref("SpeechSynthesisEvent")}} interface also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechSynthesisEvent.charIndex")}} {{readonlyinline}}
  - : Returns the index position of the character in the {{domxref("SpeechSynthesisUtterance.text")}} that was being spoken when the event was triggered.
- {{domxref("SpeechSynthesisEvent.elapsedTime")}} {{readonlyinline}}
  - : Returns the elapsed time in seconds after the {{domxref("SpeechSynthesisUtterance.text")}} started being spoken that the event was triggered at.
- {{domxref("SpeechSynthesisEvent.name")}} {{readonlyinline}}
  - : Returns the name associated with certain types of events occurring as the {{domxref("SpeechSynthesisUtterance.text")}} is being spoken: the name of the [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) marker reached in the case of a {{event("mark")}} event, or the type of boundary reached in the case of a {{event("boundary")}} event.
- {{domxref("SpeechSynthesisEvent.utterance")}} {{readonlyinline}}
  - : Returns the {{domxref("SpeechSynthesisUtterance")}} instance that the event was triggered on.

## Methods

_The {{domxref("SpeechSynthesisEvent")}} interface also inherits methods from its parent interface, {{domxref("Event")}}._

## Examples

```js
utterThis.onpause = function(event) {
  var char = event.utterance.text.charAt(event.charIndex);
  console.log('Speech paused at character ' + event.charIndex + ' of "' +
  event.utterance.text + '", which is "' + char + '".');
}

utterThis.onboundary = function(event) {
  console.log(event.name + ' boundary reached after ' + event.elapsedTime + ' seconds.');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
