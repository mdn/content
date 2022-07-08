---
title: RTCRtpParameters
slug: Web/API/RTCRtpParameters
page-type: web-api-interface
tags:
  - API
  - Configuration
  - Dictionary
  - Media
  - Negotiation
  - Options
  - RTCRtpParameters
  - RTP
  - Reference
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - parameters
browser-compat: api.RTCRtpParameters
---
{{DefaultAPISidebar("WebRTC")}}

The **`RTCRtpParameters`** dictionary is the basic object describing the parameters of an {{Glossary("RTP")}} transport. It is extended separately for senders and receivers in the form of the {{domxref("RTCRtpSendParameters")}} and {{domxref("RTCRtpReceiveParameters")}} dictionaries.

To obtain the parameters of a sender or receiver, call its `getParameters()` method:

- {{domxref("RTCRtpSender.getParameters", "getParameters()")}}
- {{domxref("RTCRtpReceiver.getParameters", "getParameters()")}}

## Properties

- {{domxref("RTCRtpParameters.codecs", "codecs")}}
  - : An array of {{domxref("RTCRtpCodecParameters")}} objects describing the set of codecs from which the sender or receiver will choose. This parameter cannot be changed once initially set.
- {{domxref("RTCRtpParameters.headerExtensions", "headerExtensions")}}
  - : An array of zero or more RTP header extensions, each identifying an extension supported by the sender or receiver. Header extensions are described in {{RFC(3550, "", "5.3.1")}}. This parameter cannot be changed once initially set.
- {{domxref("RTCRtpParameters.rtcp", "rtcp")}}
  - : An {{domxref("RTCRtcpParameters")}} object providing the configuration parameters used for {{Glossary("RTCP")}} on the sender or receiver. This parameter cannot be changed once initially set.

## Examples

This example obtains the canonical name (CNAME) being used for {{Glossary("RTCP")}} on an {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}}.

```js
function getRtpCNAME(rtpObject) {
  let parameters = rtpObject.getParameters();

  return parameters.rtcp.cname;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
