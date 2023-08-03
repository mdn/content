---
title: "SharedStorage: clear() method"
short-title: clear()
slug: Web/API/SharedStorage/clear
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SharedStorage.clear
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`clear()`** method of the
{{domxref("SharedStorage")}} interface clears the current origin's shared storage, removing all data from it.

## Syntax

```js-nolint
clear()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

- In the case of {{domxref("WindowSharedStorage")}}, if the `clear()` operation doesn't successfully clear the database for a reason other than shared storage not being available, then it fails silently without rejecting.
- In the case of {{domxref("WorkletSharedStorage")}}, the `Promise` rejects with a {{jsxref("TypeError")}} if the worklet module has not been added with {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}}.
- In both cases, the `Promise` rejects with a {{jsxref("TypeError")}} if the database was not cleared successfully due to shared storage not being available (for example it is disabled using a browser setting).

## Examples

```js
window.sharedStorage.clear().then(console.log("Shared storage cleared"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
