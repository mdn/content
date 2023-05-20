---
title: "VideoEncoder: reset() method"
short-title: reset()
slug: Web/API/VideoEncoder/reset
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.reset
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`reset()`** method of the {{domxref("VideoEncoder")}} interface synchronously cancels all pending encodes and callbacks, frees all underlying resources and sets the {{domxref("VideoEncoder.state", "state")}} to "unconfigured".
After calling {{domxref("VideoEncoder.reset()", "reset()")}}, {{domxref("VideoEncoder.configure()", "configure()")}} must be called before resuming {{domxref("VideoEncoder.encode()", "encode()")}} calls.

> **Note:** To avoid discarding frames queued via {{domxref("VideoEncoder.encode()", "encode()")}}, {{domxref("VideoEncoder.flush()", "flush()")}} should be called and completed before calling {{domxref("VideoEncoder.reset()", "reset()")}}.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the {{domxref("VideoEncoder.state","state")}} is `"closed"`.

## Examples

The following example resets the `VideoEncoder`.

```js
VideoEncoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
