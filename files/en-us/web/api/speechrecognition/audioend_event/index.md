---
title: "SpeechRecognition: audioend event"
short-title: audioend
slug: Web/API/SpeechRecognition/audioend_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.audioend_event
---

{{APIRef("Web Speech API")}}

The **`audioend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the user agent has finished capturing audio for speech recognition.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("audioend", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onaudioend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `audioend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("audioend", () => {
  console.log("Audio capturing ended");
});
```

Or use the `onaudioend` event handler property (but note that this replaces other event listeners added using `onaudioend`, if any):

```js
recognition.onaudioend = () => {
  console.log("Audio capturing ended");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
