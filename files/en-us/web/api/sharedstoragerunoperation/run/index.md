---
title: "SharedStorageRunOperation: run() method"
short-title: run()
slug: Web/API/SharedStorageRunOperation/run
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.SharedStorageRunOperation.run
---

{{APIRef("Shared Storage API")}}{{SeeCompatTable}}

The **`run()`** method of the
{{domxref("SharedStorageRunOperation")}} interface defines the structure to which the `run()` method defined inside a Run output gate operation should conform.

## Syntax

```js-nolint
run(data)
```

### Parameters

- `data`
  - : An object representing any data required for executing the operation.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined`.

## Examples

See the main {{domxref("SharedStorageRunOperation")}} page for an example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Shared Storage API](/en-US/docs/Web/API/Shared_Storage_API)
