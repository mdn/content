---
title: "RTCPeerConnection: pendingLocalDescription property"
short-title: pendingLocalDescription
slug: Web/API/RTCPeerConnection/pendingLocalDescription
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.pendingLocalDescription
---

{{APIRef("WebRTC")}}

The **`pendingLocalDescription`** read-only property of the {{domxref("RTCPeerConnection")}} interface returns an {{domxref("RTCSessionDescription")}} object describing a pending configuration change for the local end of the connection.

This does not describe the connection as it currently stands, but as it may exist in the near future.
Use {{domxref("RTCPeerConnection.currentLocalDescription")}} or {{domxref("RTCPeerConnection.localDescription")}} to get the current state of the endpoint.
For details on the difference, see [Pending and current descriptions](/en-US/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) in the WebRTC Connectivity page.

## Value

If a local description change is in progress, this is an {{domxref("RTCSessionDescription")}} describing the proposed configuration.
Otherwise, this returns `null`.

## Examples

This example looks at the `pendingLocalDescription` to determine whether or not there's a description change being processed.

```js
const pc = new RTCPeerConnection();
// …
const sd = pc.pendingLocalDescription;
if (sd) {
  // There's a description change underway!
} else {
  // No description change pending
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

> [!NOTE]
> The addition of `pendingLocalDescription` and {{domxref("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}} to the WebRTC spec is relatively recent.
> In browsers which don't support them, only {{domxref("RTCPeerConnection.localDescription", "localDescription")}} is available.

## See also

- {{domxref("RTCPeerConnection.setLocalDescription()")}}, {{domxref("RTCPeerConnection.currentLocalDescription")}}, {{domxref("RTCPeerConnection.localDescription")}}
- {{domxref("RTCPeerConnection.setRemoteDescription()")}}, {{domxref("RTCPeerConnection.remoteDescription")}}, {{domxref("RTCPeerConnection.pendingRemoteDescription")}}, {{domxref("RTCPeerConnection.currentRemoteDescription")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
