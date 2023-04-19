---
title: "StorageManager: persist() method"
short-title: persist()
slug: Web/API/StorageManager/persist
page-type: web-api-instance-method
browser-compat: api.StorageManager.persist
---

{{securecontext_header}}{{APIRef("Storage")}}

The **`persist()`** method of the {{domxref("StorageManager")}} interface requests permission to use persistent storage, and returns a {{jsxref('Promise')}} that resolves to `true` if permission is granted and bucket mode is persistent, and `false` otherwise.

## Syntax

```js-nolint
persist()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves to a {{jsxref('Boolean')}}.

## Example

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
