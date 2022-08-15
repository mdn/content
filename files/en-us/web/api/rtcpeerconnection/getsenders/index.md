---
title: RTCPeerConnection.getSenders()
slug: Web/API/RTCPeerConnection/getSenders
page-type: web-api-instance-method
tags:
  - Media
  - Method
  - RTCPeerConnection
  - RTCRtpSender
  - RTP
  - Reference
  - WebRTC
  - WebRTC API
  - getSenders
browser-compat: api.RTCPeerConnection.getSenders
---

{{APIRef("WebRTC")}}

The {{domxref("RTCPeerConnection")}} method
**`getSenders()`** returns an array of
{{domxref("RTCRtpSender")}} objects, each of which represents the RTP sender
responsible for transmitting one track's data. A sender object provides methods
and properties for examining and controlling the encoding and transmission of the
track's data.

## Syntax

```js
const senders = rtcPeerConnection.getSenders();
```

### Return value

An array of {{domxref("RTCRtpSender")}} objects, one for each track on the connection.
The array is empty if there are no RTP senders on the connection.

The order of the returned `RTCRtpSender`s is not defined by the
specification, and may change from one call to `getSenders()` to the next.

## Example

In this example, a `setMuting()` function is shown. This function takes as
input an {{domxref("RTCPeerConnection")}}, `pc`, and a Boolean,
`muting`. The function gets the list of the peer connection's senders and
iterates over every sender, setting the corresponding media track's
{{domxref("MediaStreamTrack.enabled", "enabled")}} to the inverse of the specified
`muting`.

```js
function setMuting(pc, muting) {
  let senderList = pc.getSenders();

  senderList.forEach((sender) => {
    sender.track.enabled = !muting;
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCRtpSender")}}
