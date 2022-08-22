---
title: StorageManager.persisted()
slug: Web/API/StorageManager/persisted
page-type: web-api-instance-method
tags:
  - Method
  - Reference
  - Secure context
  - Storage API
  - persisted()
browser-compat: api.StorageManager.persisted
---
{{securecontext_header}}{{APIRef("Storage")}}

The **`persisted()`** method of the {{domxref("StorageManager")}} interface returns a {{jsxref('Promise')}} that resolves to `true` if box mode is persistent for your site's storage.

## Syntax

```js
navigator.storage.persisted()
```

### Parameters

None.

### Returns

A {{jsxref('Promise')}} that resolves to a {{jsxref('Boolean')}}.

## Example

```js
if (navigator.storage && navigator.storage.persist)
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
