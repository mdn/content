---
title: "ServiceWorkerGlobalScope: activate event"
short-title: activate
slug: Web/API/ServiceWorkerGlobalScope/activate_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.activate_event
---

{{APIRef("Service Workers API")}}

The **`activate`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when a {{domxref("ServiceWorkerRegistration")}} acquires a new {{domxref("ServiceWorkerRegistration.active")}} worker.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("activate", (event) => {});

onactivate = (event) => {};
```

## Event type

An {{domxref("ExtendableEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("ExtendableEvent")}}

## Event properties

_Doesn't implement any specific properties, but inherits properties from its parent, {{domxref("Event")}}._

## Examples

The following snippet shows how you could use an `activate` event handler to upgrade a cache.

```js
self.addEventListener("activate", (event) => {
  const cacheAllowlist = ["v2"];

  event.waitUntil(
    caches.forEach((cache, cacheName) => {
      if (!cacheAllowlist.includes(cacheName)) {
        return caches.delete(cacheName);
      }
    }),
  );
});
```

You can also set up the event handler using the `onactivate` property:

```js
self.onactivate = (event) => {
  // ...
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
