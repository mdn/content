---
title: "ServiceWorkerGlobalScope: periodicsync event"
short-title: periodicsync
slug: Web/API/ServiceWorkerGlobalScope/periodicsync_event
page-type: web-api-event
status:
  - experimental
browser-compat: api.ServiceWorkerGlobalScope.periodicsync_event
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`periodicsync`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired at timed intervals, specified when registering a {{domxref('PeriodicSyncManager')}}.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener("periodicsync", (event) => {});

onperiodicsync = (event) => {};
```

## Event type

A {{domxref("PeriodicSyncEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Event properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref('PeriodicSyncEvent.tag')}} {{ReadOnlyInline}}
  - : Returns the developer-defined identifier for this `PeriodicSyncEvent`. Multiple tags can be used by the web app to run different periodic tasks at different frequencies.

## Examples

The following example shows how to respond to a periodic sync event in the service worker.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

You can also set up the event handler using the `onperiodicsync` property:

```js
self.onperiodicsync = (event) => {
  // ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [A Periodic Background Sync demo app](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
