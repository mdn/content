---
title: PushMessageData.text()
slug: Web/API/PushMessageData/text
page-type: web-api-instance-method
tags:
  - API
  - Experimental
  - Method
  - Plain text
  - Push
  - PushMessageData
  - Reference
  - Service Workers
  - Text
browser-compat: api.PushMessageData.text
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`text()`** method of the {{domxref("PushMessageData")}} interface extracts push message data as a plain text string.

## Syntax

```js
text()
```

### Parameters

None.

### Return value

A string.

## Examples

```js
self.addEventListener('push', function(event) {
  const textObj = event.data.text();

  // do something with your text
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
