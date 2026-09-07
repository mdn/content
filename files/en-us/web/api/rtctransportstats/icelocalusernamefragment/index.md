---
title: "RTCTransportStats: iceLocalUsernameFragment property"
short-title: iceLocalUsernameFragment
slug: Web/API/RTCTransportStats/iceLocalUsernameFragment
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_transport.iceLocalUsernameFragment
---

{{APIRef("WebRTC")}}

The **`iceLocalUsernameFragment`** property of the {{domxref("RTCTransportStats")}} dictionary is a string that indicates the local username fragment ("ufrag" or "ice-ufrag") that uniquely identifies the ICE interaction session managed by this transport.

The same username fragment is used to identify the session for any communication with the STUN server.

This has the same values as the corresponding local {{domxref("RTCIceCandidate.usernameFragment")}} property.
It will change if the connection is renegotiated, for example on ICE restart, or if {{domxref("RTCPeerConnection.setLocalDescription()")}} is called.

## Value

A string containing the username fragment that uniquely identifies the ongoing ICE session on the transport.

The string may be up to 256 characters long, and has no default value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
