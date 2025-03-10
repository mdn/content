---
title: "RTCPeerConnection: localDescription property"
short-title: localDescription
slug: Web/API/RTCPeerConnection/localDescription
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.localDescription
---

{{APIRef("WebRTC")}}

The **`localDescription`** read-only property of the {{domxref("RTCPeerConnection")}} interface returns an {{domxref("RTCSessionDescription")}} describing the session for the local end of the connection.
If it has not yet been set, this is `null`.

## Value

On a more fundamental level, the returned value is the value of {{domxref("RTCPeerConnection.pendingLocalDescription")}} if that property isn't `null`;
otherwise, the value of {{domxref("RTCPeerConnection.currentLocalDescription")}} is returned.
See [Pending and current descriptions](/en-US/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) in the WebRTC Connectivity page for details on this algorithm and why it's used.

## Example

This example looks at the `localDescription` and displays an alert containing the {{domxref("RTCSessionDescription")}} object's `type` and `sdp` fields.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.localDescription;
if (sd) {
  alert(`Local session: type='${sd.type}'; sdp description='${sd.sdp}'`);
} else {
  alert("No local session yet.");
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.pendingLocalDescription")}}, {{domxref("RTCPeerConnection.currentLocalDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
