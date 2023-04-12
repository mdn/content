---
title: "RTCIceCandidate: component property"
short-title: component
slug: Web/API/RTCIceCandidate/component
page-type: web-api-instance-property
browser-compat: api.RTCIceCandidate.component
---

{{APIRef("WebRTC")}}

The read-only **`component`** property
on the {{domxref("RTCIceCandidate")}} interface is a string which indicates whether
the candidate is an [RTP](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP) or
an RTCP candidate.

If a candidate represents both RTP and RTCP multiplexed together, it is reported as an
RTP candidate.

## Value

A string which is one of the following:

- `rtp`
  - : Identifies an ICE transport which is being used for the [Real-time Transport Protocol](/en-US/docs/Web/API/WebRTC_API/Intro_to_RTP) (RTP), or for RTP multiplexed with the RTP Control Protocol (RTCP). RTP is defined in {{RFC(3550)}}. This value corresponds to the component ID field in the `candidate` a-line with the value 1.
- `rtcp`
  - : Identifies an ICE transport being used for RTCP, which is defined in {{RFC(3550, "", 6)}}. This value corresponds to the component ID 2.

## Usage notes

Consider this {{Glossary("SDP")}} attribute line (a-line):

```
a=candidate:4234997325 1 udp 2043278322 192.168.0.56 44323 typ host
```

This is an ICE candidate a-line, whose {{domxref("RTCIceCandidate.foundation",
  "foundation")}} is 4234997325. The next field on the a-line, `"1"`, is the
component ID. A value of `"1"` indicates RTP, which is recorded in the
`component` property as `"rtp"`. If this value were instead
`"2"`, the a-line would be describing an RTCP candidate, and
`component` would be `"rtcp"`.

## Examples

This code snippet examines a candidate's component type and dispatches the candidate to
different handlers depending on the value.

```js
if (candidate.component === "rtp") {
  handleRTPCandidate(candidate);
} else if (candidate.component === "rtcp") {
  handleRTCPCandidate(candidate);
} else {
  handleUnknownCandidate(candidate);
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
