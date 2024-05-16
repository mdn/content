---
title: "StorageManager: persisted() method"
short-title: persisted()
slug: Web/API/StorageManager/persisted
page-type: web-api-instance-method
browser-compat: api.StorageManager.persisted
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

The **`persisted()`** method of the {{domxref("StorageManager")}} interface returns a {{jsxref('Promise')}} that resolves to `true` if your site's storage bucket is persistent.

## Syntax

```js-nolint
persisted()
```

### Parameters

None.

### Returns

A {{jsxref('Promise')}} that resolves to a {{jsxref('Boolean')}}.

### Exceptions

- `TypeError`
  - : Thrown if obtaining a local storage shelf failed. For example, if the current origin is an opaque origin or if the user has disabled storage.

## Example

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
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
