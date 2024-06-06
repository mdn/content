---
title: RTCLocalSessionDescriptionInit
slug: Web/API/RTCLocalSessionDescriptionInit
page-type: web-api-interface
browser-compat: api.RTCSessionDescription
---

{{APIRef("WebRTC")}}

The **`RTCLocalSessionDescriptionInit`** dictionary is used to provide {{Glossary("SDP")}} values in {{domxref("RTCPeerConnection.setLocalDescription")}}. Especially, empty object(`{}`) conforms the `RTCLocalSessionDescriptionInit` dictionary.

### Properties

- `type`
  - : A string which is used to set the `type` property of the new `RTCSessionDescription` object. For more information, see documentation for the {{domxref("RTCSessionDescription.type")}} property.
- `sdp`
  - : A string containing the {{Glossary("SDP")}} describing the session. If `type` is `"rollback"`, this member is unused.


## Specifications

https://w3c.github.io/webrtc-pc/#dom-rtclocalsessiondescriptioninit

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCSessionDescription")}}
- {{domxref("RTCSessionDescriptionInit")}}
- {{domxref("RTCPeerConnection.setLocalDescription")}}
