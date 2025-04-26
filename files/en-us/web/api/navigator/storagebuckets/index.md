---
title: "Navigator: storageBuckets property"
short-title: storageBuckets
slug: Web/API/Navigator/storageBuckets
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.Navigator.storageBuckets
---

{{APIRef("Storage Buckets API")}}{{SecureContext_Header}}{{SeeCompatTable}}

The **`storageBuckets`** read-only property of the {{DOMxRef("Navigator")}} interface represents the singleton {{domxref('StorageBucketManager')}} object used for managing storage buckets.

## Value

A {{DOMxRef("StorageBucketManager")}} object instance.

## Examples

The following code creates a storage bucket with the name "example-storage-bucket".

```js
const bucket = await navigator.storageBuckets.open('example-storage-bucket');
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Not all storage is created equal: introducing Storage Buckets](https://developer.chrome.com/docs/web-platform/storage-buckets)
