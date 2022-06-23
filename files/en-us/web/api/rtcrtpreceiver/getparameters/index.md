---
title: RTCRtpReceiver.getParameters()
slug: Web/API/RTCRtpReceiver/getParameters
page-type: web-api-instance-method
tags:
  - API
  - Configuration
  - Media
  - Method
  - Options
  - RTCRtpReceiver
  - RTP
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - getParameters
  - parameters
  - rtc
browser-compat: api.RTCRtpReceiver.getParameters
---
{{APIRef("WebRTC API")}}

The **`getParameters()`** method of
the {{domxref("RTCRtpReceiver")}} interface returns an
{{domxref("RTCRtpReceiveParameters")}} object describing the current configuration for
the encoding and transmission of media on the receiver's
{{domxref("RTCRtpReceiver.track", "track")}}.

## Syntax

```js
getParameters()
```

### Parameters

None.

### Return value

An {{domxref("RTCRtpReceiveParameters")}} object indicating the current configuration
of the receiver.

## Examples

This example obtains the canonical name (CNAME) being used for {{Glossary("RTCP")}} on
an {{domxref("RTCRtpReceiver")}}.

```js
function getRtcpCNAME(receiver) {
  let parameters = receiver.getParameters();

  return parameters.rtcp.cname;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
