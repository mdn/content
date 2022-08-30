---
title: 'SpeechRecognition: nomatch event'
slug: Web/API/SpeechRecognition/nomatch_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.nomatch_event
---
{{APIRef("Web Speech API")}}

The **`nomatch`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) is fired when the speech recognition service returns a final result with no significant recognition.

This may involve some degree of recognition, which doesn't meet or exceed the {{domxref("SpeechRecognitionAlternative.confidence","confidence")}} threshold.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('nomatch', (event) => { })

onnomatch = (event) => { }
```

## Event type

A {{domxref("SpeechRecognitionEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechRecognitionEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}}
  - : Returns an Extensible MultiModal Annotation markup language (EMMA) — XML — representation of the result.
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}}
  - : Returns the semantic meaning of what the user said.
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : Returns the lowest index value result in the {{domxref("SpeechRecognitionResultList")}} "array" that has actually changed.
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : Returns a {{domxref("SpeechRecognitionResultList")}} object representing all the speech recognition results for the current session.

## Examples

You can use the `nomatch` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('nomatch', () => {
  console.error('Speech not recognized');
});
```

Or use the `onnomatch` event handler property:

```js
recognition.onnomatch = () => {
  console.error('Speech not recognized');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
