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

```js-nolint
addEventListener("pause", (event) => { })

onpause = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

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
