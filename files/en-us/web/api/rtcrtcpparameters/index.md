---
title: RTCRtcpParameters
slug: Web/API/RTCRtcpParameters
page-type: web-api-interface
tags:
  - API
  - Configuration
  - Dictionary
  - Media
  - Options
  - RTCP
  - RTCRtcpParameters
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - parameters
browser-compat: api.RTCRtcpParameters
---
{{DefaultAPISidebar("WebRTC")}}

The **`RTCRtcpParameters`** dictionary provides parameters of an {{Glossary("RTCP")}} connection. It's used as the value of the {{domxref("RTCRtpParameters.rtcp", "rtcp")}} property of the [parameters](/en-US/docs/Web/API/RTCRtpParameters) of an {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}}.

## Properties

- {{domxref("RTCRtcpParameters.cname", "cname")}}
  - : The Canonical Name (CNAME) being used by RTCP. This is used, for example, in SDES (SDP security descriptions) messages, described in {{RFC(4568)}}. This property cannot be changed once initialized.
- {{domxref("RTCRtcpParameters.reducedSize", "reducedSize")}}
  - : A Boolean value indicating whether or not reduced size RTCP is configured. If this value is `true`, reduced size RTCP (described in {{RFC(5506)}}) is in effect. If `false`, compound RTCP is in use, as found in {{RFC(3550)}}. This property cannot be changed once initialized.

## Examples

This example obtains the canonical name (CNAME) being used for RTCP on an {{domxref("RTCRtpSender")}} or {{domxref("RTCRtpReceiver")}}.

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
