---
title: MediaStreamTrack.remote
slug: Web/API/MediaStreamTrack/remote
tags:
  - Deprecated
  - MediaStreamTrack
  - Property
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.remote
---
{{APIRef("Media Capture and Streams")}}{{deprecated_header}}

The **`MediaStreamTrack.remote`** read-only property allows
Javascript to know whether a WebRTC MediaStreamTrack is from a remote source or a local
one. It returns a boolean value that is `true` if the track
is sourced remotely (that is, sourced by an {{domxref("RTCPeerConnection")}}), or
`false` if it is sourced locally.

## Syntax

```js
var bool = track.remote;
```

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
