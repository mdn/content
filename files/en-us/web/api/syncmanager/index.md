---
title: SyncManager
slug: Web/API/SyncManager
page-type: web-api-interface
browser-compat: api.SyncManager
---

{{APIRef("Background Sync")}}{{AvailableInWorkers}}

The **`SyncManager`** interface of the {{domxref("Background Synchronization API", "", "", "nocode")}} provides an interface for registering and listing sync registrations.

## Instance properties

None.

## Instance methods

- {{domxref("SyncManager.register()")}}
  - : Create a new sync registration and return a {{jsxref("Promise")}}.
- {{domxref("SyncManager.getTags()")}}
  - : Return a list of developer-defined identifiers for `SyncManager` registrations.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
