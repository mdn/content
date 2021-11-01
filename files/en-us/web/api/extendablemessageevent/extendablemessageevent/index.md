---
title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
tags:
  - API
  - Constructor
  - Experimental
  - ExtendableMessageEvent
  - Reference
  - Service Workers
browser-compat: api.ExtendableMessageEvent.ExtendableMessageEvent
---
{{APIRef("Service Workers API")}}

The
**`ExtendableMessageEvent()`**
constructor creates a new {{domxref("ExtendableMessageEvent")}} object instance.

## Syntax

```js
var extendableMessageEvent = new ExtendableMessageEvent(type, init);
```

### Parameters

- type
  - : A {{domxref("DOMString")}} that defines the type of the message event being created.
- init {{optional_inline}}

  - : An initialization object, which should contain the following parameters:

    - `data`: The event's data — this can be any data type.
    - `origin`: A {{domxref("DOMString")}} that defines the origin of the
      corresponding service worker's environment settings object.
    - `lastEventId`: A {{domxref("DOMString")}} that defines the last event
      ID of the event source.
    - `source`: The {{domxref("Client")}}, {{domxref("ServiceWorker")}} or
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

var myEME = new ExtendableMessageEvent('message', init);
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
