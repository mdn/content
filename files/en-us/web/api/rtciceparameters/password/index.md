---
title: RTCIceParameters.password
slug: Web/API/RTCIceParameters/password
tags:
  - API
  - Candidates
  - Connectivity
  - ICE
  - Negotiation
  - Property
  - RTCIceParameters
  - Reference
  - WebRTC
  - WebRTC API
  - password
browser-compat: api.RTCIceParameters.password
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceParameters")}}**
dictionary's **`password`** property specifies the ICE
password that, in tandem with the {{domxref("RTCIceParameters.usernameFragment",
    "usernameFragment")}}, uniquely identifies an ICE session for its entire
duration.

## Syntax

```js
password = RTCIceParameters.password;
```

### Value

A {{domxref("DOMString")}} containing the password that corresponds to the transport's
`usernameFragment` string

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
