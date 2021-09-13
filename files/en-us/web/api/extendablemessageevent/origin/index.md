---
title: ExtendableMessageEvent.origin
slug: Web/API/ExtendableMessageEvent/origin
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Property
  - Reference
  - Service Workers
  - origin
browser-compat: api.ExtendableMessageEvent.origin
---
{{APIRef("Service Workers API")}}

The **`origin`** read-only property of the
{{domxref("ExtendableMessageEvent")}} interface returns the origin of the
{{domxref("Client")}} that sent the message.

## Syntax

```js
var myOrigin = extendableMessageEvent.origin;
```

### Value

A {{domxref("USVString")}}.

## Examples

When the following code is used inside a service worker to respond to a push messages
by sending the data received via {{domxref("PushMessageData")}} to the main context via
a [channel message](/en-US/docs/Web/API/Channel_Messaging_API), the event
object of `onmessage` will be a `ExtendableMessageEvent`.

```js
var port;

self.addEventListener('push', function(e) {
  var obj = e.data.json();

  if(obj.action === 'subscribe' || obj.action === 'unsubscribe') {
    port.postMessage(obj);
  } else if(obj.action === 'init' || obj.action === 'chatMsg') {
    port.postMessage(obj);
  }
});

self.onmessage = function(e) {
  console.log(e.origin);
  port = e.ports[0];
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service
  Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service
  workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker
  ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Channel Messaging](/en-US/docs/Web/API/Channel_Messaging_API)
