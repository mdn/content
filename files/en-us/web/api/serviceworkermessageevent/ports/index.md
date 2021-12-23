---
title: ServiceWorkerMessageEvent.ports
slug: Web/API/ServiceWorkerMessageEvent/ports
tags:
  - API
  - Deprecated
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerMessageEvent
  - ports
browser-compat: api.ServiceWorkerMessageEvent.ports
---
{{APIRef("Service Workers API")}}{{deprecated_header}}

> **Warning:** In modern browsers, this property has been deprecated.
> Service worker messages will now use the {{domxref("MessageEvent")}} interface, for
> consistency with other web messaging features.

The `source` read-only property of the
{{domxref("ServiceWorkerMessageEvent")}} interface returns an array of
{{domxref("MessagePort")}} objects connected with the message channel the message is
being sent through.

## Syntax

```js
var myPorts = ServiceWorkerMessageEventInstance.ports;
```

### Value

An array of {{domxref("MessagePort")}} objects.

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
        console.log(e.ports);
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
