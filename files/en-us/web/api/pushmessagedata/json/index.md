---
title: PushMessageData.json()
slug: Web/API/PushMessageData/json
tags:
  - API
  - Experimental
  - JSON
  - Method
  - Push
  - PushMessageData
  - Reference
  - Service Workers
browser-compat: api.PushMessageData.json
---
{{APIRef("Push API")}}{{SeeCompatTable()}}

The **`json()`** method of the {{domxref("PushMessageData")}} interface extracts push message data by parsing it as a [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) string and returning the result.

## Syntax

```js
var myData = pushEvent.data.json();
```

### Parameters

None.

### Returns

The result of parsing push event data as JSON. This could be anything that can be represented by JSON — an object, an array, a string, a number...

## Examples

```js
self.addEventListener('push', function(event) {
  var myData = event.data.json();

  // do something with your data
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
