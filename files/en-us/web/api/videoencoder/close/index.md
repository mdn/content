---
title: VideoEncoder.close()
slug: Web/API/VideoEncoder/close
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - close
  - VideoEncoder
  - Experimental
browser-compat: api.VideoEncoder.close
---
{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`close()`** method of the {{domxref("VideoEncoder")}} interface ends all pending work and releases system resources.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example closes the `VideoEncoder`.

```js
VideoEncoder.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
