---
title: SyncEvent.lastChance
slug: Web/API/SyncEvent/lastChance
page-type: web-api-instance-property
tags:
  - API
  - Background Sync
  - Experimental
  - Property
  - Reference
  - ServiceWorker
  - SyncEvent
  - lastChance
browser-compat: api.SyncEvent.lastChance
---
{{SeeCompatTable}}{{APIRef("")}}

The **`SyncEvent.lastChance`** read-only property of the
{{domxref("SyncEvent")}} interface returns `true` if the user agent will not
make further synchronization attempts after the current attempt. This is the value
passed in the `lastChance` parameter of the
{{domxref("SyncEvent.SyncEvent","SyncEvent()")}} constructor.

## Value

A boolean value that indicates whether the user agent will not make further
synchronization attempts after the current attempt.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
