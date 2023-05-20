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

The {{domxref("RTCAudioSourceStats")}} dictionary's **`totalAudioEnergy`** property represents the total audio energy of the media source over the lifetime of this stats object.

The total energy across a particular duration can be determined by subtracting the value of this property returned by two different `getStats()` calls.

> **Note:** For audio energy of remotely sourced tracks, see {{domxref("RTCInboundRtpStreamStats.totalAudioEnergy")}}.

## Value

A number produced by summing the energy of every sample over the lifetime of this stats object.

The energy of each sample is calculated by dividing the sample's value by the highest-intensity encodable value, squaring the result, and then multiplying by the duration of the sample in seconds.
This is shown as an equation below:

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

Note that if multiple audio channels are used, the audio energy of a sample refers to the highest energy of any channel.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
