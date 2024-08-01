---
title: "SharedStorage: delete() method"
short-title: delete()
slug: Web/API/SharedStorage/delete
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SharedStorage.delete
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`delete()`** method of the {{domxref("SharedStorage")}} interface deletes an existing key-value pair from the current origin's shared storage.

## Syntax

```js-nolint
delete(key)
```

### Parameters

- `key`
  - : A string representing the key of the key-value pair you want to delete.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

- The `Promise` rejects with a {{jsxref("TypeError")}} if:
  - The database was not cleared successfully due to shared storage not being available (for example it is disabled using a browser setting).
  - `key` exceeds the browser-defined maximum length.
  - The calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).
- In the case of {{domxref("WorkletSharedStorage")}}, the `Promise` rejects with a {{jsxref("TypeError")}} if:
  - The worklet module has not been added with {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}}.

> [!NOTE]
> If the key-value pair doesn't exist in the shared storage, no error is thrown — the operation still fulfills with `undefined`.

> [!NOTE]
> In the case of {{domxref("WindowSharedStorage")}}, if the `delete()` operation doesn't successfully write to the database for a reason other than shared storage not being available, no error is thrown — the operation still fulfills with `undefined`.

## Examples

```js
window.sharedStorage
  .delete("ab-testing-group")
  .then(console.log("Value deleted"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
