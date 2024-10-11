---
title: "MessageEvent: data property"
short-title: data
slug: Web/API/MessageEvent/data
page-type: web-api-instance-property
browser-compat: api.MessageEvent.data
---

{{APIRef("HTML DOM")}}{{AvailableInWorkers}}

The **`data`** read-only property of the
{{domxref("MessageEvent")}} interface represents the data sent by the message emitter.

## Value

The data sent by the message emitter; this can be any data type, depending on what originated this event.

## Examples

```js
myWorker.onmessage = (e) => {
  result.textContent = e.data;
  console.log("Message received from worker");
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
