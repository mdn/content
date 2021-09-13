---
title: MediaStreamTrack.readyState
slug: Web/API/MediaStreamTrack/readyState
tags:
  - API
  - Media Capture and Streams
  - MediaStreamTrack
  - NeedsExample
  - Property
  - Read-only
  - Reference
browser-compat: api.MediaStreamTrack.readyState
---
{{APIRef("Media Capture and Streams")}}

The **`MediaStreamTrack.readyState`** read-only property
returns an enumerated value giving the status of the track.

## Syntax

```js
const state = track.readyState
```

### Value

It takes one of the following values:

- `"live"` which indicates that an input is connected and does its
  best-effort in providing real-time data. In that case, the output of data can be
  switched on or off using the {{domxref("MediaStreamTrack.enabled")}} property.
- `"ended"` which indicates that the input is not giving any more data and
  will never provide new data.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media Stream API](/en-US/docs/Web/API/Media_Streams_API)
- [WebRTC](/en-US/docs/Web/API/WebRTC_API)
- {{domxref("MediaStreamTrack.onended")}}
