---
title: "RTCIceTransport: component property"
short-title: component
slug: Web/API/RTCIceTransport/component
page-type: web-api-instance-property
browser-compat: api.RTCIceTransport.component
---

{{APIRef("WebRTC")}}

The **`component`** read-only property of the {{domxref("RTCIceTransport")}} interface specifies whether the object is serving to transport {{Glossary("RTP")}} or {{Glossary("RTCP")}}.

## Value

A string which is one of the following:

- `rtp`
  - : Identifies an ICE transport which is being used for the [Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP), or for RTP multiplexed with the RTP Control Protocol (RTCP). RTP is defined in {{RFC(3550)}}. This value corresponds to the component ID field in the `candidate` a-line with the value 1.
- `rtcp`
  - : Identifies an ICE transport being used for RTCP, which is defined in {{RFC(3550, "", 6)}}. This value corresponds to the component ID 2.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
