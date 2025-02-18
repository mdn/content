---
title: "RTCOutboundRtpStreamStats: scalabilityMode property"
short-title: scalabilityMode
slug: Web/API/RTCOutboundRtpStreamStats/scalabilityMode
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_outbound-rtp.scalabilityMode
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`scalabilityMode`** property of the {{domxref("RTCOutboundRtpStreamStats")}} dictionary represents the scalability mode for the RTP stream, if one has been configured.
If not configured, the property is undefined.

The mode is used in [Scalable Video Coding (SVC)](https://www.w3.org/TR/webrtc-svc/) to define how define how a video stream may be encoded to allow for adaptation to different network conditions and receiver capabilities.
Different codecs allow for various kinds of scalability, such as providing different resolution, different frame rates, or different quality levels for a particular video.

The mode may be configured, for example, by specifying the scalability mode as a parameter option in {{domxref("VideoEncoder.configure()")}}, {{domxref("RTCRtpSender.setParameters()")}}, or {{domxref("RTCPeerConnection.addTransceiver()")}}.

> [!NOTE]
> The property is undefined for audio streams.

## Value

A string indicating the configured scalability mode, such as "L1T1".
If no mode has been configured, the property is undefined.

The set of allowed modes are defined in [Scalable Video Coding (SVC) Extension for WebRTC](https://w3c.github.io/webrtc-svc/#scalabilitymodes*) (w3c.github.io/webrtc-svc).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
