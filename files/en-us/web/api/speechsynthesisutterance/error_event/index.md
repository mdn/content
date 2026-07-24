---
title: "SpeechSynthesisUtterance: error event"
short-title: error
slug: Web/API/SpeechSynthesisUtterance/error_event
page-type: web-api-event
browser-compat: api.SpeechSynthesisUtterance.error_event
---

{{APIRef("Web Speech API")}}

The **`error`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when an error occurs that prevents the utterance from being successfully spoken.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("error", (event) => { })

onerror = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisErrorEvent")}}. Inherits from {{domxref("SpeechSynthesisEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisErrorEvent")}}

## Examples

You can use the `error` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener("error", (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
});
```

Or use the `onerror` event handler property:

```js
utterThis.onerror = (event) => {
  console.log(
    `An error has occurred with the speech synthesis: ${event.error}`,
  );
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
