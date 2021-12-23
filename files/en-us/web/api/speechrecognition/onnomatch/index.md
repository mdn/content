---
title: SpeechRecognition.onnomatch
slug: Web/API/SpeechRecognition/onnomatch
tags:
  - API
  - Property
  - Reference
  - SpeechRecognition
  - Web Speech API
  - onnomatch
  - recognition
  - speech
browser-compat: api.SpeechRecognition.onnomatch
---
{{APIRef("Web Speech API")}}

The **`onnomatch`** property of the
{{domxref("SpeechRecognition")}} interface represents an event handler that will run
when the speech recognition service returns a final result with no significant
recognition (when the
[`nomatch`](/en-US/docs/Web/API/SpeechRecognition/nomatch_event)
event fires.)

This may involve some degree of recognition, which doesn't meet or exceed the
{{domxref("SpeechRecognitionAlternative.confidence","confidence")}} threshold.

> **Note:** The `onnomatch` handler does not yet work properly
> in Firefox — the speech recognition system always returns a positive match, and then
> guesses at what item in the grammar it found. This is being worked on.

## Syntax

```js
mySpeechRecognition.onnomatch = function() { /* ... */ };
```

## Examples

```js
var recognition = new SpeechRecognition();

recognition.onnomatch = function() {
  console.log('Speech not recognized');
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
