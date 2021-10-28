---
title: VideoFrame.clone()
slug: Web/API/VideoFrame/clone
tags:
  - API
  - Method
  - Reference
  - clone
  - VideoFrame
browser-compat: api.VideoFrame.clone
---
{{DefaultAPISidebar("Web Codecs API")}}

The **`clone()`** method of the {{domxref("VideoFrame")}} interface creates a new `VideoFrame` object with reference to the same media resource as the original.

## Syntax

```js
VideoFrame.clone()
```

### Parameters

None.

### Return Value

The cloned {{domxref("VideoData")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `VideoFrame` object has been {{domxref("Transferable","transfered", "", "true")}}.

## Examples

The following example clones a copy of `VideoFrame` as `videoFrame2`.

```js
let videoFrame2 = VideoFrame.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

