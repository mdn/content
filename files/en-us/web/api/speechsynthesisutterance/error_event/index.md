---
title: 'SpeechSynthesisUtterance: error event'
slug: Web/API/SpeechSynthesisUtterance/error_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechSynthesisUtterance.error_event
---
{{APIRef("Web Speech API")}}

The **`error`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechSynthesisUtterance")}} object is fired when an error occurs that prevents the utterance from being successfully spoken.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => { })

onerror = (event) => { }
```

## Event type

A {{domxref("SpeechSynthesisErrorEvent")}}. Inherits from {{domxref("SpeechSynthesisEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("SpeechSynthesisErrorEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("SpeechSynthesisEvent.charIndex", "charIndex")}} {{ReadOnlyInline}}
  - : Returns the index position of the character in the {{domxref("SpeechSynthesisUtterance.text")}} that was being spoken when the event was triggered.
- {{domxref("SpeechSynthesisEvent.elapsedTime", "elapsedTime")}} {{ReadOnlyInline}}
  - : Returns the elapsed time in seconds after the {{domxref("SpeechSynthesisUtterance.text")}} started being spoken that the event was triggered at.
- {{domxref("SpeechSynthesisErrorEvent.error", "error")}} {{ReadOnlyInline}}
  - : Returns an error code indicating what has gone wrong with a speech synthesis attempt.
- {{domxref("SpeechSynthesisEvent.name", "name")}} {{ReadOnlyInline}}
  - : Returns the name associated with certain types of events occurring as the {{domxref("SpeechSynthesisUtterance.text")}} is being spoken: the name of the [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2) marker reached in the case of a {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}} event, or the type of boundary reached in the case of a {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}} event.
- {{domxref("SpeechSynthesisEvent.utterance", "utterance")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("SpeechSynthesisUtterance")}} instance that the event was triggered on.

## Examples

You can use the `error` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
utterThis.addEventListener('error', (event) => {
  console.log(`An error has occurred with the speech synthesis: ${event.error}`);
});
```

Or use the `onerror` event handler property:

```js
utterThis.onerror = (event) => {
  console.log(`An error has occurred with the speech synthesis: ${event.error}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
