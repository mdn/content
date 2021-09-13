---
title: RTCPeerConnection.pendingRemoteDescription
slug: Web/API/RTCPeerConnection/pendingRemoteDescription
tags:
  - API
  - Property
  - RTCPeerConnection
  - Read-only
  - Reference
  - SDP
  - WebRTC
  - pendingRemoteDescription
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
{{SectionOnPage("/en-US/docs/Web/API/WebRTC_API/Connectivity", "Pending and current
  descriptions")}}.

## Syntax

```js
sessionDescription = RTCPeerConnection.pendingRemoteDescription;
```

### Return value

If a remote description change is in progress, this is an
{{domxref("RTCSessionDescription")}} describing the proposed configuration. Otherwise,
this returns `null`.

## Example

This example looks at the `pendingRemoteDescription` to determine whether or
not there's a description change being processed.

```js
var pc = new RTCPeerConnection();
…
var sd = pc.pendingRemoteDescription;
if (sd) {
  // There's a description change underway!
}
else {
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
- [WebRTC](/en-US/docs/Web/Guide/API/WebRTC)
