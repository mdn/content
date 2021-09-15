---
title: RTCIceParameters.usernameFragment
slug: Web/API/RTCIceParameters/usernameFragment
tags:
  - API
  - Candidate
  - ICE
  - Negotiation
  - Property
  - RTCIceParameters
  - Reference
  - Web RTC API
  - WebRTC
  - ice-ufrag
  - parameters
  - rtc
  - ufrag
  - username
  - usernameFragment
browser-compat: api.RTCIceParameters.usernameFragment
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceParameters")}}** dictionary's
**`usernameFragment`** property specifies the username fragment
("ufrag") that uniquely identifies the corresponding ICE session for the duration of the
current ICE session.

## Syntax

```js
ufrag = RTCIceParameters.usernameFragment;
```

### Value

A {{domxref("DOMString")}} containing the username fragment that, in tandem with the
{{domxref("RTCIceParameters.password", "password")}}, uniquely identify the ICE session
being used by the transport. The string may be up to 256 characters long.

See {{domxref("RTCIceCandidate.usernameFragment")}} to learn more about username
fragments and their role in a connection.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
