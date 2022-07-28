---
title: RTCPeerConnection.remoteDescription
slug: Web/API/RTCPeerConnection/remoteDescription
page-type: web-api-instance-property
tags:
  - Property
  - RTCPeerConnection
  - Read-only
  - Reference
  - WebRTC
  - remoteDescription
browser-compat: api.RTCPeerConnection.remoteDescription
---

{{APIRef("WebRTC")}}

The read-only property
**`RTCPeerConnection.remoteDescription`** returns a
{{domxref("RTCSessionDescription")}} describing the session (which includes
configuration and media information) for the remote end of the connection. If this
hasn't been set yet, this is `null`.

The returned value typically reflects a remote description which has been received over
the signaling server (as either an offer or an answer) and then put into effect by your
code calling {{domxref("RTCPeerConnection.setRemoteDescription()")}} in response.

## Syntax

```js
const sessionDescription = peerConnection.remoteDescription;
```

On a more fundamental level, the returned value is the value of
{{domxref("RTCPeerConnection.pendingRemoteDescription")}} if that property isn't
`null`; otherwise, the value of
{{domxref("RTCPeerConnection.currentRemoteDescription")}} is returned. See
{{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Pending and current
  descriptions")}} for details on this algorithm and why it's used.

## Example

This example looks at the `remoteDescription` and displays an alert
containing the {{domxref("RTCSessionDescription")}} object's `type` and
`sdp` fields.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.remoteDescription;
if (sd) {
  alert(`Remote session: type='${sd.type}'; sdp description='${sd.sdp}'`);
}
else {
  alert("No remote session yet.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.setRemoteDescription()")}},
  {{domxref("RTCPeerConnection.pendingRemoteDescription")}},
  {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- {{domxref("RTCPeerConnection.setLocalDescription()")}},
  {{domxref("RTCPeerConnection.pendingLocalDescription")}},
  {{domxref("RTCPeerConnection.currentLocalDescription")}},
  {{domxref("RTCPeerConnection.localDescription")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
