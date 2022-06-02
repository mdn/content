---
title: ImageDecoder.reset()
slug: Web/API/ImageDecoder/reset
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - reset
  - ImageDecoder
browser-compat: api.ImageDecoder.reset
---
{{securecontext_header}}{{DefaultAPISidebar("WebCodecs API")}}

The **`reset()`** method of the {{domxref("ImageDecoder")}} interface resets all states including configuration, control messages in the control message queue, and all pending callbacks.

## Syntax

```js
reset()
```

### Parameters

None.

### Return value

{{jsxref("Undefined")}}.

## Examples

The following example resets the `ImageDecoder`.

```js
ImageDecoder.reset();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
