---
title: RTCAudioSourceStats
slug: Web/API/RTCAudioSourceStats
page-type: web-api-interface
browser-compat: api.RTCStatsReport.type_media-source
---

{{APIRef("WebRTC")}}

The [WebRTC API](/en-US/docs/Web/API/WebRTC_API)'s **`RTCAudioSourceStats`** dictionary provides information about an audio track that is attached to one or more senders.

These statistics can be obtained by iterating the {{domxref("RTCStatsReport")}} returned by {{domxref("RTCRtpSender.getStats()")}} or {{domxref("RTCPeerConnection.getStats()")}} until you find a report with the [`type`](#type) of `media-source` and a [`kind`](#kind) of `audio`.

> **Note:** For audio information about remotely sourced tracks (that are being received), see {{domxref("RTCInboundRtpStreamStats")}}.

## Instance properties

- {{domxref("RTCAudioSourceStats.audioLevel", "audioLevel")}} {{Experimental_Inline}}
  - : A number that represents the audio level of the media source.
- {{domxref("RTCAudioSourceStats.totalAudioEnergy", "totalAudioEnergy")}} {{Experimental_Inline}}
  - : A number that represents the total audio energy of the media source over the lifetime of the stats object.
- {{domxref("RTCAudioSourceStats.totalSamplesDuration", "totalSamplesDuration")}} {{Experimental_Inline}}
  - : A number that represents the total duration of all samples produced by the media source over the lifetime of the stats object.

The following properties are present in both `RTCAudioSourceStats` and {{domxref("RTCVideoSourceStats")}}: <!-- RTCMediaSourceStats  -->

- {{domxref("RTCAudioSourceStats.trackIdentifier", "trackIdentifier")}}
  - : A string that contains the [`id`](/en-US/docs/Web/API/MediaStreamTrack/id) value of the [`MediaStreamTrack`](/en-US/docs/Web/API/MediaStreamTrack) associated with the audio source.
- {{domxref("RTCAudioSourceStats.kind", "kind")}}
  - : A string indicating whether this object represents stats for a video source or a media source. For an `RTCAudioSourceStats` this will always be `audio`.

### Common instance properties

The following properties are common to all statistics objects. <!-- RTCStats -->

- {{domxref("RTCAudioSourceStats.id", "id")}}
  - : A string that uniquely identifies the object that is being monitored to produce this set of statistics.
- {{domxref("RTCAudioSourceStats.timestamp", "timestamp")}}
  - : A {{domxref("DOMHighResTimeStamp")}} object indicating the time at which the sample was taken for this statistics object.
- {{domxref("RTCAudioSourceStats.type", "type")}}
  - : A string with the value `"media-source"`, indicating that the object is an instance of either {{domxref("RTCAudioSourceStats")}} or {{domxref("RTCVideoSourceStats")}}.

## Description

The interface provides statistics about an audio media source attached to one or more senders.
The information includes the current audio level, averaged over a short (implementation dependent) duration.

The statistics also include the accumulated total energy and total sample duration, at a particular timestamp.
The totals can be used to determine the average audio level over the lifetime of the stats object.
You can calculate a root mean square (RMS) value in the same units as `audioLevel` using the following formula:

<math display="block">
<msqrt>
  <mfrac>
    <mi>totalAudioEnergy</mi>
    <mi>totalSamplesDuration</mi>
  </mfrac>
</msqrt>
</math>

You can also use the accumulated totals to calculate the average audio level over an arbitrary time period.

The total audio energy of the stats object is accumulated by adding the energy of every sample over the lifetime of the stats object, while the total duration is accumulated by adding the duration of each sample.
The energy of each sample is determined using the following formula, where `sample_level` is the level of the sample, `max_level` is the highest-intensity encodable value, and `duration` is the duration of the sample in seconds:

<math display="block">
<mrow>
  <mi>duration</mi>
  <mo>&#x2062;</mo>
  <msup>
    <mrow>
      <mo>(</mo>
      <mfrac>
        <mi>sample_level</mi>
        <mi>max_level</mi>
      </mfrac>
      <mo>)</mo>
    </mrow>
    <mn>2</mn>
  </msup>
</mrow>
</math>

The average audio level between any two different `getStats()` calls, over any duration, can be calculated using the following equation:

<math display="block">
<msqrt>
  <mfrac>
    <mrow>
      <msub>
        <mi>totalAudioEnergy</mi>
        <mn>2</mn>
      </msub>
      <mo>-</mo>
      <msub>
        <mi>totalAudioEnergy</mi>
        <mn>1</mn>
      </msub>
    </mrow>
    <mrow>
      <msub>
        <mi>totalSamplesDuration</mi>
        <mn>2</mn>
      </msub>
      <mo>-</mo>
      <msub>
        <mi>totalSamplesDuration</mi>
        <mn>1</mn>
      </msub>
    </mrow>
  </mfrac>
</msqrt>
</math>

## Examples

This example shows how you might iterate the stats object returned from `RTCRtpSender.getStats()` to get the audio source stats, and then extract the `audioLevel`.

```js
// where sender is an RTCRtpSender
const stats = await sender.getStats();
let audioSourceStats = null;

stats.forEach((report) => {
  if (report.type === "media-source" && report.kind==="audio") {
    audioSourceStats = report;
    break;
  }
});

const audioLevel = audioSourceStats?.audioLevel;
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
