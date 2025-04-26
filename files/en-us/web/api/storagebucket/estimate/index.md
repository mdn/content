---
title: "StorageBucket: estimate() method"
short-title: estimate()
slug: Web/API/StorageBucket/estimate
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.StorageBucket.estimate
---

{{APIRef("Storage Buckets API")}}{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`estimate()`** method of the {{DOMxRef("StorageBucket")}} interface is used to ...

## Syntax

```js-nolint
estimate()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with an onject with the following properties, which representing ......

- `usage`
  - : ......
- `quota`
  - : ......

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if ......
- {{jsxref("TypeError")}}
  - : Thrown if ......

## Examples

......

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Not all storage is created equal: introducing Storage Buckets](https://developer.chrome.com/docs/web-platform/storage-buckets)
