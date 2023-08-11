---
title: "ExtendableMessageEvent: source property"
short-title: source
slug: Web/API/ExtendableMessageEvent/source
page-type: web-api-instance-property
browser-compat: api.ExtendableMessageEvent.source
---

{{APIRef("Service Workers API")}}

The **`source`** read-only property of the
{{domxref("ExtendableMessageEvent")}} interface returns a reference to the
{{domxref("Client")}} object from which the message was sent.

## Value

A {{domxref("Client")}}, {{domxref("ServiceWorker")}} or {{domxref("MessagePort")}}
object.

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
  console.log(e.source);
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
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Channel Messaging](/en-US/docs/Web/API/Channel_Messaging_API)
