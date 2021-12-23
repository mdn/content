---
title: PushMessageData.blob()
slug: Web/API/PushMessageData/blob
tags:
  - API
  - Blob
  - Experimental
  - Method
  - Push
  - PushMessageData
  - Reference
  - Service Workers
browser-compat: api.PushMessageData.blob
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`blob()`** method of the {{domxref("PushMessageData")}} interface extracts push message data as a {{domxref("Blob")}} object.

## Syntax

```js
var myBlob = PushEvent.data.blob();
```

### Parameters

None.

### Returns

A {{domxref("Blob")}}.

## Examples

```js
self.addEventListener('push', function(event) {
  var blob = event.data.blob();

  // do something with your Blob
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
