---
title: ServiceWorkerMessageEvent.source
slug: Web/API/ServiceWorkerMessageEvent/source
tags:
  - API
  - Deprecated
  - Experimental
  - Property
  - Reference
  - Service Workers
  - ServiceWorkerMessageEvent
  - source
browser-compat: api.ServiceWorkerMessageEvent.source
---
{{APIRef("Service Workers API")}}{{deprecated_header}}

> **Warning:** In modern browsers, this property has been deprecated.
> Service worker messages will now use the {{domxref("MessageEvent")}} interface, for
> consistency with other web messaging features.

The **`source`** read-only property of the
{{domxref("ServiceWorkerMessageEvent")}} returns a reference to the
{{domxref("ServiceWorker")}} object of the associated service worker that sent the
message.

## Syntax

```js
var mySource = ServiceWorkerMessageEventInstance.source;
```

### Value

A {{domxref("ServiceWorker")}} or {{domxref("MessagePort")}} object.

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
        console.log(e.source);
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
