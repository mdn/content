---
title: RTCPeerConnection()
slug: Web/API/RTCPeerConnection/RTCPeerConnection
tags:
  - API
  - Constructor
  - RTCPeerConnection
  - Reference
  - WebRTC
browser-compat: api.RTCPeerConnection.RTCPeerConnection
---
{{APIRef("WebRTC")}}

The **`RTCPeerConnection()`**
constructor returns a newly-created {{domxref("RTCPeerConnection")}}, which represents
a connection between the local device and a remote peer.

## Syntax

```js
pc = new RTCPeerConnection([configuration]);
```

### Parameters

- `configuration` {{optional_inline}}
  - : An [`RTCConfiguration`
    dictionary](#rtcconfiguration_dictionary) providing options to configure the new connection.

### RTCConfiguration dictionary

{{page("/en-US/docs/Web/API/RTCConfiguration", "Properties")}}

### Return value

A newly-created {{domxref("RTCPeerConnection")}} object, configured as described by
`configuration`, if specified; otherwise, configured to appropriate basic
defaults.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Signaling and
  video calling](/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [WebRTC architecture
  overview](/en-US/docs/Web/API/WebRTC_API/Protocols)
- [Lifetime of a WebRTC
  session](/en-US/docs/Web/API/WebRTC_API/Session_lifetime)
- {{domxref("RTCPeerConnection")}}
