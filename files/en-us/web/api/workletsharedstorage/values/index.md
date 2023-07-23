---
title: "WorkletSharedStorage: values() method"
short-title: values()
slug: Web/API/WorkletSharedStorage/values
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WorkletSharedStorage.values
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`values()`** method of the
{{domxref("WorkletSharedStorage")}} interface returns an [async iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator) containing the values for each item in a `WorkletSharedStorage` instance.

## Syntax

```js-nolint
values()
```

### Parameters

None.

### Return value

An array of the `WorkletSharedStorage`'s enumerable property values.

## Examples

```js
// values() available inside a shared storage worklet module
const storage = await this.sharedStorage;

async function logValues() {
  for await (const value of storage.values()) {
    console.log(value);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_storage_API)
