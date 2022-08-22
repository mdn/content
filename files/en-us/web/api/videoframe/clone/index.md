---
title: VideoFrame.clone()
slug: Web/API/VideoFrame/clone
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - clone
  - VideoFrame
  - Experimental
browser-compat: api.VideoFrame.clone
---
{{APIRef("Web Codecs API")}}{{SeeCompatTable}}

The **`clone()`** method of the {{domxref("VideoFrame")}} interface creates a new `VideoFrame` object with reference to the same media resource as the original.

## Syntax

```js
clone()
```

### Parameters

None.

### Return value

The cloned {{domxref("VideoData")}} object.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the `VideoFrame` object has been {{Glossary("Transferable Objects","transferred")}}.

## Examples

The following example clones a copy of `VideoFrame` as `videoFrame2`.

```js
let videoFrame2 = VideoFrame.clone();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
