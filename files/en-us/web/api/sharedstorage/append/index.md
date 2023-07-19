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

The **`append()`** method of the
{{domxref("SharedStorage")}} interface appends a string to the value of an existing key/value pair in the current origin's shared storage.

## Syntax

```js-nolint
append(key, value)
```

### Parameters

- `key`
  - : A string representing the key of the key/value pair you want to append a string to.
- `value`
  - : A string that you want to append to the existing value.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

### Exceptions

In the case of {{domxref("WindowSharedStorage")}}:

- If the key/value pair doesn't exist in the shared storage, the operation is aborted silently, without rejecting.

In the case of {{domxref("WorkletSharedStorage")}}, the `Promise` rejects with a {{jsxref("TypeError")}}:

- If the key/value pair doesn't exist in the shared storage.
- If the worklet module has not been added with {{domxref("Worklet.addModule", "SharedStorageWorklet.addModule()")}}.
- If the appended entry was not successfully stored in the database for some other reason.

In both cases:

- The `Promise` rejects with a {{jsxref("TypeError")}} if `key` and/or `value` exceed the browser-defined maximum length.

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

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
