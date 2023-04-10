---
title: "MessageEvent: ports property"
short-title: ports
slug: Web/API/MessageEvent/ports
page-type: web-api-instance-property
browser-compat: api.MessageEvent.ports
---

{{APIRef("HTML DOM")}}

The **`ports`** read-only property of the
{{domxref("MessageEvent")}} interface is an array of {{domxref("MessagePort")}} objects
representing the ports associated with the channel the message is being sent through
(where appropriate, e.g. in channel messaging or when sending a message to a shared
worker).

## Value

An array of {{domxref("MessagePort")}} objects.

## Examples

```js
onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener("message", (e) => {
    const workerResult = `Result: ${e.data[0] * e.data[1]}`;
    port.postMessage(workerResult);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ExtendableMessageEvent")}} — similar to this interface but used in
  interfaces that needs to give more flexibility to authors.
