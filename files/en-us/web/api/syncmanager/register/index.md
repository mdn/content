---
title: SyncManager.register()
slug: Web/API/SyncManager/register
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SyncManager.register
---

{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`SyncManager.register`** method of the {{domxref("SyncManager")}} interface registers a synchronization event, triggering a {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}} event inside the associated service worker as soon as network connectivity is available.

## Syntax

```js-nolint
register(tag)
```

### Parameters

- `tag`

  - : An identifier for this synchronization event. This will be the value of the `tag` property of the {{domxref("SyncEvent")}} that gets passed into the service worker's {{domxref("ServiceWorkerGlobalScope.sync_event", "sync")}} event handler.

### Return value

A {{jsxref("Promise")}} that resolves to {{jsxref("undefined")}}.

### Examples

The following asynchronous function registers a background sync from a browsing context:

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
