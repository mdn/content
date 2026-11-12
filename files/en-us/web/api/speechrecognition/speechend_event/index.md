---
title: "SpeechRecognition: speechend event"
short-title: speechend
slug: Web/API/SpeechRecognition/speechend_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.speechend_event
---

{{APIRef("Web Speech API")}}

The **`speechend`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when speech recognized by the speech recognition service has stopped being detected.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("speechend", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onspeechend = (event) => { }
```

## Event type

A generic {{DOMxRef("Event")}} with no added properties.

## Examples

You can use the `speechend` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("speechend", () => {
  console.log("Speech has stopped being detected");
});
```

Or use the `onspeechend` event handler property (but note that this replaces other event listeners added using `onspeechend`, if any):

```js
recognition.onspeechend = () => {
  console.log("Speech has stopped being detected");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
