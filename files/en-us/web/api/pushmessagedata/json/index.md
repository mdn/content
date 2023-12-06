---
title: "PushMessageData: json() method"
short-title: json()
slug: Web/API/PushMessageData/json
page-type: web-api-instance-method
browser-compat: api.PushMessageData.json
---

{{APIRef("Push API")}}

The **`json()`** method of the {{domxref("PushMessageData")}} interface extracts push message data by parsing it as a [JSON](/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) string and returning the result.

## Syntax

```js-nolint
json()
```

### Parameters

None.

### Return value

The result of parsing push event data as JSON. This could be anything that can be represented by JSON — an object, an array, a string, a number…

## Examples

```js
self.addEventListener("push", (event) => {
  const myData = event.data.json();

  // do something with your data
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
