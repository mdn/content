---
title: "MediaStream: clone() method"
short-title: clone()
slug: Web/API/MediaStream/clone
page-type: web-api-instance-method
browser-compat: api.MediaStream.clone
---

{{APIRef("Media Capture and Streams")}}

The **`clone()`** method of the {{domxref("MediaStream")}}
interface creates a duplicate of the `MediaStream`. This new
`MediaStream` object has a new unique {{domxref("MediaStream.id", "id")}} and
contains clones of every {{domxref("MediaStreamTrack")}} contained by the
`MediaStream` on which `clone()` was called.

## Syntax

```js-nolint
clone()
```

### Parameters

None.

### Return value

A new {{domxref("MediaStream")}} instance which has a new unique ID and contains clones
of every {{domxref("MediaStreamTrack")}} contained by the `MediaStream` on
which `clone()` was called.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
