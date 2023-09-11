---
title: "ExtendableMessageEvent: ExtendableMessageEvent() constructor"
short-title: ExtendableMessageEvent()
slug: Web/API/ExtendableMessageEvent/ExtendableMessageEvent
page-type: web-api-constructor
browser-compat: api.ExtendableMessageEvent.ExtendableMessageEvent
---

{{APIRef("Service Workers API")}}

The **`ExtendableMessageEvent()`** constructor creates a new {{domxref("ExtendableMessageEvent")}} object.

## Syntax

```js-nolint
new ExtendableMessageEvent(type)
new ExtendableMessageEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event.
    It is case-sensitive and browsers set it to `messageerror` or `message`.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}}_, can have the following properties:
    - `data` {{optional_inline}}
      - : The event's data; this can be any data type. It defaults to `null`.
    - `origin` {{optional_inline}}
      - : A string that defines the origin of the corresponding service worker's environment settings object.
        It defaults to `""`.
    - `lastEventId` {{optional_inline}}
      - : A string that defines the last event ID of the event source. It defaults to `""`.
    - `source` {{optional_inline}}
      - : The {{domxref("Client")}}, {{domxref("ServiceWorker")}} or {{domxref("MessagePort")}} that sent the message.
        It defaults to `null`.
    - `ports` {{optional_inline}}
      - : An array containing the {{domxref("MessagePort")}} objects connected to the channel sending the message.
        It defaults to an empty array.

### Return value

A new {{domxref("ExtendableMessageEvent")}} object.

## Examples

```js
const options = {
  data: "hello message",
  source: MessagePortReference,
  ports: MessagePortListReference,
};

const myEME = new ExtendableMessageEvent("message", init);
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
