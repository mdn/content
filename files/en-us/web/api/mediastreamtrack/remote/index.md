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
  - Non-standard
browser-compat: api.MediaStreamTrack.remote
---
{{APIRef("Media Capture and Streams")}}{{Deprecated_Header}}{{Non-standard_Header}}

The **`MediaStreamTrack.remote`** read-only property allows JavaScript to know whether a WebRTC MediaStreamTrack is from a remote source or a local one.
It returns a boolean value that is `true` if the track is sourced remotely (that is, sourced by an {{domxref("RTCPeerConnection")}}), or `false` if it is sourced locally.

## Value

A boolean.

## Browser compatibility

{{Compat}}

## See also

- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
