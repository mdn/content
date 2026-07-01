---
title: "RTCEncodedAudioFrame: RTCEncodedAudioFrame() constructor"
short-title: RTCEncodedAudioFrame()
slug: Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame
page-type: web-api-constructor
browser-compat: api.RTCEncodedAudioFrame.RTCEncodedAudioFrame
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`RTCEncodedAudioFrame()`** constructor creates a new and fully independent {{domxref("RTCEncodedAudioFrame")}} object.

The new object is a deep clone of the original object data and metadata, with any metadata specified in the options parameter overwriting the copied values.

## Syntax

```js-nolint

new RTCEncodedAudioFrame(originalFrame);
new RTCEncodedAudioFrame(originalFrame, options);
```

### Parameters

- `originalFrame`
  - : The frame to be copied.
- `options` {{optional_inline}}
  - : This is an object with the following property:
    - `metadata` {{optional_inline}}
      - : An object setting the frame metadata.
        This is an object with the same properties as the object returned by {{DOMxRef("RTCEncodedAudioFrame.getMetadata()")}}.

### Exceptions

- {{jsxref("TypeError")}}
  - The source buffer is detached.
- {{jsxref("RangeError")}}
  - The allocation is too large.

## Examples

### Cloning a frame with modified metadata

This snippet shows how you might copy a frame and modify its metadata.
In this case we just update the capture time.

```js
// Frame is an incoming RTCEncodedAudioFrame
frame.getMetadata();

const newFrame = new RTCEncodedAudioFrame(frame, {
  metadata: {
    captureTime: frame.metadata.captureTime + 3,
  },
});
```

This kind of modification might be useful if you need to create multiple outgoing frames from a single incoming frame; for example, in order to relay media to another peer on the network.
Generally you will not need to modify the metadata for a frame.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
