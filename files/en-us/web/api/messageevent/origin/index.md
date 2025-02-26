---
title: "MessageEvent: origin property"
short-title: origin
slug: Web/API/MessageEvent/origin
page-type: web-api-instance-property
browser-compat: api.MessageEvent.origin
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`origin`** read-only property of the
{{domxref("MessageEvent")}} interface is a string representing the
origin of the message emitter.

## Value

A string representing the origin.

## Examples

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
  console.log(e.origin);
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
