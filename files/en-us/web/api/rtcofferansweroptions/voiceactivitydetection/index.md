---
title: RTCOfferAnswerOptions.voiceActivityDetection
slug: Web/API/RTCOfferAnswerOptions/voiceActivityDetection
tags:
  - Audio
  - Configuration
  - Offer
  - Options
  - Property
  - RTCOfferAnswerOptions
  - RTCPeerConnection
  - Reference
  - SDP
  - Voice
  - WebRTC
  - WebRTC API
  - answer
  - detection
browser-compat: api.RTCOfferAnswerOptions.voiceActivityDetection
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The **`voiceActivityDetection`** property of the
**{{domxref("RTCOfferAnswerOptions")}}** dictionary is used to specify
whether or not to use automatic voice detection for the audio on an
{{domxref("RTCPeerConnection")}}. The default value, `true`, indicates that
voice detection should be used and that if possible, the {{Glossary("user agent")}}
should automatically disable or mute outgoing audio when the audio source is not sensing
a human voice.

## Syntax

```js
var options = {
  voiceActivityDetection: trueOrFalse
};
```

### Value

A Boolean value indicating whether or not the connection should use voice detection
once running. The default value, `true`, indicates that the {{Glossary("user
  agent")}} should monitor the audio coming from the microphone or other audio source and
automatically cease transmitting data or mute when the user isn't speaking into the
microphone,

A value of `false` indicates that the audio should continue to be
transmitted regardless of whether or not speech is detected.

## Browser compatibility

{{Compat}}
