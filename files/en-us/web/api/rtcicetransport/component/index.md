---
title: RTCIceTransport.component
slug: Web/API/RTCIceTransport/component
tags:
  - API
  - ICE
  - Media
  - Property
  - RTCIceTransport
  - RTCP
  - RTP
  - Read-only
  - Reference
  - Transport
  - Video
  - WebRTC
  - WebRTC API
  - component
browser-compat: api.RTCIceTransport.component
---
{{APIRef("WebRTC")}}

The read-only **{{domxref("RTCIceTransport")}}**
property **`component`** specifies whether the object is
serving to transport {{Glossary("RTP")}} or {{Glossary("RTCP")}}.

## Syntax

```js
iceComponent = RTCIceTransport.component;
```

### Value

A string which is one of the following:

- `rtp`
  - : Identifies an ICE transport which is being used for the [Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP), or for RTP multiplexed with the RTP Control Protocol (RTCP). RTP is defined in {{RFC(3550)}}. This value corresponds to the component ID field in the `candidate` a-line with the value 1.
- `rtcp`
  - : Identifies an ICE transport being used for RTCP, which is defined in {{RFC(3550, "", 6)}}. This value corresponds to the component ID 2.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
