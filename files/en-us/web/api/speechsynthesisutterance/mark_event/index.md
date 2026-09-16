---
title: "SpeechSynthesisUtterance: mark event"
short-title: mark
slug: Web/API/SpeechSynthesisUtterance/mark_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.mark_event
---

{{APIRef("Web Speech API")}}

The **`mark`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when the spoken utterance reaches a named SSML "mark" tag.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("mark", (event) => { })

onmark = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisEvent")}}

## Examples

You can use the `mark` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("mark", (event) => {
  console.log(`A mark was reached: ${event.name}`);
});
```

Or use the `onmark` event handler property:

```js
utterThis.onmark = (event) => {
  console.log(`A mark was reached: ${event.name}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
