---
title: "RTCIceTransport: role property"
short-title: role
slug: Web/API/RTCIceTransport/role
page-type: web-api-instance-property
browser-compat: api.RTCIceTransport.role
---

{{APIRef("WebRTC")}}

The **`role`** read-only property of the {{domxref("RTCIceTransport")}} interface indicates which {{Glossary("ICE")}} role the transport is fulfilling: that of the controlling agent, or the agent that is being controlled.

You can learn more about ICE roles in [Choosing a candidate pair](/en-US/docs/Web/API/WebRTC_API/Connectivity#choosing_a_candidate_pair).

## Value

A string specifying whether the {{domxref("RTCIceTransport")}} represents the controlling agent or the controlled agent.

The value must be one of the following:

- `"controlled"`
  - : The transport is the controlled agent.
- `"controlling"`
  - : The {{domxref("RTCIceTransport")}} object is serving as the controlling agent.
- `"unknown"`
  - : The role has not yet been determined.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
