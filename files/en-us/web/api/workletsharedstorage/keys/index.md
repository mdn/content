---
title: "WorkletSharedStorage: keys() method"
short-title: keys()
slug: Web/API/WorkletSharedStorage/keys
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WorkletSharedStorage.keys
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`keys()`** method of the
{{domxref("WorkletSharedStorage")}} interface returns an [async iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator), which contains the keys for each item in a `WorkletSharedStorage` instance.

## Syntax

```js-nolint
keys()
```

### Parameters

None.

### Return value

An array of the `WorkletSharedStorage`'s enumerable property keys.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).

## Examples

```js
// keys() available inside a shared storage worklet module
const storage = await this.sharedStorage;

async function logKeys() {
  for await (const key of storage.keys()) {
    console.log(key);
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
