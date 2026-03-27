---
title: "SpeechRecognitionEvent: SpeechRecognitionEvent() constructor"
short-title: SpeechRecognitionEvent()
slug: Web/API/SpeechRecognitionEvent/SpeechRecognitionEvent
page-type: web-api-constructor
browser-compat: api.SpeechRecognitionEvent.SpeechRecognitionEvent
---

{{APIRef("Web Speech API")}}

The **`SpeechRecognitionEvent()`** constructor creates a new
{{domxref("SpeechRecognitionEvent")}} object instance.

## Syntax

```js-nolint
new SpeechRecognitionEvent(type, init)
```

### Parameters

- `type`
  - : A string containing the name of the event. This will be `result` or `nomatch`, depending on the event that created the instance.
- `init`
  - : An initialization object that contains the following properties:
    - `resultIndex` {{optional_inline}}
      - : A number representing the lowest index value result in the {{domxref("SpeechRecognitionResultList")}} instance that has actually changed.
    - `results`
      - : A {{domxref("SpeechRecognitionResultList")}} object representing all the speech recognition results returned in the associated event.

## Examples

You would be unlikely to construct a `SpeechRecognitionEvent` instance manually. Such instances are available as event objects inside `result` and `nomatch` event handler functions.

For example:

```js
recognition.addEventListener("result", (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
