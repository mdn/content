---
title: RTCIceTransport.getLocalParameters()
slug: Web/API/RTCIceTransport/getLocalParameters
page-type: web-api-instance-method
tags:
  - API
  - Connectivity
  - ICE
  - Method
  - Negotiation
  - RTCIceTransport
  - Reference
  - Transport
  - WebRTC
  - WebRTC API
  - getLocalParameters
  - parameters
  - password
  - ufrag
  - username
  - usernameFragment
browser-compat: api.RTCIceTransport.getLocalParameters
---
{{APIRef("WebRTC")}}

The **{{domxref("RTCIceTransport")}}** method
**`getLocalParameters()`** returns an
{{domxref("RTCIceParameters")}} object which provides information uniquely identifying
the local peer for the duration of the ICE session.

The local peer's parameters are obtained during ICE signaling and delivered to the
transport when the client calls {{domxref("RTCPeerConnection.setLocalDescription()")}}.

## Syntax

```js
getLocalParameters()
```

### Parameters

None.

### Return value

An {{domxref("RTCIceParameters")}} object indicating the
{{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}} and
{{domxref("RTCIceParameters.password", "password")}} which uniquely identify the local
peer for the duration of the ICE session.

Returns `null` if the parameters have not yet been received.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
