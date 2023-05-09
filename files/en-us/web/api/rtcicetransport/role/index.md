---
title: "RTCIceTransport: role property"
short-title: role
slug: Web/API/RTCIceTransport/role
page-type: web-api-instance-property
browser-compat: api.RTCIceTransport.role
---

{{APIRef("WebRTC")}}

The read-only **{{domxref("RTCIceTransport")}}**
property **`role`** indicates which {{Glossary("ICE")}} role
the transport is fulfilling: that of the controlling agent, or the agent that is being
controlled.

You can learn more about ICE roles in
[Choosing a candidate pair](/en-US/docs/Web/API/WebRTC_API/Connectivity#choosing_a_candidate_pair).

## Value

A string specifying whether the {{domxref("RTCIceTransport")}}
represents the controlling agent or the controlled agent. The value must be one of the following:

- `"controlling"`
  - : The {{domxref("RTCIceTransport")}} object is serving as the controlling agent.
- `"controlled"`
  - : The transport is the controlled agent.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
