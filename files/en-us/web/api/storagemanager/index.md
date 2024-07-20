---
title: StorageManager
slug: Web/API/StorageManager
page-type: web-api-interface
browser-compat: api.StorageManager
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

The **`StorageManager`** interface of the [Storage API](/en-US/docs/Web/API/Storage_API) provides an interface for managing persistence permissions and estimating available storage. You can get a reference to this interface using either {{domxref("navigator.storage")}} or {{domxref("WorkerNavigator.storage")}}.

## Instance methods

- {{domxref("StorageManager.estimate()")}}
  - : Returns a {{jsxref('Promise')}} that resolves to an object containing usage and quota numbers for your origin.
- {{domxref("StorageManager.getDirectory()")}}
  - : Used to obtain a reference to a {{domxref("FileSystemDirectoryHandle")}} object allowing access to a directory and its contents, stored in the [origin private file system](/en-US/docs/Web/API/File_System_API/Origin_private_file_system). Returns a {{jsxref('Promise')}} that fulfills with a {{domxref("FileSystemDirectoryHandle")}} object.
- {{domxref("StorageManager.persist()")}}
  - : Returns a {{jsxref('Promise')}} that resolves to `true` if the user agent is able to persist your site's storage.
- {{domxref("StorageManager.persisted()")}}
  - : Returns a {{jsxref('Promise')}} that resolves to `true` if persistence has already been granted for your site's storage.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
