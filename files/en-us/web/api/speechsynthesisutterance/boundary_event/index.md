---
title: "SpeechSynthesisUtterance: boundary event"
short-title: boundary
slug: Web/API/SpeechSynthesisUtterance/boundary_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.boundary_event
---

{{APIRef("Web Speech API")}}

The **`boundary`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the spoken utterance reaches a word or sentence boundary.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("boundary", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onboundary = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Examples

You can use the `boundary` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("boundary", (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
});
```

Or use the `onboundary` event handler property (but note that this replaces other event listeners added using `onboundary`, if any):

```js
utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
