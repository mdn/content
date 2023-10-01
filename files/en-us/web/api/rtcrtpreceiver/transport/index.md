---
title: "RTCRtpReceiver: transport property"
short-title: transport
slug: Web/API/RTCRtpReceiver/transport
page-type: web-api-instance-property
browser-compat: api.RTCRtpReceiver.transport
---

{{DefaultAPISidebar("WebRTC")}}

The read-only **`transport`** property of an
{{domxref("RTCRtpReceiver")}} object provides the {{domxref("RTCDtlsTransport")}} object
used to interact with the underlying transport over which the receiver is exchanging
Real-time Transport Control Protocol ({{Glossary("RTCP")}}) packets.

This transport is responsible for receiving the data for the media on the receiver's
{{domxref("RTCRtpReceiver.track", "track")}}.

## Syntax

```js-nolint
rtcRtpReceiver.transport
```

### Value

An {{domxref("RTCDtlsTransport")}} object representing the underlying transport being
used by the receiver to exchange packets with the remote peer, or `null` if
the receiver isn't yet connected to a transport.

## Description

When the `RTCRtpReceiver` is first created, the value of
`transport` is `null`. This is replaced with an
`RTCDtlsTransport` once the receiver's transport has been established.

Note that when bundling is in effect—that is, when the {{domxref("RTCPeerConnection")}}
was created with a configuration object whose `bundlePolicy` is `max-compat`
or `max-bundle`—multiple receivers may be sharing the same transport; in this
case, all of them are using the same connection to transmit and/or receive
{{Glossary("RTP")}} and {{Glossary("RTCP")}} packets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
