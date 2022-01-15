---
title: SyncEvent
slug: Web/API/SyncEvent
tags:
  - API
  - Background Sync
  - Interface
  - Non-standard
  - Offline
  - Reference
  - ServiceWorker
  - SyncEvent
  - Workers
browser-compat: api.SyncEvent
---
{{APIRef("Service Workers API")}} {{Non-standard_header}}

The **`SyncEvent`** interface represents a sync action that is dispatched on the {{domxref("ServiceWorkerGlobalScope")}} of a ServiceWorker.

This interface inherits from the {{domxref("ExtendableEvent")}} interface.

{{InheritanceDiagram}}

## Constructor

- {{domxref("SyncEvent.SyncEvent()")}}
  - : Creates a new `SyncEvent` object.

## Properties

_Inherits properties from its ancestor, {{domxref("Event")}}_.

- {{domxref("SyncEvent.tag")}} {{readonlyinline}}
  - : Returns the developer-defined identifier for this `SyncEvent`.
- {{domxref("SyncEvent.lastChance")}} {{readonlyinline}}
  - : Returns `true` if the user agent will not make further synchronization attempts after the current attempt.

## Methods

_Inherits methods from its parent, {{domxref("ExtendableEvent")}}_.

None.

## Browser compatibility

{{Compat}}
