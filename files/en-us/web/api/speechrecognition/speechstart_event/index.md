---
title: "SpeechRecognition: speechstart event"
short-title: speechstart
slug: Web/API/SpeechRecognition/speechstart_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.speechstart_event
---

{{APIRef("Web Speech API")}}

The **`speechstart`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when sound recognized by the speech recognition service as speech has been detected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("speechstart", (event) => {});

onspeechstart = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `speechstart` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("speechstart", () => {
  console.log("Speech has been detected");
});
```

Or use the `onspeechstart` event handler property:

```js
recognition.onspeechstart = () => {
  console.log("Speech has been detected");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
