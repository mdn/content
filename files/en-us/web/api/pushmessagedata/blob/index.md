---
title: PushMessageData.blob()
slug: Web/API/PushMessageData/blob
page-type: web-api-instance-method
tags:
  - API
  - Blob
  - Method
  - Push
  - PushMessageData
  - Reference
  - Service Workers
browser-compat: api.PushMessageData.blob
---
{{APIRef("Push API")}}

The **`blob()`** method of the {{domxref("PushMessageData")}} interface extracts push message data as a {{domxref("Blob")}} object.

## Syntax

```js
blob()
```

### Parameters

None.

### Return value

A {{domxref("Blob")}}.

## Examples

```js
self.addEventListener('push', (event) => {
  const blob = event.data.blob();

  // do something with your Blob
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
