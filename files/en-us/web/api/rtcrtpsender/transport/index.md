---
title: "RTCRtpSender: transport property"
short-title: transport
slug: Web/API/RTCRtpSender/transport
page-type: web-api-instance-property
browser-compat: api.RTCRtpSender.transport
---

{{APIRef("WebRTC")}}

The read-only **`transport`** property of an
{{domxref("RTCRtpSender")}} object provides the {{domxref("RTCDtlsTransport")}} object
used to interact with the underlying transport over which the sender is exchanging
Real-time Transport Control Protocol ({{Glossary("RTCP")}}) packets.

This transport is responsible for receiving the data for the media on the sender's
{{domxref("RTCRtpReceiver.track", "track")}}.

## Value

An {{domxref("RTCDtlsTransport")}} object representing the underlying transport being
used by the sender to exchange packets with the remote peer, or `null` if the
sender isn't yet connected to a transport.

## Description

When the `RTCRtpSender` is first created, the value of
`transport` is `null`. This is replaced with an
`RTCDtlsTransport` once the sender's transport has been established.

Note that when bundling is in effect—that is, when the {{domxref("RTCPeerConnection")}}
was created with a configuration object whose `bundlePolicy` is `max-compat`
or `max-bundle`—multiple senders may be sharing the same transport; in this
case, all of them are using the same connection to transmit and/or receive
{{Glossary("RTP")}} and {{Glossary("RTCP")}} packets.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
