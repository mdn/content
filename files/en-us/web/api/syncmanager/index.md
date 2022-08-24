---
title: SyncManager
slug: Web/API/SyncManager
page-type: web-api-interface
tags:
  - API
  - Interface
  - Reference
  - ServiceWorker
  - SyncManager
  - Experimental
browser-compat: api.SyncManager
---
{{APIRef("Service Workers API")}}{{SeeCompatTable}}

The **`SyncManager`** interface of the [ServiceWorker API](/en-US/docs/Web/API/Service_Worker_API) provides an interface for registering and listing sync registrations.

## Properties

None.

## Methods

- {{domxref("SyncManager.register")}} {{Experimental_Inline}}
  - : Create a new sync registration and return a {{jsxref("Promise")}}.
- {{domxref("SyncManager.getTags")}} {{Experimental_Inline}}
  - : Return a list of developer-defined identifiers for SyncManager registration.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
