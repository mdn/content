---
title: "RTCIceCandidateStats: priority property"
short-title: priority
slug: Web/API/RTCIceCandidateStats/priority
page-type: web-api-instance-property
browser-compat: api.RTCStatsReport.type_local-candidate.priority
---

{{APIRef("WebRTC")}}

The {{domxref("RTCIceCandidateStats")}} dictionary's
**`priority`** property is a positive integer value
indicating the priority (or desirability) of the described candidate.

During {{Glossary("ICE")}} negotiation while setting up a WebRTC peer connection, the
priority values reported to the remote peer by a {{Glossary("user agent")}} are used
to determine which candidates are considered "more desirable". The higher the value,
the more desirable the candidate is.

## Value

A positive integer indicating the priority of the {{domxref("RTCIceCandidate")}}
described by the `RTCIceCandidateStats` object. The value may be anywhere
from 1 to 2,147,483,647.

## Determining priority

The ICE specification describes how user agents and other software using WebRTC should
calculate the priority. The priority of a candidate is calculated using the following
variables as inputs:

- The preferability of the candidate type (local, server reflexive, peer reflexive,
  or relayed)
- The preferability of the candidate's specific IP address (for multihomed agents)
- The candidate's component ID (1 for RTP, 2 for RTCP)

The candidate's priority is computed using the formula (_p<sub>type</sub>_ is
the priority of the candidate's type and _p<sub>local</sub>_ is the priority of
the IP address):

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi mathvariant="italic">priority</mi><mo>=</mo><msup><mn>2</mn><mn>24</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>type</mi></mrow></msub><mo>+</mo><msup><mn>2</mn><mn>8</mn></msup><mo>×</mo><msub><mi>p</mi><mrow><mi>local</mi></mrow></msub><mo>+</mo><mo stretchy="false">(</mo><mn>256</mn><mo>-</mo><mi mathvariant="italic">componentID</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\mathit{priority} = 2^{24} \times p_{type} + 2^{8} \times p_{local} + \left(\right. 256 - \mathit{componentID} \left.\right)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

This is equivalent to mapping the priorities of the candidate type, the local IP, and
the component ID into various bit ranges within the 32-bit `priority`
value.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{RFC(5245, "", "4.1.2.1")}}: Recommended Formula section in the ICE specification
