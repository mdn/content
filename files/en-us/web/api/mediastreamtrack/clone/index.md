---
title: MediaStreamTrack.clone()
slug: Web/API/MediaStreamTrack/clone
page-type: web-api-instance-method
tags:
  - API
  - Media Capture and Streams
  - Media Streams API
  - MediaStreamTrack
  - Method
  - Reference
  - clone
browser-compat: api.MediaStreamTrack.clone
---
{{APIRef("Media Capture and Streams")}}

The **`clone()`** method of the {{domxref("MediaStreamTrack")}}
interface creates a duplicate of the `MediaStreamTrack`. This new
`MediaStreamTrack` object is identical except for its unique
{{domxref("MediaStreamTrack.id", "id")}}.

## Syntax

```js
clone()
```

### Parameters

None.

### Return value

A new {{domxref("MediaStreamTrack")}} instance which is identical to the one
`clone()` was called, except for its new unique
{{domxref("MediaStreamTrack.id", "id")}}.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
