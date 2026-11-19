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

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("soundstart", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onsoundstart = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `soundstart` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("soundstart", () => {
  console.log("Some sound is being received");
});
```

Or use the `onsoundstart` event handler property (but note that this replaces other event listeners added using `onsoundstart`, if any):

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
