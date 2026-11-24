---
title: "RTCAudioSourceStats: totalAudioEnergy property"
short-title: totalAudioEnergy
slug: Web/API/RTCAudioSourceStats/totalAudioEnergy
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.RTCStatsReport.type_media-source.totalAudioEnergy
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

The **`totalAudioEnergy`** property of the {{domxref("RTCAudioSourceStats")}} dictionary represents the total audio energy of the media source over the lifetime of this stats object.

> [!NOTE]
> For audio energy of remotely sourced tracks, see {{domxref("RTCInboundRtpStreamStats.totalAudioEnergy")}}.

## Value

A number.

## Description

The `totalAudioEnergy` value is the sum of the energy of every audio sample (a single measurement of the sound's level) that the media source has produced over the lifetime of this stats object.

To calculate the energy of a sample, divide the sample's value by the highest-intensity encodable value, which is the largest value the audio format can represent.
Then square the result, and multiply it by the duration of the sample in seconds.
In the following equation, `sample_level` is the value of the sample, `max_level` is the highest-intensity encodable value, and `duration` is the length of the sample in seconds:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

If the audio has more than one channel, the energy of a sample is the highest energy of any of its channels.

Because the value is a running total, you can find the energy over a particular period by subtracting the values returned by two different `getStats()` calls.
You can also use it with {{domxref("RTCAudioSourceStats.totalSamplesDuration", "totalSamplesDuration")}} to calculate the average audio level over the lifetime of the stats object, or between two `getStats()` calls.
For the formulas, see the [`RTCAudioSourceStats` Description](/en-US/docs/Web/API/RTCAudioSourceStats#description).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
