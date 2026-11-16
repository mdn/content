---
title: "SpeechRecognition: soundend event"
short-title: soundend
slug: Web/API/SpeechRecognition/soundend_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.soundend_event
---

{{APIRef("Web Speech API")}}

The **`soundend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when any sound — recognizable speech or not — has stopped being detected.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("soundend", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onsoundend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `soundend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("soundend", (event) => {
  console.log("Sound has stopped being received");
});
```

Or use the `onsoundend` event handler property (but note that this replaces other event listeners added using `onsoundend`, if any):

```js
recognition.onsoundend = (event) => {
  console.log("Sound has stopped being received");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
