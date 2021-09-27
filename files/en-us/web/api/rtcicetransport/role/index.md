---
title: RTCIceTransport.role
slug: Web/API/RTCIceTransport/role
tags:
  - API
  - Audio
  - Candidates
  - ICE
  - Media
  - Negotiation
  - Property
  - RTCIceTransport
  - Read-only
  - Reference
  - Role
  - Video
  - WebRTC
  - WebRTC API
  - rtc
browser-compat: api.RTCIceTransport.role
---
{{APIRef("WebRTC")}}

The read-only **{{domxref("RTCIceTransport")}}**
property **`role`** indicates which {{Glossary("ICE")}} role
the transport is fulfilling: that of the controlling agent, or the agent that is being
controlled.

You can learn more about ICE roles in
{{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Choosing a candidate
  pair")}}.

## Syntax

```js
iceRole = RTCIceTransport.role;
```

### Value

A {{domxref("DOMString")}} specifying whether the {{domxref("RTCIceTransport")}}
represents the controlling agent or the controlled agent. The value must be one of those
found in the enumerated type {{domxref("RTCIceRole")}}:

{{page("/en-US/docs/Web/API/RTCIceRole", "Values")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
