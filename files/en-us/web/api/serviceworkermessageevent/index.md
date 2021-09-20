---
title: ServiceWorkerMessageEvent
slug: Web/API/ServiceWorkerMessageEvent
tags:
  - API
  - Deprecated
  - Experimental
  - Interface
  - Offline
  - Service Workers
  - ServiceWorkerMessageEvent
  - Workers
browser-compat: api.ServiceWorkerMessageEvent
---
{{APIRef("Service Workers API")}}{{deprecated_header}}

> **Warning:** In modern browsers, this interface has been deprecated. Service worker messages will now use the {{domxref("MessageEvent")}} interface, for consistency with other web messaging features.

The **`ServiceWorkerMessageEvent`** interface of the {{domxref("Service_Worker_API", "ServiceWorker API")}} contains information about an event sent to a {{domxref("ServiceWorkerContainer")}} target. This extends the default {{event("message")}} event to allow setting a {{domxref("ServiceWorker")}} object as the source of a message. The event object is accessed via the handler function of a {{event("message_(ServiceWorker)","message")}} event, when fired by a message received from a service worker.

This interface inherits from the {{domxref("Event")}} interface.

## Constructor

- {{domxref("ServiceWorkerMessageEvent.ServiceWorkerMessageEvent()")}} {{deprecated_inline}}
  - : Creates a new `ServiceWorkerMessageEvent` object instance.

## Properties

_Inherits properties from its parent, {{domxref("Event")}}_.

- {{domxref("ServiceWorkerMessageEvent.data")}} {{readonlyinline}} {{deprecated_inline}}
  - : Returns the event's data. It can be any data type.
- {{domxref("ServiceWorkerMessageEvent.origin")}} {{readonlyinline}} {{deprecated_inline}}
  - : Returns the origin of the service worker's environment settings object.
- {{domxref("ServiceWorkerMessageEvent.lastEventId")}} {{readonlyinline}} {{deprecated_inline}}
  - : Represents, in [server-sent events](en-US/docs/Server-sent_events/Using_server-sent_events), the last event ID of the event source.
- {{domxref("ServiceWorkerMessageEvent.source")}} {{readonlyinline}} {{deprecated_inline}}
  - : Returns a reference to the service worker that sent the message.
- {{domxref("ServiceWorkerMessageEvent.ports")}} {{readonlyinline}} {{deprecated_inline}}
  - : Returns an array of {{domxref("MessagePort")}} objects.

## Methods

_Inherits methods from its parent, {{domxref("Event")}}_.

## Examples

When the following code is used inside the main thread to set up a message channel between it and a service worker for sending messages between the two, the event object of `onmessage` will be a `ServiceWorkerMessageEvent`.

```js
navigator.serviceWorker.ready.then(function(reg) {

  ...

      // set up a message channel to communicate with the SW
      var channel = new MessageChannel();
      channel.port1.onmessage = function(e) {
        console.log(e);
        handleChannelMessage(e.data);
      }

      mySW = reg.active;
      mySW.postMessage('hello', [channel.port2]);
  });
```

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/sw-test)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
