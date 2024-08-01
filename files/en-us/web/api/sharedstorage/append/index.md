---
title: "SharedStorage: append() method"
short-title: append()
slug: Web/API/SharedStorage/append
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SharedStorage.append
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`append()`** method of the {{domxref("SharedStorage")}} interface appends a string to the value of an existing key-value pair in the current origin's shared storage.

## Syntax

```js-nolint
append(key, value)
```

### Parameters

- `key`
  - : A string representing the key of the key-value pair to which you want to append a value.
- `value`
  - : A string that you want to append to the existing value of the key-value pair.

> [!NOTE]
> If the specified `key` isn't found in the shared storage, the `append()` operation is equivalent to {{domxref("SharedStorage.set", "set()")}}, that is, a new key-value pair with the specified `key` is added to the shared storage.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

- The `Promise` rejects with a {{jsxref("TypeError")}} if:
  - The appended entry was not successfully stored in the database due to shared storage not being available (for example it is disabled using a browser setting).
  - `key` and/or `value` exceed the browser-defined maximum length.
  - The calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).
- In the case of {{domxref("WorkletSharedStorage")}}, the `Promise` rejects with a {{jsxref("TypeError")}} if the worklet module has not been added with {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}}.

> [!NOTE]
> In the case of {{domxref("WindowSharedStorage")}}, if the `append()` operation doesn't successfully write to the database for a reason other than shared storage not being available, no error is thrown — the operation still fulfills with `undefined`.

## Examples

```js
window.sharedStorage
  .append("integer-list", ",9")
  .then(console.log("Value appended to integer list"));
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
