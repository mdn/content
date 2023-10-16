---
title: "VideoFrame: clone() method"
short-title: clone()
slug: Web/API/VideoFrame/clone
page-type: web-api-instance-method
browser-compat: api.VideoFrame.clone
---

{{APIRef("Web Codecs API")}}

The **`clone()`** method of the {{domxref("VideoFrame")}} interface creates a new `VideoFrame` object with reference to the same media resource as the original.

## Syntax

```js-nolint
clone()
```

### Parameters

None.

### Return value

The cloned {{domxref("VideoData")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `VideoFrame` object has been [transferred](/en-US/docs/Web/API/Web_Workers_API/Transferable_objects).

## Examples

The following example clones a copy of `VideoFrame` as `videoFrame2`.

```js
let videoFrame2 = VideoFrame.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
