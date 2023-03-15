---
title: VideoEncoder.reset()
slug: Web/API/VideoEncoder/reset
page-type: web-api-instance-method
browser-compat: api.VideoEncoder.reset
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`reset()`** method of the {{domxref("VideoEncoder")}} interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.

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
