---
title: "RTCTransformEvent: transformer property"
short-title: transformer
slug: Web/API/RTCTransformEvent/transformer
page-type: web-api-instance-property
browser-compat: api.RTCTransformEvent.transformer
---

{{APIRef("WebRTC")}}

The read-only **`transformer`** property of the {{domxref("RTCTransformEvent")}} interface indicates ...

the
{{domxref("RTCRtpReceiver")}} which is used to receive data containing media for the
{{domxref("RTCTransformEvent.track", "track")}} to which the event refers.

## Value

The {{domxref("RTCRtpTransceiver")}} which pairs the `receiver` with a
sender and other properties which establish a single bidirectional {{Glossary("RTP", "SRTP")}}
stream for use by the {{domxref("RTCTrackEvent.track", "track")}} associated with the
`RTCTrackEvent`.

> **Note:** The {{domxref("RTCTrackEvent.transceiver", "transceiver")}}
> includes its own {{domxref("RTCRtpTransceiver.receiver", "receiver")}} property, which
> will always be the same {{domxref("RTCRtpReceiver")}} as this one.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
