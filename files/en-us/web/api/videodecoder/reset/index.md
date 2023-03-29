---
title: VideoDecoder.reset()
slug: Web/API/VideoDecoder/reset
page-type: web-api-instance-method
browser-compat: api.VideoDecoder.reset
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}

The **`reset()`** method of the {{domxref("VideoDecoder")}} interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.

## Syntax

```js-nolint
reset()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example resets the `VideoDecoder`.

```js
VideoDecoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
