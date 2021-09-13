---
title: MediaStream.ended
slug: Web/API/MediaStream/ended
tags:
  - API
  - Media Streams API
  - MediaStream
  - Deprecated
  - Property
  - Reference
  - ended
browser-compat: api.MediaStream.ended
---
{{APIRef("WebRTC")}}{{deprecated_header}}

The **`ended`** read-only property of the
{{domxref("MediaStream")}} interface returns a Boolean value which is `true` if the stream has been completely read, or `false` if the end of the stream has not been reached.
This value  once the {{event("ended")}} event has been fired.

> **Warning:** This property has been removed from the specification; you should instead rely on the
> {{event("ended")}} event or check the value of
> {{domxref("MediaStreamTrack.readyState")}} to see if its value is `"ended"`
> for the track or tracks you want to ensure have finished playing.

## Syntax

```js
var hasEnded = MediaStream.ended;
```

### Value

A Boolean value that returns `true` if the end of the stream has been
reached.

## Specifications

No longer part of any specification. This property was part of earlier drafts of the [Media Capture and Streams
specification](https://www.w3.org/TR/mediacapture-streams).

## Browser compatibility

{{Compat}}
