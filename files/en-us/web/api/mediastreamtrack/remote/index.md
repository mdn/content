---
title: MediaStreamTrack.remote
slug: Web/API/MediaStreamTrack/remote
page-type: web-api-instance-property
tags:
  - Deprecated
  - MediaStreamTrack
  - Property
  - Read-only
  - Reference
  - WebRTC
browser-compat: api.MediaStreamTrack.remote
---
{{DefaultAPISidebar("Media Capture and Streams")}}{{deprecated_header}}

The **`MediaStreamTrack.remote`** read-only property allows
Javascript to know whether a WebRTC MediaStreamTrack is from a remote source or a local
one. It returns a boolean value that is `true` if the track
is sourced remotely (that is, sourced by an {{domxref("RTCPeerConnection")}}), or
`false` if it is sourced locally.

## Value

A boolean.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
