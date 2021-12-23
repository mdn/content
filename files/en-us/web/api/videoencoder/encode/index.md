---
title: VideoEncoder.encode()
slug: Web/API/VideoEncoder/encode
tags:
  - API
  - Method
  - Reference
  - encode
  - VideoEncoder
browser-compat: api.VideoEncoder.encode
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`encode()`** method of the {{domxref("VideoEncoder")}} interface enqueues a control message to encode a given {{domxref("VideoFrame")}}.

## Syntax

```js
VideoEncoder.encode(frame);
VideoEncoder.encode(frame, options);
```

### Parameters

- `frame`
  - : A {{domxref("VideoFrame")}} object.
- `options`{{Optional_Inline}}
  - : An object containing the following member:
    - `keyFrame`
      - : A {{jsxref("boolean")}}, defaulting to `false` giving the user agent flexibility to decide if this frame should be encoded as a key frame. If `true` this indicates that the given frame must be encoded as a key frame.

### Return Value

{{jsxref("Undefined")}}.

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

