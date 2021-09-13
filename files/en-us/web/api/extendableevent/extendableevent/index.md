---
title: ExtendableEvent()
slug: Web/API/ExtendableEvent/ExtendableEvent
tags:
  - API
  - Constructor
  - Experimental
  - ExtendableEvent
  - Reference
  - Service Workers
  - ServiceWorker
browser-compat: api.ExtendableEvent.ExtendableEvent
---
{{APIRef("Service Workers API")}}

The **`ExtendableEvent()`** constructor creates a new
{{domxref("ExtendableEvent")}} object.

## Syntax

```js
var extendableEvent = new ExtendableEvent(type, init);
```

### Parameters

- `type`
  - : The type of the ExtendableEvent, for example {{Event("install")}},
    {{Event("activate")}}.
- `init` {{optional_inline}}
  - : An options object containing any custom settings that you want to apply to the event
    object. Currently no possible options exist inside the spec, but this has been defined
    for forward compatibility across the different derived events.

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
- {{jsxref("Promise")}}
- [Using web
  workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
