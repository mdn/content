---
title: RTCRtpSender
slug: Web/API/RTCRtpSender
page-type: web-api-interface
browser-compat: api.RTCRtpSender
---

{{APIRef("WebRTC")}}

The **`RTCRtpSender`** interface provides the ability to control and obtain details about how a particular {{domxref("MediaStreamTrack")}} is encoded and sent to a remote peer.

With it, you can configure the encoding used for the corresponding track, get information about the device's media capabilities, and so forth. You can also obtain access to an {{domxref("RTCDTMFSender")}} which can be used to send {{Glossary("DTMF")}} codes (to simulate the user pressing buttons on a telephone's dial pad) to the remote peer.

## Instance properties

- {{domxref("RTCRtpSender.dtmf")}} {{ReadOnlyInline}}
  - : An {{domxref("RTCDTMFSender")}} which can be used to send {{Glossary("DTMF")}} tones using `telephone-event` payloads on the {{Glossary("RTP")}} session represented by the `RTCRtpSender` object. If `null`, the track and/or the connection doesn't support DTMF. Only audio tracks can support DTMF.
- {{domxref("RTCRtpSender.track")}} {{ReadOnlyInline}}
  - : The {{domxref("MediaStreamTrack")}} which is being handled by the `RTCRtpSender`. If `track` is `null`, the `RTCRtpSender` doesn't transmit anything.
- {{domxref("RTCRtpSender.transport")}} {{ReadOnlyInline}}
  - : The {{domxref("RTCDtlsTransport")}} over which the sender is exchanging the RTP and RTCP packets used to manage transmission of media and control data. This value is `null` until the transport is established. When bundling is in use, more than transceiver may be sharing the same transport object.

### Obsolete properties

- `rtcpTransport` {{deprecated_inline}}
  - : This property has been removed; the RTP and RTCP transports have been combined into a single transport. Use the {{domxref("RTCRtpSender.transport", "transport")}} property instead.

## Static methods

- {{domxref("RTCRtpSender.getCapabilities()")}}
  - : Returns an object describing the system's capabilities for sending a specified kind of media data.

## Instance methods

- {{domxref("RTCRtpSender.getParameters()")}}
  - : Returns an object describing the current configuration for the encoding and transmission of media on the `track`.
- {{domxref("RTCRtpSender.getStats()")}}
  - : Returns a {{jsxref("Promise")}} which is fulfilled with a {{domxref("RTCStatsReport")}} which provides statistics data for all outbound streams being sent using this `RTCRtpSender`.
- {{domxref("RTCRtpSender.setParameters()")}}
  - : Applies changes to parameters which configure how the `track` is encoded and transmitted to the remote peer.
- {{domxref("RTCRtpSender.setStreams()")}}
  - : Sets the {{domxref("MediaStream")}}(s) associated with the {{domxref("RTCRtpSender.track", "track")}} being transmitted by this sender.
- {{domxref("RTCRtpSender.replaceTrack()")}}
  - : Attempts to replace the track currently being sent by the `RTCRtpSender` with another track, without performing renegotiation. This method can be used, for example, to toggle between the front- and rear-facing cameras on a device.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- WebRTC API
- {{domxref("RTCPeerConnection.addTrack()")}}
- {{domxref("RTCPeerConnection.getSenders()")}}
- {{domxref("RTCRtpReceiver")}}
