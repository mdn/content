---
title: 'ServiceWorkerGlobalScope: periodicsync event'
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
tags:
  - Offline
  - PWA
  - Periodic Background Synchronization
  - ServiceWorkerGlobalScope
  - events
browser-compat: api.ServiceWorkerGlobalScope.periodicsync_event
---
{{draft}}{{DefaultAPISidebar("Periodic Background Sync")}}

The **`periodicsync`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired at timed intervals, specified when registering a {{domxref('PeriodicSyncManager')}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Bubbles</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Cancelable</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("PeriodicSyncEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref('ServiceWorkerGlobalScope.onperiodicsync')}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following example shows how to respond to a periodic sync event in the service worker.

```js
self.addEventListener('periodicsync', event => {
  if (event.tag == 'get-latest-news') {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

You can also set up the event handler using the {{domxref('ServiceWorkerGlobalScope.onperiodicsync')}} property:

```js
self.onperiodicsync = (event) => {
  ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://web.dev/periodic-background-sync/)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
