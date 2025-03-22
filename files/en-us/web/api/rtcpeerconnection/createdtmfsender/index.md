---
title: "RTCPeerConnection: createDTMFSender() method"
short-title: createDTMFSender()
slug: Web/API/RTCPeerConnection/createDTMFSender
page-type: web-api-instance-method
status:
  - deprecated
  - non-standard
browser-compat: api.RTCPeerConnection.createDTMFSender
---

{{APIRef("WebRTC")}}{{Deprecated_Header}}{{non-standard_header}}

The **`createDTMFSender()`** method of the {{domxref("RTCPeerConnection")}} interface creates a new {{domxref("RTCDTMFSender")}} object associated with the specified {{domxref("MediaStreamTrack")}}, which can be used to send DTMF tones over the connection.

This method is deprecated and should not be used. Instead, use the {{domxref("RTCRtpSender.dtmf")}} property to access the DTMF sender associated with a specific sender.

## Syntax

```js-nolint
createDTMFSender(track)
```

### Parameters

- `track`
  - : A {{domxref("MediaStreamTrack")}} object representing the track to associate with the new DTMF sender.

### Return value

A new {{domxref("RTCDTMFSender")}} object.

## Examples

This example creates a new DTMF sender associated with the specified track.

```js
navigator.getUserMedia({ audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  const track = stream.getAudioTracks()[0];
  const dtmfSender = pc.createDTMFSender(track);
});
```

This could be rewritten using the {{domxref("RTCRtpSender.dtmf")}} property:

```js
navigator.getUserMedia({ audio: true }, (stream) => {
  const pc = new RTCPeerConnection();
  const track = stream.getAudioTracks()[0];
  const sender = pc.addTrack(track, stream);
  const dtmfSender = sender.dtmf;
});
```

## Specifications

This feature is non-standard and not part of any specification.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCDTMFSender")}}
- {{domxref("RTCRtpSender")}}
- {{domxref("RTCPeerConnection")}}
