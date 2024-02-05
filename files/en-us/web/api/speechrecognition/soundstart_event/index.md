---
title: "SpeechRecognition: soundstart event"
short-title: soundstart
slug: Web/API/SpeechRecognition/soundstart_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.soundstart_event
---

{{APIRef("Web Speech API")}}

The **`soundstart`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when any sound — recognizable speech or not — has been detected.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("soundstart", (event) => {});

onsoundstart = (event) => {};
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `soundstart` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener("soundstart", () => {
  console.log("Some sound is being received");
});
```

Or use the `onsoundstart` event handler property:

```js
recognition.onsoundstart = () => {
  console.log("Some sound is being received");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
