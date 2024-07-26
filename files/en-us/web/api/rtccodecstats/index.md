---
title: RTCCodecStats
slug: Web/API/RTCCodecStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_codec
---

{{DefaultAPISidebar("WebRTC")}}

The **`RTCCodecStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides statistics about a codec used by {{Glossary("RTP")}} streams that are being sent or received by the associated {{domxref("RTCPeerConnection")}} object.

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} object returned by {{domxref("RTCPeerConnection.getStats()")}} until you find an entry with the [`type`](#type) of `codec`.

The codec statistics can be correlated with the inbound or outbound stream statistics (both local and remote) by matching their `codecId` property to the codec's `id`.
For example, if [`RTCInboundRtpStreamStats.codecId`](/en-US/docs/Web/API/RTCInboundRtpStreamStats#codecid) matches an [`RTCCodecStats.id`](#id) in the same report, then we know that the codec is being used on this peer connection's inbound stream.
If no stream `codecId` references a codec statistic, then that codec statistic object is deleted — if the codec is used again, the statistics object will be recreated with the same `id`.

Codec objects may be referenced by multiple RTP streams in media sections using the same transport.
In fact, user agents are expected to consolidate information into a single "codec" entry per payload type per transport (unless [sdpFmtpLine](#sdpfmtpline) is different when sending or receiving, in which case, different codecs will be needed for encoding and decoding).
Note that other transports will use their own distinct `RTCCodecStats` objects.

## Instance properties

- {{domxref("RTCCodecStats.channels", "channels")}} {{optional_inline}}
  - : A positive number indicating the number of channels supported by the codec.
- {{domxref("RTCCodecStats.clockRate", "clockRate")}} {{optional_inline}}
  - : A positive number containing the media sampling rate.
- {{domxref("RTCCodecStats.mimeType", "mimeType")}}
  - : A string containing the media MIME type/subtype, such as video/VP8.
- {{domxref("RTCCodecStats.payloadType", "payloadType")}}
  - : A positive integer value in the range of 0 to 127 indicating the payload type used in RTP encoding or decoding.
- {{domxref("RTCCodecStats.sdpFmtpLine", "sdpFmtpLine")}} {{optional_inline}}
  - : A string containing the format-specific parameters of the `"a=fmtp"` line in the codec's {{Glossary("SDP")}} (if present).
- {{domxref("RTCCodecStats.transportId", "transportId")}}
  - : A string containing the unique identifier of the transport on which this codec is being used.
    This can be used to match to the corresponding {{domxref("RTCTransportStats")}} object.

### Common instance properties

The following properties are common to all WebRTC statistics objects (see [`RTCStatsReport`](/en-US/docs/Web/API/RTCStatsReport#common_instance_properties) for more information):

<!-- RTCStats -->

- {{domxref("RTCCodecStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCCodecStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCCodecStats.type", "type")}}
  - : A string with the value `"codec"`, indicating the type of statistics the object contains.

## Examples

Given a variable `myPeerConnection`, which is an instance of {{domxref("RTCPeerConnection")}}, the code below uses `await` to wait for the statistics report, and then iterates it using `RTCStatsReport.forEach()`.
It then filters the dictionaries for just those reports that have the type of `codec` and logs the result.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "codec") {
    // Log the codec information
    console.log(report);
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCStatsReport")}}
- `codecs` option in parameter passed to {{domxref("RTCRtpTransceiver.setCodecPreferences()")}} and {{domxref("RTCRtpSender.setParameters()()")}}.
- `codecs` property in object returned by {{domxref("RTCRtpSender.getParameters()")}} and {{domxref("RTCRtpReceiver.getParameters()")}}.
