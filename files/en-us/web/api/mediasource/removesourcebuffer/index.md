---
title: MediaSource.removeSourceBuffer()
slug: Web/API/MediaSource/removeSourceBuffer
page-type: web-api-instance-method
tags:
  - API
  - Audio
  - MSE
  - Media Source Extensions
  - MediaSource
  - Method
  - Reference
  - Video
  - removeSourceBuffer
browser-compat: api.MediaSource.removeSourceBuffer
---
{{APIRef("Media Source Extensions")}}

The **`removeSourceBuffer()`** method of the
{{domxref("MediaSource")}} interface removes the given {{domxref("SourceBuffer")}} from
the {{domxref("SourceBuffers")}} list associated with this `MediaSource`
object.

## Syntax

```js
removeSourceBuffer(sourceBuffer)
```

### Parameters

- `sourceBuffer`
  - : The {{domxref("SourceBuffer")}} object to be removed.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `NotFoundError` {{domxref("DOMException")}}
  - :  Thrown if the supplied sourceBuffer doesn't exist in {{domxref("MediaSource.sourceBuffers")}}.

## Examples

```js
for (let i = 0; i < 10; i++) {
  const sourceBuffer = mediaSource.addSourceBuffer(mimeCodec);
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
