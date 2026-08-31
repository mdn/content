---
title: "SpeechSynthesisUtterance: end event"
short-title: end
slug: Web/API/SpeechSynthesisUtterance/end_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.end_event
---

{{APIRef("Web Speech API")}}

The **`end`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the utterance has finished being spoken.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("end", (event) => { })

onend = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Examples

You can use the `end` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("end", (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
});
```

Or use the `onend` event handler property:

```js
utterThis.onend = (event) => {
  console.log(
    `Utterance has finished being spoken after ${event.elapsedTime} seconds.`,
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
