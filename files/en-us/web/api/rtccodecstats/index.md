---
title: RTCCodecStats
slug: Web/API/RTCCodecStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_codec
---

{{DefaultAPISidebar("WebRTC")}}

The **`RTCCodecStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) ... <!-- TBD -->

The report can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCPeerConnection.getStats()")}} until you find an entry with the [`type`](#type) of `codec`.

## Instance properties

- {{domxref("RTCCodecStats.payloadType", "payloadType")}}
  - : A positive integer value in the range of 0 to 127 indicating the payload type used in RTP encoding or decoding.
- {{domxref("RTCCodecStats.transportId", "transportId")}}
  - : A string containing the unique identifier of the transport on which this codec is being used.
    This can be used to match to the corresponding {{domxref("RTCTransportStats")}} object.
- {{domxref("RTCCodecStats.mimeType", "mimeType")}}
  - : A string containing the media MIME type/sub-type, such as video/VP8.
- {{domxref("RTCCodecStats.clockRate", "clockRate")}}
  - : A positive number containing the media sampling rate.
- {{domxref("RTCCodecStats.channels", "channels")}}
  - : A positive number indicating the number of channels supported by the codec.
- {{domxref("RTCCodecStats.sdpFmtpLine", "sdpFmtpLine")}}
  - : A string containing the format-specific parameters of the `"a=fmtp"` line in the codec's {{Glossary("SDP")}} (if present).

### Common instance properties

The following properties are common to all WebRTC statistics objects (See [`RTCStatsReport`](/en-US/docs/Web/API/RTCStatsReport#common_instance_properties) for more information).

<!-- RTCStats -->

- {{domxref("RTCCodecStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCCodecStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCCodecStats.type", "type")}}
  - : A string with the value `"codec"`, indicating the type of statistics that the object contains.

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
- {{domxref("RTCRtpCodecParameters")}}
