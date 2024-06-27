---
title: "RTCPeerConnection: getTransceivers() method"
short-title: getTransceivers()
slug: Web/API/RTCPeerConnection/getTransceivers
page-type: web-api-instance-method
browser-compat: api.RTCPeerConnection.getTransceivers
---

{{APIRef("WebRTC")}}

The **`getTransceivers()`** method of the {{domxref("RTCPeerConnection")}} interface returns a list of the {{domxref("RTCRtpTransceiver")}} objects being used to send and receive data on the connection.

## Syntax

```js-nolint
getTransceivers()
```

### Parameters

None.

### Return value

An array of the {{domxref("RTCRtpTransceiver")}} objects representing the transceivers handling sending and receiving all media on the `RTCPeerConnection`.
The array is in the order in which the transceivers were added to the connection.
The array does not include transceivers that have already been [stopped](/en-US/docs/Web/API/RTCRtpTransceiver/currentDirection) (following offer/answer).

## Examples

The following snippet of code stops all transceivers associated with an `RTCPeerConnection`.

```js
pc.getTransceivers().forEach((transceiver) => {
  transceiver.stop();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- {{domxref("RTCPeerConnection.addTransceiver()")}}
- {{jsxref("Array.forEach()")}}
