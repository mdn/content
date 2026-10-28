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

Use the event name in {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js-nolint
addEventListener("periodicsync", (event) => { })
```

Alternatively, assign to the [event handler property](/en-US/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) of the interface:

```js-nolint
onperiodicsync = (event) => { }
```

## Event type

A {{domxref("PeriodicSyncEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("PeriodicSyncEvent")}}

## Examples

The following example shows how to respond to a periodic sync event in the service worker.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

You can also set up the event handler using the `onperiodicsync` property (but note that this replaces other event listeners added using `onperiodicsync`, if any):

```js
self.onperiodicsync = (event) => {
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
