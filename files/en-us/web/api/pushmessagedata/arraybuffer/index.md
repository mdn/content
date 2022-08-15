---
title: PushMessageData.arrayBuffer()
slug: Web/API/PushMessageData/arrayBuffer
page-type: web-api-instance-method
tags:
  - API
  - ArrayBuffer
  - Method
  - Push
  - PushMessageData
  - Reference
  - Service Workers
browser-compat: api.PushMessageData.arrayBuffer
---
{{APIRef("Push API")}}

The **`arrayBuffer()`** method of the {{domxref("PushMessageData")}} interface extracts push message data as an {{jsxref("ArrayBuffer")}} object.

## Syntax

```js
arrayBuffer()
```

### Parameters

None.

### Return value

An {{jsxref("ArrayBuffer")}}.

## Examples

```js
self.addEventListener('push', (event) => {
  const buffer = event.data.arrayBuffer();

  // do something with your array buffer
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
