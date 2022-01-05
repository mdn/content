---
title: MediaSource.removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
tags:
  - API
  - Audio
  - Experimental
  - MSE
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - removeSourceBuffer
browser-compat: api.MediaSource.removeSourceBuffer
---
{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

The **`removeSourceBuffer()`** method of the
{{domxref("MediaSource")}} interface removes the given {{domxref("SourceBuffer")}} from
the {{domxref("SourceBuffers")}} list associated with this `MediaSource`
object.

## Syntax

```js
mediaSource.removeSourceBuffer(sourceBuffer);
```

### Parameters

- sourceBuffer
  - : The {{domxref("SourceBuffer")}} object to be removed.

### Return value

{{jsxref('undefined')}}

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - :  Thrown if the supplied sourceBuffer doesn't exist in {{domxref("MediaSource.sourceBuffers")}}.

## Examples

```js
for (i = 0; i < 10; i++) {
  var sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
}

mediaSource.removeSourceBuffer(mediaSource.sourceBuffers[0]);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("SourceBuffer")}}
- {{domxref("SourceBufferList")}}
