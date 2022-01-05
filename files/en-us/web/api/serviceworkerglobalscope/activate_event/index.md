---
title: 'ServiceWorkerGlobalScope: activate event'
slug: Web/API/ServiceWorkerGlobalScope/activate_event
tags:
  - API
  - Event
  - Reference
  - Service Workers
  - ServiceWorkerGlobalScope
browser-compat: api.ServiceWorkerGlobalScope.activate_event
---
{{APIRef("Service Workers API")}}

The **`activate`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active")}} worker.

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
      <td>{{domxref("ExtendableEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Event handler property</th>
      <td>
        {{domxref("ServiceWorkerGlobalScope.onactivate")}}
      </td>
    </tr>
  </tbody>
</table>

## Examples

The following snippet shows how you could use an `activate` event handler to upgrade a cache.

```js
globalScope.addEventListener('activate', function(event) {
  var cacheAllowlist = ['v2'];

  event.waitUntil(
    caches.forEach(function(cache, cacheName) {
      if (cacheAllowlist.indexOf(cacheName) == -1) {
        return caches.delete(cacheName);
      }
    })
  );
});
```

You can also set up the event handler using the {{domxref("ServiceWorkerGlobalScope.onactivate")}} property:

```js
globalScope.onactivate = function(event) {
  ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}} event
- {{domxref("ServiceWorkerGlobalScope")}}
- [Service Worker API](/en-US/docs/Web/API/Service_Worker_API)
