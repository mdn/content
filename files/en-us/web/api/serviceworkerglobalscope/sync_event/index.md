---
title: "ServiceWorkerGlobalScope: sync event"
short-title: sync
slug: Web/API/ServiceWorkerGlobalScope/sync_event
page-type: web-api-event
browser-compat: api.ServiceWorkerGlobalScope.sync_event
---

{{APIRef("Background Sync")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

The **`sync`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when the page (or worker) that registered the event with the {{domxref('SyncManager')}} is running and as soon as network connectivity is available.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js-nolint
addEventListener("sync", (event) => { })

onsync = (event) => { }
```

## Event type

A {{domxref("SyncEvent")}}. Inherits from {{domxref("ExtendableEvent")}} and {{domxref("Event")}}.

{{InheritanceDiagram("SyncEvent")}}

## Examples

The following example shows how to respond to a sync event in the service worker.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

You can also set up the event handler using the `onsync` property:

```js
self.onsync = (event) => {
  // …
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Richer offline experiences with the Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
