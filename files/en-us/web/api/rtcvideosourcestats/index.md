---
title: RTCVideoSourceStats
slug: Web/API/RTCVideoSourceStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_media-source
spec-urls: https://w3c.github.io/webrtc-stats/#dom-rtcvideosourcestats
---

{{APIRef("WebRTC")}}

The **`RTCVideoSourceStats`** dictionary of the [WebRTC API](/en-US/docs/Web/API/WebRTC_API) provides statistics information about a video track ({{domxref("MediaStreamTrack")}}) that is attached to one or more senders ({{domxref("RTCRtpSender")}}).

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCRtpSender.getStats()")}} or {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `media-source` and a [`kind`](#kind) of `video`.

> [!NOTE]
> For video information about remotely sourced tracks (that are being received), see {{domxref("RTCInboundRtpStreamStats")}}.

## Instance properties

- {{domxref("RTCVideoSourceStats.frames", "frames")}} {{optional_inline}}
  - : A positive number that indicates the total number of frames originating from this video source.
- {{domxref("RTCVideoSourceStats.framesPerSecond", "framesPerSecond")}} {{optional_inline}}
  - : A positive number that represents the number of frames originating from this video source in the last second.
    This property is not defined on this stats object for the first second of its existence.
- {{domxref("RTCVideoSourceStats.height", "height")}} {{optional_inline}}
  - : A number that represents the height, in pixels, of the last frame originating from this source.
    This property is not defined on this stats object until after the first frame has been produced.
- {{domxref("RTCVideoSourceStats.width", "width")}} {{optional_inline}}
  - : A number that represents the width, in pixels, of the most recent frame originating from this source.
    This property is not defined on this stats object until after the first frame has been produced.

### Common media-source properties

The following properties are present in both `RTCVideoSourceStats` and {{domxref("RTCAudioSourceStats")}}: <!-- RTCMediaSourceStats  -->

- {{domxref("RTCVideoSourceStats.trackIdentifier", "trackIdentifier")}}
  - : A string that contains the [`id`](/en-US/docs/Web/API/MediaStreamTrack/id) value of the [`MediaStreamTrack`](/en-US/docs/Web/API/MediaStreamTrack) associated with the video source.
- {{domxref("RTCVideoSourceStats.kind", "kind")}}
  - : A string indicating whether this object represents stats for a video source or a media source. For an `RTCVideoSourceStats` this will always be `video`.

### Common instance properties

The following properties are common to all statistics objects. <!-- RTCStats -->

- {{domxref("RTCVideoSourceStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCVideoSourceStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCVideoSourceStats.type", "type")}}
  - : A string with the value `"media-source"`, indicating that the object is an instance of either {{domxref("RTCAudioSourceStats")}} or `RTCVideoSourceStats`.

## Description

The interface provides statistics about a video media source attached to one or more senders.
The information includes a identifier for the associated `MediaStreamTrack`, along with the height and width of the last frame sent from the source, the number of frames sent from the source, and the frame rate.

## Examples

This example shows how you might iterate the stats object returned from `RTCRtpSender.getStats()` to get the video-specific media-source stats.

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

// videoSourceStats will be null if the report did not include video source stats
const frames = videoSourceStats?.frames;
const fps = videoSourceStats?.framesPerSecond;
const width = videoSourceStats?.width;
const height = videoSourceStats?.height;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
