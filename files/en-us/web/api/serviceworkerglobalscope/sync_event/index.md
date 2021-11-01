---
title: 'ServiceWorkerGlobalScope: sync event'
slug: Web/API/ServiceWorkerGlobalScope/sync_event
tags:
  - Offline
  - PWA
  - Background Synchronization
  - ServiceWorkerGlobalScope
  - events
browser-compat: api.ServiceWorkerGlobalScope.sync_event
---
{{draft}}{{DefaultAPISidebar("Background Sync")}}

The **`sync`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when the page (or worker) that registered the event with the {{domxref('SyncManager')}} is running and as soon as network connectivity is available.

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
   <td>{{domxref("SyncEvent")}}</td>
  </tr>
  <tr>
   <th scope="row">Event handler property</th>
   <td>{{domxref('ServiceWorkerGlobalScope.onsync')}}</td>
  </tr>
 </tbody>
</table>

## Examples

The following example shows how to respond to a sync event in the service worker.

```js
self.addEventListener('sync', event => {
  if (event.tag == 'sync-messages') {
    event.waitUntil(sendOutboxMessages());
  }
});
```

You can also set up the event handler using the {{domxref('ServiceWorkerGlobalScope.onsync')}} property:

```js
self.onsync = event => {
  ...
};
```

## Specifications

{{Specifications("api.SyncEvent")}}

## Browser compatibility

{{Compat("api.SyncEvent")}}

## See also

<ul>
 <li><a href="https://web.dev/periodic-background-sync/">Richer offline experiences with the Periodic Background Sync API</a></li>
 <li><a href="https://webplatformapis.com/periodic_sync/periodicSync_improved.html">A Periodic Background Sync demo app</a></li>
</ul>
