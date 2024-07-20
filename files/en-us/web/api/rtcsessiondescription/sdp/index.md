---
title: "RTCSessionDescription: sdp property"
short-title: sdp
slug: Web/API/RTCSessionDescription/sdp
page-type: web-api-instance-property
browser-compat: api.RTCSessionDescription.sdp
---

{{APIRef("WebRTC")}}

The property **`RTCSessionDescription.sdp`** is a read-only
string containing the {{Glossary("SDP")}} which describes the session.

## Syntax

```js-nolint
const value = sessionDescription.sdp
sessionDescription.sdp = value
```

### Value

The value is a string containing an SDP message like this one:

```plain
v=0
o=alice 2890844526 2890844526 IN IP4 host.anywhere.com
s=
c=IN IP4 host.anywhere.com
t=0 0
m=audio 49170 RTP/AVP 0
a=rtpmap:0 PCMU/8000
m=video 51372 RTP/AVP 31
a=rtpmap:31 H261/90000
m=video 53000 RTP/AVP 32
a=rtpmap:32 MPV/90000
```

## Example

```js
// The remote description has been set previously on pc, an RTCPeerConnection

alert(pc.remoteDescription.sdp);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- The standard for using SDP in an offer/answer protocol {{rfc("3264")}}.
