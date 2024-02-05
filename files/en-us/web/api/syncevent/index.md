---
title: SyncEvent
slug: Web/API/SyncEvent
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SyncEvent
---

{{APIRef("Background Sync")}}{{SeeCompatTable}}

The **`SyncEvent`** interface of the {{domxref("Background Synchronization API", "", "", "nocode")}} represents a sync action that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a ServiceWorker.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SyncEvent.SyncEvent", "SyncEvent()")}} {{Experimental_Inline}}
  - : Creates a new `SyncEvent` object.

## Instance properties

_Inherits properties from its parent, {{domxref("ExtendableEvent")}} and {{domxref("Event")}}_.

- {{domxref("SyncEvent.tag")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns the developer-defined identifier for this `SyncEvent`.
- {{domxref("SyncEvent.lastChance")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Returns `true` if the user agent will not make further synchronization attempts after the current attempt.

## Instance methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}} and {{domxref("Event")}}_.

None.

## Browser compatibility

{{Compat}}
