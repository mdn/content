---
title: "PeriodicSyncManager: register() method"
short-title: register()
slug: Web/API/PeriodicSyncManager/register
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.PeriodicSyncManager.register
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}

The **`register()`** method of the
{{domxref("PeriodicSyncManager")}} interface registers a periodic sync request with the
browser with the specified tag and options. It returns a {{jsxref('Promise')}} that
resolves when the registration completes.

## Syntax

```js-nolint
register(tag, options)
```

### Parameters

- `tag`
  - : A unique {{jsxref('String')}} identifier
- `options` {{optional_inline}}

  - : An {{jsxref('Object')}} containing the following optional data:

    - `minInterval`
      - : The minimum interval time, in milliseconds, at which
        the periodic sync should occur.

### Return value

Returns a {{jsxref("Promise")}} that resolves with {{jsxref('undefined')}}

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Returned if there is no active {{domxref('ServiceWorker')}} present.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Returned if permission for background periodic sync is not granted.
- `InvalidAccessError` {{domxref("DOMException")}}
  - : Returned if the active window is not the main window (not of `auxiliary` or `top-level` type).

## Examples

The following asynchronous function registers a periodic background sync at a minimum
interval of one day from a browsing context:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("fetch-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
