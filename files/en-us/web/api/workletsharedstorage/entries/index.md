---
title: "WorkletSharedStorage: entries() method"
short-title: entries()
slug: Web/API/WorkletSharedStorage/entries
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.WorkletSharedStorage.entries
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`entries()`** method of the
{{domxref("WorkletSharedStorage")}} interface returns an [async iterator](/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator). The iterator provides an array of `[key, value]` pairs corresponding to the enumerable properties of a `WorkletSharedStorage` instance. The order of these pairs is similar to that in a [`for...in`](/en-US/docs/Web/JavaScript/Reference/Statements/for...in) loop, though a `for...in` loop also enumerates properties from the prototype chain.

## Syntax

```js-nolint
entries()
```

### Parameters

None.

### Return value

An array of the `WorkletSharedStorage`'s enumerable property key-value pairs.

### Exceptions

- {{jsxref("TypeError")}}
  - : Thrown if the calling site does not have the Shared Storage API included in a successful [privacy sandbox enrollment process](/en-US/docs/Web/Privacy/Privacy_sandbox/Enrollment).

## Examples

```js
// entries() available inside a shared storage worklet module
const storage = await this.sharedStorage;

async function logEntries() {
  for await (const [key, value] of storage.entries()) {
    console.log({ key, value });
  }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
