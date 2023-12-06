---
title: "RTCIceTransport: getRemoteParameters() method"
short-title: getRemoteParameters()
slug: Web/API/RTCIceTransport/getRemoteParameters
page-type: web-api-instance-method
browser-compat: api.RTCIceTransport.getRemoteParameters
---

{{APIRef("WebRTC")}}

The **{{domxref("RTCIceTransport")}}** method
**`getRemoteParameters()`** returns an
{{domxref("RTCIceParameters")}} object which provides information uniquely
identifying the remote peer for the duration of the ICE session.

The remote peer's parameters are received during ICE signaling and delivered to the
transport when the client calls
{{domxref("RTCPeerConnection.setRemoteDescription()")}}.

## Syntax

```js-nolint
getRemoteParameters()
```

### Parameters

None.

### Return value

An {{domxref("RTCIceParameters")}} object indicating the
{{domxref("RTCIceParameters.usernameFragment", "usernameFragment")}} and
{{domxref("RTCIceParameters.password", "password")}} which uniquely identify the
remote peer for the duration of the ICE session.

Returns `null` if the parameters haven't been received yet.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
