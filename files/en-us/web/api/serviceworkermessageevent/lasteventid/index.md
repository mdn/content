---
title: ServiceWorkerMessageEvent.lastEventId
slug: Web/API/ServiceWorkerMessageEvent/lastEventId
tags:
  - API
  - Deprecated
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerMessageEvent
  - lastEventID
browser-compat: api.ServiceWorkerMessageEvent.lastEventId
---
{{APIRef("Service Workers API")}}{{deprecated_header}}

> **Warning:** In modern browsers, this property has been deprecated.
> Service worker messages will now use the {{domxref("MessageEvent")}} interface, for
> consistency with other web messaging features.

The **`lastEventID`** read-only property of the
{{domxref("ServiceWorkerMessageEvent")}} interface represents, in [server-sent
events](/en-US/docs/Web/API/en-US/docs/Server-sent_events/Using_server-sent_events), the last event ID of the event source.

## Syntax

```js
var myLastEventId = ServiceWorkerMessageEventInstance.lastEventId;
```

### Value

A {{domxref("DOMString")}}.

## Examples

When the following code is used inside the main thread to set up a message channel
between it and a service worker for sending messages between the two, the event object
of `onmessage` will be a `ServiceWorkerMessageEvent`.

```js
navigator.serviceWorker.ready.then(function(reg) {

  ...

      // set up a message channel to communicate with the SW
      var channel = new MessageChannel();
      channel.port1.onmessage = function(e) {
        console.log(e.lastEventId);
        handleChannelMessage(e.data);
      }

      mySW = reg.active;
      mySW.postMessage('hello', [channel.port2]);
  });
```

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
