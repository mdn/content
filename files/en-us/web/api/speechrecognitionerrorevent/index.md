---
title: SpeechRecognitionErrorEvent
slug: Web/API/SpeechRecognitionErrorEvent
page-type: web-api-interface
browser-compat: api.SpeechRecognitionErrorEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionErrorEvent`** interface of the [Web Speech API](/en-US/docs/Web/API/Web_Speech_API) represents error messages from the recognition service.

{{InheritanceDiagram}}

## Instance properties

_`SpeechRecognitionErrorEvent` also inherits properties from its parent interface, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionErrorEvent.error")}} {{ReadOnlyInline}}
  - : Returns the type of error raised.
- {{domxref("SpeechRecognitionErrorEvent.message")}} {{ReadOnlyInline}}
  - : Returns a message describing the error in more detail.

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
