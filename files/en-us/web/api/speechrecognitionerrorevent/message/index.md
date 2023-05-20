---
title: "SpeechRecognitionErrorEvent: message property"
short-title: message
slug: Web/API/SpeechRecognitionErrorEvent/message
page-type: web-api-instance-property
browser-compat: api.SpeechRecognitionErrorEvent.message
---

{{APIRef("Web Speech API")}}

The **`message`** read-only property of the
{{domxref("SpeechRecognitionErrorEvent")}} interface returns a message describing the
error in more detail.

## Value

A string containing more details about the error that was raised.
Note that the spec does not define the exact wording of these messages — this is up to
the implementors to decide upon.

## Examples

```js
const recognition = new SpeechRecognition();

recognition.onerror = (event) => {
  console.log(`Speech recognition error detected: ${event.error}`);
  console.log(`Additional information: ${event.message}`);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
