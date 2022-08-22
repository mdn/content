---
title: VideoEncoder.encode()
slug: Web/API/VideoEncoder/encode
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - encode
  - VideoEncoder
  - Experimental
browser-compat: api.VideoEncoder.encode
---
{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`encode()`** method of the {{domxref("VideoEncoder")}} interface enqueues a control message to encode a given {{domxref("VideoFrame")}}.

## Syntax

```js
encode(frame)
encode(frame, options)
```

### Parameters

- `frame`
  - : A {{domxref("VideoFrame")}} object.
- `options` {{optional_inline}}
  - : An object containing the following member:
    - `keyFrame`
      - : A {{jsxref("boolean")}}, defaulting to `false` giving the user agent flexibility to decide if this frame should be encoded as a key frame. If `true` this indicates that the given frame must be encoded as a key frame.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("VideoEncoder.state","state")}} is not `"configured"`.
- `DataError` {{domxref("DOMException")}}
  - : Thrown if the `chunk` cannot be decoded due to relying on other frames for decoding.

## Examples

In the following example `encode` is passed a `VideoFrame`, and the options parameter indicating that this frame should be considered a keyframe.

```js
encoder.encode(frame, { keyFrame: true });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
