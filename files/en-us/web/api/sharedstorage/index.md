---
title: SharedStorage
slug: Web/API/SharedStorage
page-type: web-api-interface
status:
  - experimental
browser-compat: api.SharedStorage
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`SharedStorage`** interface of the {{domxref("Shared Storage API", "Shared Storage API", "", "nocode")}} represents the shared storage for a particular origin, defining methods to write data to the shared storage.

`SharedStorage` is the base class for:

- {{domxref("WindowSharedStorage")}}, accessed via {{domxref("Window.sharedStorage")}}.
- {{domxref("WorkletSharedStorage")}}, accessed via {{domxref("SharedStorageWorkletGlobalScope.sharedStorage")}}.

{{InheritanceDiagram}}

## Instance methods

- {{domxref("SharedStorage.append", "append()")}} {{Experimental_Inline}}
  - : Appends a string to the value of an existing key-value pair in the current origin's shared storage.
- {{domxref("SharedStorage.clear", "clear()")}} {{Experimental_Inline}}
  - : Clears the current origin's shared storage, removing all data from it.
- {{domxref("SharedStorage.delete", "delete()")}} {{Experimental_Inline}}
  - : Deletes an existing key-value pair from the current origin's shared storage.
- {{domxref("SharedStorage.set", "set()")}} {{Experimental_Inline}}
  - : Stores a new key-value pair in the current origin's shared storage or updates an existing one.

## Examples

```js
window.sharedStorage
  .set("ab-testing-group", "0")
  .then(console.log("Value saved to shared storage"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WindowSharedStorage")}}
- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
