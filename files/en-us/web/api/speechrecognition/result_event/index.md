---
title: "SpeechRecognition: result event"
short-title: result
slug: Web/API/SpeechRecognition/result_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.result_event
---

{{APIRef("Web Speech API")}}

The **`result`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the speech recognition service returns a result — a word or phrase has been positively recognized and this has been communicated back to the app

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("result", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onresult = (event) => { }
```

## Event type

A {{domxref("SpeechRecognitionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Examples

This code is excerpted from our [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) example.

You can use the `result` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
});
```

Or use the `onresult` event handler property (but note that this replaces other event listeners added using `onresult`, if any):

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
