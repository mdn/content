---
title: 'ServiceWorkerGlobalScope: sync event'
slug: Web/API/ServiceWorkerGlobalScope/sync_event
page-type: web-api-event
tags:
  - Offline
  - PWA
  - Background Synchronization
  - ServiceWorkerGlobalScope
  - events
browser-compat: api.ServiceWorkerGlobalScope.sync_event
---
{{DefaultAPISidebar("Background Sync")}}

The **`sync`** event of the {{domxref("ServiceWorkerGlobalScope")}} interface is fired when the page (or worker) that registered the event with the {{domxref('SyncManager')}} is running and as soon as network connectivity is available.

This event is not cancelable and does not bubble.

## Syntax

Use the event name in methods like {{domxref("EventTarget.addEventListener", "addEventListener()")}}, or set an event handler property.

```js
addEventListener('sync', (event) => { });

onsync = (event) => { };
```

## Event type

A {{domxref("SyncEvent")}}. Inherits from {{domxref("Event")}}.

{{InheritanceDiagram("SyncEvent")}}

## Event properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}}
  - : Returns the developer-defined identifier for this `SyncEvent`.
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}}
  - : Returns `true` if the user agent will not make further synchronization attempts after the current attempt.

## Examples

The following example shows how to respond to a sync event in the service worker.

```js
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-messages') {
    event.waitUntil(sendOutboxMessages());
  }
});
```

You can also set up the event handler using the `onsync` property:

```js
self.onsync = (event) => {
  // ...
};
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

<ul>
 <li><a href="https://web.dev/periodic-background-sync/">Richer offline experiences with the Periodic Background Sync API</a></li>
 <li><a href="https://webplatformapis.com/periodic_sync/periodicSync_improved.html">A Periodic Background Sync demo app</a></li>
</ul>
