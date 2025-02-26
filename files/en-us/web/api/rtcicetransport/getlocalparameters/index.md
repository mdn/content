---
title: "RTCIceTransport: getLocalParameters() method"
short-title: getLocalParameters()
slug: Web/API/RTCIceTransport/getLocalParameters
page-type: web-api-instance-method
browser-compat: api.RTCIceTransport.getLocalParameters
---

{{APIRef("WebRTC")}}

The **`getLocalParameters()`** method of the {{domxref("RTCIceTransport")}} interface returns an {{domxref("RTCIceParameters")}} object that provides information uniquely identifying the local peer for the duration of the ICE session.

The local peer's parameters are obtained during ICE signaling and delivered to the transport when the client calls {{domxref("RTCPeerConnection.setLocalDescription()")}}.

## Syntax

```js-nolint
getLocalParameters()
```

### Parameters

None.

### Return value

An {{domxref("RTCIceParameters")}} object indicating the {{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}} and {{domxref("RTCIceParameters.password", "password")}} which uniquely identify the local peer for the duration of the ICE session.

Returns `null` if the parameters have not yet been received.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
