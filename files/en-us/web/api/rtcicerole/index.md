---
title: RTCIceRole
slug: Web/API/RTCIceRole
tags:
  - API
  - Controlled Agent
  - Controlling Agent
  - Enumerated Type
  - Enumeration
  - ICE
  - Media
  - RTCIceRole
  - Reference
  - Role
  - Type
  - WebRTC
  - WebRTC API
  - agent
  - rtc
browser-compat: api.RTCIceRole
---
{{APIRef("WebRTC")}}

The **`RTCIceRole`** enumerated type lists the string values that identify whether a connection's ICE agent is serving as the controlling agent or the controlled agent, as indicated by {{domxref("RTCIceTransport.role")}}.

You can learn more about ICE roles in {{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Choosing a candidate pair")}}.

## Values

- `"controlling"`
  - : The {{domxref("RTCIceTransport")}} object is serving as the controlling agent.
- `"controlled"`
  - : The transport is the controlled agent.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
