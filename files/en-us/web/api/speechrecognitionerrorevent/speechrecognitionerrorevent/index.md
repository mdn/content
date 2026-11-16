---
title: "SpeechRecognitionErrorEvent: SpeechRecognitionErrorEvent() constructor"
short-title: SpeechRecognitionErrorEvent()
slug: Web/API/SpeechRecognitionErrorEvent/SpeechRecognitionErrorEvent
page-type: web-api-constructor
browser-compat: api.SpeechRecognitionErrorEvent.SpeechRecognitionErrorEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionErrorEvent()`** constructor creates a new
{{domxref("SpeechRecognitionErrorEvent")}} object instance.

## Syntax

```js-nolint
new SpeechRecognitionErrorEvent(type, init)
```

### Parameters

- `type`
  - : A string containing the name of the event. This will always be `error`.
- `init`
  - : An initialization object that contains the following properties:
    - `error`
      - : An enumerated value representing the type of error. See the [possible `error` values](/en-US/docs/Web/API/SpeechRecognitionErrorEvent/error#value).
    - `message` {{optional_inline}}
      - : A string containing more details about the error that was raised. Note that the specification does not define the exact wording of these messages — implementers must define their own wording.

## Examples

You would be unlikely to construct a `SpeechRecognitionErrorEvent` instance manually. Such instances are available as event objects inside `error` event handler functions.

For example:

```js
const recognition = new SpeechRecognition();

recognition.addEventListener("error", (event) => {
  console.log(`Speech recognition error detected: ${event.error}`);
  console.log(`Additional information: ${event.message}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
