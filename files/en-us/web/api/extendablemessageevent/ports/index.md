---
title: "ExtendableMessageEvent: ports property"
short-title: ports
slug: Web/API/ExtendableMessageEvent/ports
page-type: web-api-instance-property
browser-compat: api.ExtendableMessageEvent.ports
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`ports`** read-only property of the
{{domxref("ExtendableMessageEvent")}} interface returns the array containing the
{{domxref("MessagePort")}} objects representing the ports of the associated message
channel (the channel the message is being sent through.)

## Value

An array of {{domxref("MessagePort")}} objects.

## Examples

When the following code is used inside a service worker to respond to a push messages
by sending the data received via {{domxref("PushMessageData")}} to the main context via
a [channel message](/en-US/docs/Web/API/Channel_Messaging_API), the event
object of `onmessage` will be a `ExtendableMessageEvent`.

```js
let port;

self.addEventListener("push", (e) => {
  const obj = e.data.json();

  if (obj.action === "subscribe" || obj.action === "unsubscribe") {
    port.postMessage(obj);
  } else if (obj.action === "init" || obj.action === "chatMsg") {
    port.postMessage(obj);
  }
});

self.onmessage = (e) => {
  port = e.ports[0];
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Channel Messaging](/en-US/docs/Web/API/Channel_Messaging_API)
