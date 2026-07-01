---
title: "MediaStreamTrack: clone() method"
short-title: clone()
slug: Web/API/MediaStreamTrack/clone
page-type: web-api-instance-method
browser-compat: api.MediaStreamTrack.clone
---

{{APIRef("Media Capture and Streams")}}

The **`clone()`** method of the {{domxref("MediaStreamTrack")}}
interface creates a duplicate of the `MediaStreamTrack`. This new
`MediaStreamTrack` object is identical except for its unique
{{domxref("MediaStreamTrack.id", "id")}}.

## Syntax

```js-nolint
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
