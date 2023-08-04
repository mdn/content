---
title: RTCRtpReceiver
slug: Web/API/RTCRtpReceiver
page-type: web-api-interface
browser-compat: api.RTCRtpReceiver
---

{{APIRef("WebRTC")}}

The **`RTCRtpReceiver`** interface of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) manages the reception and decoding of data for a {{domxref("MediaStreamTrack")}} on an {{domxref("RTCPeerConnection")}}.

## Instance properties

- {{domxref("RTCRtpReceiver.track")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("MediaStreamTrack")}} associated with the current `RTCRtpReceiver` instance.
- {{domxref("RTCRtpReceiver.transport")}} {{ReadOnlyInline}}
  - : Returns the {{domxref("RTCDtlsTransport")}} instance over which the media for the receiver's track is received.

### Obsolete properties

- `rtcpTransport` {{deprecated_inline}}
  - : This property has been removed; the RTP and RTCP transports have been combined into a single transport. Use the {{domxref("RTCRtpReceiver.transport", "transport")}} property instead.

## Static methods

- {{domxref("RTCRtpReceiver.getCapabilities()")}}
  - : Returns the most optimistic view of the capabilities of the system for receiving media of the given kind.

## Instance methods

- {{domxref("RTCRtpReceiver.getContributingSources()")}}
  - : Returns an array of {{domxref("RTCRtpContributingSource")}} instances for each unique CSRC (contributing source) identifier received by the current `RTCRtpReceiver` in the last ten seconds.
- {{domxref("RTCRtpReceiver.getParameters()")}}
  - : Returns an object that contains information about how the RTC data is to be decoded.
- {{domxref("RTCRtpReceiver.getStats()")}}
  - : Returns a {{jsxref("Promise")}} whose fulfillment handler receives a {{domxref("RTCStatsReport")}} which contains statistics about the incoming streams and their dependencies.
- {{domxref("RTCRtpReceiver.getSynchronizationSources()")}}
  - : Returns an array including one `RTCRtpSynchronizationSource` instance for each unique SSRC (synchronization source) identifier received by the current `RTCRtpReceiver` in the last ten seconds.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCStatsReport")}}
- {{domxref("RTCRtpSender")}}
- {{domxref("RTCPeerConnection.getStats()")}}
