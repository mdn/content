---
title: RTCConfiguration.bundlePolicy
slug: Web/API/RTCConfiguration/bundlePolicy
tags:
  - API
  - BUNDLE
  - Configuration
  - DTLS
  - Negotiation
  - Property
  - RTCConfiguration
  - RTCPeerConnection
  - RTP
  - Reference
  - SDP
  - WebRTC
  - WebRTC API
  - WebRTC Device API
  - bundlePolicy
browser-compat: api.RTCConfiguration.bundlePolicy
---
{{DefaultAPISidebar("WebRTC")}}

The {{domxref("RTCConfiguration")}} dictionary's
**`bundlePolicy`** property is a string value indicating which
SDP bundling policy, if any, to use for the underlying {{Glossary("RTP")}} streams used
by an {{domxref("RTCPeerConnection")}}.

The configuration object is used as an input to the
{{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} constructor.

## Syntax

```js
let rtcConfiguration = {
  bundlePolicy: policy
};

rtcConfiguration.bundlePolicy = policy;
```

### Value

A {{domxref("DOMString")}} identifying the SDP bundling policy to use for the RTP
streams used by the {{domxref("RTCPeerConnection")}}.
This string has the following possible values:

- `balanced`
  - : The ICE agent begins by creating one {{domxref("RTCDtlsTransport")}} to handle each
    type of content added: one for audio, one for video, and one for the RTC data channel,
    if applicable. If the remote peer isn't BUNDLE-aware, the ICE agent chooses one audio
    track and one video track and those two tracks are each assigned to the corresponding
    `RTCDtlsTransport`. All other tracks are ignored by the connection.
    **This is the default, and most compatible, policy.**
- `max-compat`
  - : The ICE agent intially creates one `RTCDtlsTransport` for each media
    track and a separate one for the {{domxref("RTCDataChannel")}}, if one is created. If
    the remote endpoint can't handle bundling, each media track is negotiated on its own
    separate transport. This introduces bundling but will fall back to not bundling if the
    remote peer can't handle it.
- `max-bundle`
  - : The ICE agent starts by creating a single {{domxref("RTCDtlsTransport")}} to handle
    _all_ of the connection's media. If the remote peer isn't bundle-compatible,
    only one media track is negotiated and the rest are ignored. This maximizes bundling
    at the risk of losing tracks if the remote peer can't do bundling.

If any other value is specified, no configuration is specified when creating the
{{domxref("RTCPeerConnection")}}, or if the `bundlePolicy` property isn't
included in the {{domxref("RTCConfiguration")}} object specified when creating the
connection, `balanced` is assumed.

## Description

The `bundlePolicy` configuration option for an
{{domxref("RTCPeerConnection")}} specifies how the ICE agent should handle negotiation
if the remote peer isn't compatible with the [SDP BUNDLE
standard](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-sdp-bundle-negotiation). If the remote peer _is_ bundle compatible, the policy is moot and
all media tracks and the data channel are bundled onto a single
{{domxref("RTCDtlsTransport")}} at the completion of the negotiation process. Any other
transports that were used during negotiation are then closed.

In technical terms, an SDP BUNDLE lets all of the media tracks (identified in the SDP
from the `m=` lines) stream between two peers across a single
**5-tuple**, that is, from a single IP and port on one peer to a single IP
and port on another peer, all using the same {{domxref("RTCDtlsTransport")}}.

The goal of bundling is to optimize performance by reducing the overhead of having
multiple transports in play. The fewer RTP transports or bundles of RTP streams you
have, the better the network performance will be.

> **Note:** All current major browsers are BUNDLE compatible.

## Examples

The following example creates a new {{domxref("RTCPeerConnection")}} with a
configuration setting the connection's `bundlePolicy` to
`max-compat` to maximize compatibility while attempting to optimize network
use. It also specifies `stun:stun.example.com` as the {{Glossary("STUN")}}
server for {{Glossary("ICE")}} to use during negotiation.

```js
let config = {
  iceServers: [
    {
      urls: [ "stun:stun.example.com" ]
    },
  ],
  bundlePolicy: "max-compat"
};

let pc = new RTCPeerConnection(config);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [SDP
  BUNDLE draft specification](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-sdp-bundle-negotiation)
