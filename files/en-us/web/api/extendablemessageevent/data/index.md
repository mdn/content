---
title: ExtendableMessageEvent.data
slug: Web/API/ExtendableMessageEvent/data
tags:
  - API
  - Experimental
  - ExtendableMessageEvent
  - Property
  - Reference
  - Service Workers
  - data
browser-compat: api.ExtendableMessageEvent.data
---
{{APIRef("Service Workers API")}}

The **`data`** read-only property of the
{{domxref("ExtendableMessageEvent")}} interface returns the event's data. It can be any
data type.

## Syntax

```js
var myData = extendableMessageEvent.data;
```

### Value

Any data type.

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
  console.log(e.data);
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
