---
title: "StorageBucketManager: open() method"
short-title: open()
slug: Web/API/StorageBucketManager/open
page-type: web-api-instance-method
status:
  - experimental
browser-compat: api.StorageBucketManager.open
---

{{APIRef("Storage Buckets API")}}{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}

The **`open()`** method of the {{DOMxRef("StorageBucketManager")}} interface is used to ...

## Syntax

```js-nolint
open(name)
open(name, options)
```

### Parameters

- `name`
  - : ......
- `options` {{Optional_Inline}}
  - : ......

### Return value

A {{jsxref("Promise")}} that fulfills with a {{domxref("StorageBucket")}} object representing ......

### Exceptions

- `InvalidCharacterError` {{domxref("DOMException")}}
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
