---
title: StorageManager
slug: Web/API/StorageManager
page-type: web-api-interface
tags:
  - API
  - Interface
  - Persistence
  - Quotas
  - Reference
  - Secure context
  - Storage
  - Storage API
  - StorageManager
  - Usage
browser-compat: api.StorageManager
---
{{securecontext_header}}{{APIRef("Storage")}}

The **`StorageManager`** interface of the [Storage API](/en-US/docs/Web/API/Storage_API) provides an interface for managing persistence permissions and estimating available storage. You can get a reference to this interface using either {{domxref("navigator.storage")}} or {{domxref("WorkerNavigator.storage")}}.

## Methods

- {{domxref("StorageManager.estimate()")}} {{securecontext_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves to an object containing usage and quota numbers for your origin.
- {{domxref("StorageManager.persist()")}} {{securecontext_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves to `true` if the user agent is able to persist your site's storage.
- {{domxref("StorageManager.persisted()")}} {{securecontext_inline}}
  - : Returns a {{jsxref('Promise')}} that resolves to `true` if persistence has already been granted for your site's storage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
