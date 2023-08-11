---
title: "NavigationPreloadManager: disable() method"
short-title: disable()
slug: Web/API/NavigationPreloadManager/disable
page-type: web-api-instance-method
browser-compat: api.NavigationPreloadManager.disable
---

{{APIRef("Service Workers API")}}

The **`disable()`** method of the {{domxref("NavigationPreloadManager")}} interface halts the automatic preloading of service-worker-managed resources previously started using {{domxref("NavigationPreloadManager.enable()","enable()")}}
It returns a promise that resolves with `undefined`.

The method may be called in the service worker's `activate` event handler (before the `fetch` event handler can be called).

## Syntax

```js-nolint
disable()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : There is no active worker associated with the registration to which this {{domxref("NavigationPreloadManager")}} belongs.

## Examples

The code below shows how to disable preloading, after first using {{domxref("ServiceWorkerRegistration.navigationPreload")}} to test that it is supported.

```js
addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      if (self.registration.navigationPreload) {
        // Disable navigation preloads!
        await self.registration.navigationPreload.disable();
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

{{domxref("NavigationPreloadManager.enable()")}}
