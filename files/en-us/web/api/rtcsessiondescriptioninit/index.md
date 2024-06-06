---
title: RTCSessionDescriptionInit
slug: Web/API/RTCSessionDescriptionInit
page-type: web-api-interface
browser-compat: api.RTCSessionDescription
---

{{APIRef("WebRTC")}}

The **`RTCSessionDescriptionInit`** dictionary is used to provide {{Glossary("SDP")}} values in several methods of the {{domxref("RTCPeerConnection")}} interface, such as {{domxref("RTCPeerConnection.createOffer")}}, {{domxref("RTCPeerConnection.createAnswer")}}, and {{domxref("RTCPeerConnection.setRemoteDescription")}}. Also it can be used to create new `RTCSessionDescription` objects, though this is less common.

### Properties

- `type`
  - : A string which is used to set the `type` property of the new `RTCSessionDescription` object. This is a required property. For more information, see documentation for the {{domxref("RTCSessionDescription.type")}} property.
- `sdp`
  - : A string containing the {{Glossary("SDP")}} describing the session. If `type` is `"rollback"`, this member is unused.

## Specifications

https://w3c.github.io/webrtc-pc/#dom-rtcsessiondescriptioninit

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("RTCSessionDescription")}}
- {{domxref("RTCLocalSessionDescriptionInit")}}
- {{domxref("RTCPeerConnection.createOffer")}}
- {{domxref("RTCPeerConnection.createAnswer")}}
- {{domxref("RTCPeerConnection.setRemoteDescription")}}
