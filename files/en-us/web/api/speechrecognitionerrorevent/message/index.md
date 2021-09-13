---
title: SpeechRecognitionErrorEvent.message
slug: Web/API/SpeechRecognitionErrorEvent/message
tags:
  - API
  - Experimental
  - Property
  - Reference
  - SpeechRecognitionErrorEvent
  - Web Speech API
  - message
  - recognition
  - speech
browser-compat: api.SpeechRecognitionErrorEvent.message
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

The **`message`** read-only property of the
{{domxref("SpeechRecognitionErrorEvent")}} interface returns a message describing the
error in more detail.

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

## Specifications

{{Specifications}}

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
