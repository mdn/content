---
title: "RTCInboundRtpStreamStats: totalAudioEnergy property"
short-title: totalAudioEnergy
slug: Web/API/RTCInboundRtpStreamStats/totalAudioEnergy
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_inbound-rtp.totalAudioEnergy
---

{{APIRef("WebRTC")}}

The **`totalAudioEnergy`** property of the {{domxref("RTCInboundRtpStreamStats")}} dictionary represents the total audio energy of a received audio track over the lifetime of this stats object.

The total energy across a particular duration can be determined by subtracting the value of this property returned by two different `getStats()` calls.

> [!NOTE]
> The value is undefined for video streams.

## Value

A number produced by summing the energy of every sample over the lifetime of this stats object.

The energy of each sample is calculated by dividing the sample's value by the highest-intensity encodable value, squaring the result, and then multiplying by the duration of the sample in seconds.
This is shown as an equation below:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>duration</mi><mo>×</mo><msup><mrow><mo>(</mo><mfrac><mi>sample_level</mi><mi>max_level</mi></mfrac><mo>)</mo></mrow><mn>2</mn></msup></mrow><annotation encoding="TeX">duration \times⁢ \left(\left(\right. \frac{sample{\_}level}{max{\_}level} \left.\right)\right)^{2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

Note that if multiple audio channels are used, the audio energy of a sample refers to the highest energy of any channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCAudioSourceStats.totalAudioEnergy")}} for audio energy of local tracks (that are being sent)
