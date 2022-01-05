---
title: ServiceWorkerMessageEvent()
slug: Web/API/ServiceWorkerMessageEvent/ServiceWorkerMessageEvent
tags:
  - API
  - Constructor
  - Deprecated
  - Experimental
  - Reference
  - Service Workers
  - ServiceWorkerMessageEvent
browser-compat: api.ServiceWorkerMessageEvent.ServiceWorkerMessageEvent
---
{{APIRef("Service Workers API")}}{{deprecated_header}}

> **Warning:** In modern browsers, this property has been deprecated.
> Service worker messages will now use the {{domxref("MessageEvent")}} interface, for
> consistency with other web messaging features.

The **`ServiceWorkerMessageEvent()`** constructor creates a new
{{domxref("ServiceWorkerMessageEvent")}} object instance.

## Syntax

```js
var mySWME = new ServiceWorkerMessageEvent(type, init);
```

### Parameters

- type
  - : A {{domxref("DOMString")}} that defines the type of the message event being created.
- init {{optional_inline}}

  - : An initialization object, which should contain the following parameters:

    - `data`: The event's data — this can be any type.
    - `origin`: A {{domxref("DOMString")}} that defines the origin of the
      corresponding service worker's environment settings object.
    - `lastEventId`: A {{domxref("DOMString")}} that defines the last event
      ID of the event source.
    - `source`: The {{domxref("ServiceWorker")}} or
      {{domxref("MessagePort")}} that sent the message.
    - `ports`: An array containing the {{domxref("MessagePort")}} objects
      connected to the channel sending the message.

## Examples

```js
var init = {
             data : 'hello message',
             source : MessagePortReference,
             ports : MessagePortListReference
           }

var mySWME = new ServiceWorkerMessageEvent('message', init);
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
