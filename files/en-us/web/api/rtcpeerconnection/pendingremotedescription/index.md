---
title: "RTCPeerConnection: pendingRemoteDescription property"
short-title: pendingRemoteDescription
slug: Web/API/RTCPeerConnection/pendingRemoteDescription
page-type: web-api-instance-property
browser-compat: api.RTCPeerConnection.pendingRemoteDescription
---

{{APIRef("WebRTC")}}

The read-only property
**`RTCPeerConnection.pendingRemoteDescription`** returns an
{{domxref("RTCSessionDescription")}} object describing a pending configuration change
for the remote end of the connection. This does not describe the connection as it
currently stands, but as it may exist in the near future. Use
{{domxref("RTCPeerConnection.currentRemoteDescription")}} or
{{domxref("RTCPeerConnection.remoteDescription")}} to get the current session
description for the remote endpoint. For details on the difference, see
[Pending and current descriptions](/en-US/docs/Web/API/WebRTC_API/Connectivity#pending_and_current_descriptions) in the WebRTC Connectivity page.

## Value

If a remote description change is in progress, this is an
{{domxref("RTCSessionDescription")}} describing the proposed configuration. Otherwise,
this returns `null`.

## Examples

This example looks at the `pendingRemoteDescription` to determine whether or
not there's a description change being processed.

```js
const pc = new RTCPeerConnection();
// ...
const sd = pc.pendingRemoteDescription;
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

> **Note:** The addition of `pendingRemoteDescription` and
> {{domxref("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}}
> to the WebRTC spec is relatively recent. In browsers which don't support them, only
> {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} is available.

## See also

- {{domxref("RTCPeerConnection.setRemoteDescription()")}},
  {{domxref("RTCPeerConnection.currentRemoteDescription")}},
  {{domxref("RTCPeerConnection.remoteDescription")}}
- {{domxref("RTCPeerConnection.setLocalDescription()")}},
  {{domxref("RTCPeerConnection.localDescription")}},
  {{domxref("RTCPeerConnection.pendingLocalDescription")}},
  {{domxref("RTCPeerConnection.currentLocalDescription")}}
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
