---
title: SpeechRecognitionEvent.interpretation
slug: Web/API/SpeechRecognitionEvent/interpretation
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognitionEvent
  - Web Speech API
  - interpretation
  - recognition
  - speech
browser-compat: api.SpeechRecognitionEvent.interpretation
---
{{APIRef("Web Speech API")}}{{deprecated_header}}

The **`interpretation`** read-only property of the
{{domxref("SpeechRecognitionEvent")}} interface returns the semantic meaning of what the
user said.

This might be determined, for instance, through the SISR specification of semantics in
a grammar (see [Semantic
Interpretation for Speech Recognition (SISR) Version 1.0](https://www.w3.org/TR/semantic-interpretation/) for specification and
examples.)

## Syntax

```js
var myInterpretation = event.interpretation;
```

### Value

The returned value can be of any type. If no semantic interpretation has been returned
by the speec recognition system, `null` will be returned.

## Examples

```js
recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color + '.';
  bg.style.backgroundColor = color;
  console.log(event.interpretation);
}
```

## Browser compatibility

{{Compat}}

### Firefox OS permissions

To use speech recognition in an app, you need to specify the following permissions in
your [manifest](/en-US/docs/Web/Apps/Build/Manifest):

```json
"permissions": {
  "audio-capture" : {
    "description" : "Audio capture"
  },
  "speech-recognition" : {
    "description" : "Speech recognition"
  }
}
```

You also need a privileged app, so you need to include this as well:

```json
  "type": "privileged"
```

## See also

- [Web Speech API](/en-US/docs/Web/API/Web_Speech_API)
