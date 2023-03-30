---
title: VideoEncoder.reset()
slug: Web/API/VideoEncoder/reset
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.reset
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`reset()`** method of the {{domxref("VideoEncoder")}} interface cancels all pending encodes and callbacks, frees all underlying resources and sets the `state` to "unconfigured".
After calling `reset()`, `configure()` must be called before resuming `encode()` calls.

> **Note:** To avoid discarding frames queued via `encode()`, `flush()` should be called and completed before calling `reset()`.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example resets the `VideoEncoder`.

```js
VideoEncoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
