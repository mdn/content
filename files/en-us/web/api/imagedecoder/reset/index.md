---
title: "ImageDecoder: reset() method"
short-title: reset()
slug: Web/API/ImageDecoder/reset
page-type: web-api-instance-method
browser-compat: api.ImageDecoder.reset
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

The **`reset()`** method of the {{domxref("ImageDecoder")}} interface aborts all pending `decode()` operations; rejecting all pending promises. All other state will be unchanged. Class methods can continue to be invoked after `reset()`. E.g., calling `decode()` after `reset()` is permitted.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example resets the `ImageDecoder`.

```js
for (let i = 0; i < imageDecoder.tracks.selectedTrack.frameCount; ++i)
  imageDecoder.decode({ frameIndex: i }).catch(console.log);
imageDecoder.reset();
imageDecoder.decode({ frameIndex: 0 }).then(console.log);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
