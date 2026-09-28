---
title: "SpeechSynthesisUtterance: start event"
short-title: start
slug: Web/API/SpeechSynthesisUtterance/start_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.start_event
---

{{APIRef("Web Speech API")}}

The **`start`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the utterance has begun to be spoken.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("start", (event) => { })

onstart = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Examples

You can use the `start` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("start", (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
});
```

Or use the `onstart` event handler property:

```js
utterThis.onstart = (event) => {
  console.log(`We have started uttering this speech: ${event.utterance.text}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
