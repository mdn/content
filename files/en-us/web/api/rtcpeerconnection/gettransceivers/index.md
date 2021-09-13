---
title: RTCPeerConnection.getTransceivers()
slug: Web/API/RTCPeerConnection/getTransceivers
tags:
  - API
  - Media
  - Method
  - RTCPeerConnection
  - RTCRtpTransceiver
  - RTP
  - Reference
  - Transceiver
  - WebRTC
  - getTransceivers
browser-compat: api.RTCPeerConnection.getTransceivers
---
{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} interface's
**`getTransceivers()`** method returns a list of the
{{domxref("RTCRtpTransceiver")}} objects being used to send and receive data on the
connection.

## Syntax

```js
transceiverList = rtcPeerConnection.getTransceivers();
```

### Parameters

None.

### Return value

An array of the {{domxref("RTCRtpTransceiver")}} objects representing the transceivers
handling sending and receiving all media on the `RTCPeerConnection`. The list
is in the order in which the transceivers were added to the connection.

## Example

The following snippet of code stops all transceivers associated with an
`RTCPeerConnection`.

```js
pc.getTransceivers().forEach(transceiver => {
  transceiver.stop();
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [Signaling and
  video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- {{domxref("RTCPeerConnection.addTransceiver()")}}
- {{jsxref("Array.forEach()")}}
