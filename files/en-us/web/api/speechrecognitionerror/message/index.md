---
title: SpeechRecognitionError.message
slug: Web/API/SpeechRecognitionError/message
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognitionError
  - Web Speech API
  - message
  - recognition
  - speech
browser-compat: api.SpeechRecognitionError.message
---
{{APIRef("Web Speech API")}}{{deprecated_header}}

The **`message`** read-only property of the
{{domxref("SpeechRecognitionError")}} interface returns a message describing the error
in more detail.

> **Note:** This `SpeechRecognitionError` interface was renamed to
> {{domxref("SpeechRecognitionErrorEvent")}} in the Web Speech API specification.

## Syntax

```js
var myErrorMsg = event.message;
```

### Value

A {{domxref("DOMString")}} containing more details about the error that was raised.
Note that the spec does not define the exact wording of these messages — this is up to
the implementors to decide upon.

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
