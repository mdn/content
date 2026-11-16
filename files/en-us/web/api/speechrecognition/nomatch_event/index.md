---
title: "SpeechRecognition: nomatch event"
short-title: nomatch
slug: Web/API/SpeechRecognition/nomatch_event
page-type: web-api-event
browser-compat: api.SpeechRecognition.nomatch_event
---

{{APIRef("Web Speech API")}}

The **`nomatch`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the speech recognition service returns a final result with no significant recognition.

This may involve some degree of recognition, which doesn't meet or exceed the {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} threshold.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("nomatch", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onnomatch = (event) => { }
```

## Event type

A {{domxref("SpeechRecognitionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Examples

You can use the `nomatch` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new (
  window.SpeechRecognition || window.webkitSpeechRecognition
)();

recognition.addEventListener("nomatch", () => {
  console.error("Speech not recognized");
});
```

Or use the `onnomatch` event handler property (but note that this replaces other event listeners added using `onnomatch`, if any):

```js
recognition.onnomatch = () => {
  console.error("Speech not recognized");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
