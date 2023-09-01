---
title: "ExtendableEvent: ExtendableEvent() constructor"
short-title: ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
page-type: web-api-constructor
browser-compat: api.ExtendableEvent.ExtendableEvent
---

{{APIRef("Service Workers API")}}

The **`ExtendableEvent()`** constructor creates a new {{domxref("ExtendableEvent")}} object.

## Syntax

```js-nolint
new ExtendableEvent(type)
new ExtendableEvent(type, options)
```

### Parameters

- `type`
  - : A string with the name of the event. It is case-sensitive.
- `options` {{optional_inline}}
  - : An object that, _in addition of the properties defined in {{domxref("Event/Event", "Event()")}}_, can contain any custom settings
    that you want to apply to the event object.
    Currently no possible options are mandatory,
    but this has been defined for forward compatibility across the different derived events.

### Return value

A new {{domxref("ExtendableEvent")}} object.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service workers basic code example](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
