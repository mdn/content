---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_media-source
---

{{APIRef("WebRTC")}}

The **`RTCVideoSourceStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides statistics information about a video track that is attached to one or more senders.

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCRtpSender.getStats()")}} or {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `media-source` and a [`kind`](#kind) of `video`.

> **Note:** For video information about remotely sourced tracks (that are being received), see {{domxref("RTCInboundRtpStreamStats")}}.

## Instance properties

- {{domxref("RTCVideoSourceStats.frames", "frames")}}
  - : A positive number that indicates the total number of frames from this video source.
- {{domxref("RTCVideoSourceStats.framesPerSecond", "framesPerSecond")}}
  - : A number that represents the number of frames from this video source in the last second.
- {{domxref("RTCVideoSourceStats.height", "height")}}
  - : A positive number that represents the height, in pixels, of the last frame originating from this source.
    This property is not defined on the stats option until after the first frame has been produced.
- {{domxref("RTCVideoSourceStats.width", "width")}}
  - : A number that represents thewidth, in pixels, of the last frame originating from this source.
    This property is not defined on the stats option until after the first frame has been produced.

The following properties are present in both `RTCVideoSourceStats` and {{domxref("RTCAudioSourceStats")}}: <!-- RTCMediaSourceStats  -->

- {{domxref("RTCVideoSourceStats.trackIdentifier", "trackIdentifier")}}
  - : A string that contains the [`id`](/en-US/docs/Web/API/MediaStreamTrack/id) value of the [`MediaStreamTrack`](/en-US/docs/Web/API/MediaStreamTrack) associated with the audio source.
- {{domxref("RTCVideoSourceStats.kind", "kind")}}
  - : A string indicating the kind of media source. For an `RTCVideoSourceStats` this will always be `video`.

### Common instance properties

The following properties are common to all statistics objects. <!-- RTCStats -->

- {{domxref("RTCVideoSourceStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCVideoSourceStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCVideoSourceStats.type", "type")}}
  - : A string with the value `"media-source"`, indicating that the object is an instance of either {{domxref("RTCVideoSourceStats")}} or {{domxref("RTCVideoSourceStats")}}.

## Description

The interface provides statistics about an audio media source attached to one or more senders.
The information includes Xxxxx.

## Examples

This example shows how you might iterate the stats object returned from `RTCRtpSender.getStats()` to get the video source stats, and then extract the `framesPerSecond`.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let videoSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="video") {
    videoSourceStats = report;
    break;
  }
});

// Note, test is conditional.
// framesPerSecond does not exist in the first second
const fps = videoSourceStats?.framesPerSecond;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
