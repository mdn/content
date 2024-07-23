---
title: "VideoDecoder: close() method"
short-title: close()
slug: Web/API/VideoDecoder/close
page-type: web-api-instance-method
browser-compat: api.VideoDecoder.close
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

The **`close()`** method of the {{domxref("VideoDecoder")}} interface ends all pending work and releases system resources.

## Syntax

```js-nolint
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example closes the `VideoDecoder`.

```js
VideoDecoder.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
