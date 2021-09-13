---
title: FetchEvent.isReload
slug: Web/API/FetchEvent/isReload
tags:
  - API
  - Experimental
  - FetchEvent
  - Property
  - Reference
  - Service
  - Service Workers
  - Workers
  - isReload
  - Deprecated
browser-compat: api.FetchEvent.isReload
---
{{APIRef("Service Workers API")}}{{deprecated_header}}

The **`isReload`** read-only property of the
{{domxref("FetchEvent")}} interface returns `true` if the event was
dispatched by the user attempting to reload the page, and `false` otherwise.
Pressing the refresh button is a reload while clicking a link and pressing the back
button is not.

## Syntax

```js
var reloaded = FetchEvent.isReload
```

### Value

A boolean value.

## Example

```js
self.addEventListener('fetch', function(event) {
  event.respondWith(
    if (event.isReload) {
      //Return something
    } else {
      //Return something else
    };
  );
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
- {{jsxref("Promise")}}
- [Using web workers](/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
