---
title: ExtendableEvent.waitUntil()
slug: Web/API/ExtendableEvent/waitUntil
page-type: web-api-instance-method
tags:
  - API
  - ExtendableEvent
  - Method
  - Reference
  - waitUntil
browser-compat: api.ExtendableEvent.waitUntil
---
{{APIRef("Service Workers API")}}

The **`ExtendableEvent.waitUntil()`**
method tells the event dispatcher that work is ongoing. It can also be used to detect
whether that work was successful. In service workers, `waitUntil()` tells
the browser that work is ongoing until the promise settles, and it shouldn't terminate
the service worker if it wants that work to complete.

The {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} events in [service workers](/en-US/docs/Web/API/ServiceWorkerGlobalScope) use
`waitUntil()` to hold the service worker in
the {{domxref("ServiceWorkerRegistration.installing", "installing")}} phase until tasks
complete. If the promise passed to `waitUntil()` rejects, the install is
considered a failure, and the installing service worker is discarded. This is primarily
used to ensure that a service worker is not considered installed until all of the core
caches it depends on are successfully populated.

The {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}} events in [service workers](/en-US/docs/Web/API/ServiceWorkerGlobalScope) use
`waitUntil()` to buffer functional events such as `fetch` and
`push` until the promise passed to `waitUntil()` settles. This
gives the service worker time to update database schemas and delete outdated
{{domxref("Cache", "caches")}}, so other events can rely on a completely upgraded state.

The `waitUntil()` method must be initially called within the event callback,
but after that it can be called multiple times, until all the promises passed to it
settle.

> **Note:** The behavior described in the above paragraph was fixed in
> Firefox 43 (see {{bug(1180274)}}).

## Syntax

```js
waitUntil(promise)
```

### Parameters

A {{jsxref("Promise")}}.

### Return value

None ({{jsxref("undefined")}}).

## Examples

Using `waitUntil()` within a service worker's `install` event:

```js
addEventListener('install', (event) => {
  const preCache = async () => {
    const cache = await caches.open('static-v1');
    return cache.addAll([
      '/',
      '/about/',
      '/static/styles.css'
    ]);
  };
  event.waitUntil(preCache());
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using Service Workers](/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Is ServiceWorker ready?](https://jakearchibald.github.io/isserviceworkerready/)
- {{jsxref("Promise")}}
