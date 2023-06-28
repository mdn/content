---
title: "VideoEncoder: encode() method"
short-title: encode()
slug: Web/API/VideoEncoder/encode
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.encode
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`encode()`** method of the {{domxref("VideoEncoder")}} interface asynchronously encodes a {{domxref("VideoFrame")}}.
Encoded data ({{domxref("EncodedVideoChunk")}}) or an error will eventually be returned via the callbacks provided to the {{domxref("VideoEncoder")}} constructor.

## Syntax

```js-nolint
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
