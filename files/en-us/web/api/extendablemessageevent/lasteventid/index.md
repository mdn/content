---
title: "ExtendableMessageEvent: lastEventId property"
short-title: lastEventId
slug: Web/API/ExtendableMessageEvent/lastEventId
page-type: web-api-instance-property
browser-compat: api.ExtendableMessageEvent.lastEventId
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

The **`lastEventID`** read-only property of the
{{domxref("ExtendableMessageEvent")}} interface represents, in [server-sent events](/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events), the last event ID of the event source. This is an empty string.

## Value

A string.

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
  console.log(e.lastEventId);
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
