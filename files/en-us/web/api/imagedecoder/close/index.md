---
title: ImageDecoder.close()
slug: Web/API/ImageDecoder/close
page-type: web-api-instance-method
tags:
  - API
  - Method
  - Reference
  - close
  - ImageDecoder
browser-compat: api.ImageDecoder.close
---
{{securecontext_header}}{{APIRef("WebCodecs API")}}

The **`close()`** method of the {{domxref("ImageDecoder")}} interface ends all pending work and releases system resources.

## Syntax

```js
close()
```

### Parameters

None.

### Return value

None ({{jsxref("undefined")}}).

## Examples

The following example closes the `ImageDecoder`.

```js
imageDecoder.close();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
