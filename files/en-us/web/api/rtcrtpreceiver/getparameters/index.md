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

The **`getParameters()`** method of the {{domxref("RTCRtpReceiver")}} interface returns an object describing the current configuration for the encoding and transmission of media on the receiver's {{domxref("RTCRtpReceiver.track", "track")}}.

## Syntax

```js-nolint
getParameters()
```

### Parameters

None.

### Return value

An object indicating the current configuration of the receiver. <!-- RTCRtpReceiveParameters in spec -->

- `codecs`
  - : An array of {{domxref("RTCRtpCodecParameters")}} objects describing the set of codecs from which the receiver will choose.
    This parameter cannot be changed once initially set.
- `headerExtensions`
  - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender or receiver.
    Header extensions are described in {{RFC(3550, "", "5.3.1")}}. This parameter cannot be changed once initially set.
- `rtcp`
  - : An {{domxref("RTCRtcpParameters")}} object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender or receiver.
    This parameter cannot be changed once initially set.
- `degradationPreference` {{deprecated_inline}} {{optional_inline}}
  - : Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations; the possible values are `maintain-framerate`, `maintain-resolution`, or `balanced`.
    The default value is `balanced`.

## Examples

This example obtains the canonical name (CNAME) being used for {{Glossary("RTCP")}} on an {{domxref("RTCRtpReceiver")}}.

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
