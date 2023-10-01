---
title: "SpeechSynthesisUtterance: pause event"
short-title: pause
slug: Web/API/SpeechSynthesisUtterance/pause_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.pause_event
---

{{APIRef("Web Speech API")}}

The **`pause`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the utterance is paused part way through.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("pause", (event) => {});

onpause = (event) => {};
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Returns the index position of the character in the {{domxref("SpeechSynthesisUtterance.text")}} that was being spoken when the event was triggered.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Returns the elapsed time in seconds after the {{domxref("SpeechSynthesisUtterance.text")}} started being spoken that the event was triggered at.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Returns the name associated with certain types of events occurring as the {{domxref("SpeechSynthesisUtterance.text")}} is being spoken: the name of the [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) marker reached in the case of a {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} event, or the type of boundary reached in the case of a {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} event.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("SpeechSynthesisUtterance")}} instance that the event was triggered on.

## Examples

You can use the `pause` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("pause", (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
});
```

Or use the `onpause` event handler property:

```js
utterThis.onpause = (event) => {
  console.log(`Speech paused after ${event.elapsedTime} seconds.`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
