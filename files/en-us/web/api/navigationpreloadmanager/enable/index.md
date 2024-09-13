---
title: "NavigationPreloadManager: enable() method"
short-title: enable()
slug: Web/API/NavigationPreloadManager/enable
page-type: web-api-instance-method
browser-compat: api.NavigationPreloadManager.enable
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

The **`enable()`** method of the {{domxref("NavigationPreloadManager")}} interface is used to enable preloading of resources managed by the service worker.
It returns a promise that resolves with `undefined`.

The method should be called in the service worker's `activate` event handler, which ensures it is called before any `fetch` event handler can fire.

## Syntax

```js-nolint
enable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : There is no active worker associated with the registration to which this {{domxref("NavigationPreloadManager")}} belongs.

## Examples

The code below shows how to enable preloading, after first using {{domxref("ServiceWorkerRegistration.navigationPreload")}} to test that it is supported.

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
      }
    })(),
  );
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

{{domxref("NavigationPreloadManager.disable()")}}
