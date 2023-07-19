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

In the case of {{domxref("WorkletSharedStorage")}}, the `Promise` rejects with a {{jsxref("TypeError")}}:

- If the worklet module has not been added with {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}}.
- If the clearing operation was not successful for some reason.

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
