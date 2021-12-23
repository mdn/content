---
title: SpeechRecognitionError
slug: Web/API/SpeechRecognitionError
tags:
  - API
  - Experimental
  - Interface
  - Reference
  - SpeechRecognitionError
  - Web Speech API
  - recognition
  - speech
browser-compat: api.SpeechRecognitionError
---
{{APIRef("Web Speech API")}}{{deprecated_header}}

The **`SpeechRecognitionError`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents error messages from the recognition service.

> **Note:** This `SpeechRecognitionError` interface was renamed to {{domxref("SpeechRecognitionErrorEvent")}} in the Web Speech API specification.

## Properties

_`SpeechRecognitionError` also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionError.error")}} {{readonlyinline}}
  - : Returns the type of error raised.
- {{domxref("SpeechRecognitionError.message")}} {{readonlyinline}}
  - : Returns a message describing the error in more detail.

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onerror = function(event) {
  console.log('Speech recognition error detected: ' + event.error);
  console.log('Additional information: ' + event.message);
}
```

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
