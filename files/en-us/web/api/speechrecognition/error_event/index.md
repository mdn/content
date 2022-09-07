---
title: 'SpeechRecognition: error event'
slug: Web/API/SpeechRecognition/error_event
page-type: web-api-event
tags:
  - Event
  - Reference
  - Web Speech API
browser-compat: api.SpeechRecognition.error_event
---
{{APIRef("Web Speech API")}}

The **`error`** event of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) {{domxref("SpeechRecognition")}} object is fired when a speech recognition error occurs.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('error', (event) => { })

onerror = (event) => { }
```

## Event type

A {{domxref("SpeechRecognitionErrorEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SpeechRecognitionErrorEvent")}}

## Event properties

_In addition to the properties listed below, properties from the parent interface, {{domxref("Event")}}, are available._

- {{domxref("SpeechRecognitionErrorEvent.error")}} {{ReadOnlyInline}}
  - : Returns the type of error raised.
- {{domxref("SpeechRecognitionErrorEvent.message")}} {{ReadOnlyInline}}
  - : Returns a message describing the error in more detail.

## Examples

You can use the `error` event in an [`addEventListener`](/en-US/docs/Web/API/EventTarget/addEventListener) method:

```js
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

recognition.addEventListener('error', (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
});
```

Or use the `onerror` event handler property:

```js
recognition.onerror = (event) => {
  console.error(`Speech recognition error detected: ${event.error}`);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
