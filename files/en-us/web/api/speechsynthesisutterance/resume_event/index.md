---
title: "SpeechSynthesisUtterance: resume event"
short-title: resume
slug: Web/API/SpeechSynthesisUtterance/resume_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.resume_event
---

{{APIRef("Web Speech API")}}

The **`resume`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when a paused utterance is resumed.

## Syntax

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("resume", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onresume = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Examples

You can use the `resume` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("resume", (event) => {
  console.log(`Speech resumed after ${event.elapsedTime} seconds.`);
});
```

Or use the `onresume` event handler property (but note that this replaces other event listeners added using `onresume`, if any):

```js
utterThis.onresume = (event) => {
  console.log(`Speech resumed after ${event.elapsedTime} seconds.`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
