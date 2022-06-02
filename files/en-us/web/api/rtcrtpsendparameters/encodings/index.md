---
title: RTCRtpSendParameters.encodings
slug: Web/API/RTCRtpSendParameters/encodings
page-type: web-api-instance-property
tags:
  - API
  - Codec
  - Configuration
  - Media
  - RTCRtpSendParameters
  - RTCRtpSender
  - RTP
  - Reference
  - Settings
  - WebRTC
  - WebRTC API
  - encodings
  - parameters
  - rtc
  - sender
browser-compat: api.RTCRtpSendParameters.encodings
---
{{APIRef("WebRTC")}}

The {{domxref("RTCRtpSendParameters")}} dictionary's
**`encodings`** property is an
{{domxref("RTCRtpEncodingParameters")}} object providing configuration settings for the
encoder being used for the {{domxref("RTCRtpSender")}}'s {{domxref("RTCRtpSender.track",
  "track")}}.

## Syntax

```js
sendParameters.encodings = encodingParameterList;

encodingParameterList = sendParameters.encodings;
```

### Value

An array of objects conforming to the {{domxref("RTCRtpEncodingParameters")}}
dictionary, each of which contains properties which provide settings and parameters that
describe and configure the codec used for a single destination.

## Description

In a connection in which there's only one remote peer, the `encodings` array
will have just one object in it, describing the encoding to use when transmitting to
that peer. For each peer you add the {{domxref("RTCRtpSender")}} to, another entry is
added to `encodings` to describe its configuration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
