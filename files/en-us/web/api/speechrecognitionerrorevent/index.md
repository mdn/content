---
title: SpeechRecognitionErrorEvent
slug: Web/API/SpeechRecognitionErrorEvent
browser-compat: api.SpeechRecognitionErrorEvent
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`SpeechRecognitionErrorEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents error messages from the recognition service.

## Properties

_`SpeechRecognitionErrorEvent` also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionErrorEvent.error")}} {{readonlyinline}}
  - : Returns the type of error raised.
- {{domxref("SpeechRecognitionErrorEvent.message")}} {{readonlyinline}}
  - : Returns a message describing the error in more detail.

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onerror = function(event) {
  console.log('Speech recognition error detected: ' + event.error);
  console.log('Additional information: ' + event.message);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
