---
title: "StorageManager: persist() method"
short-title: persist()
slug: Web/API/StorageManager/persist
page-type: web-api-instance-method
browser-compat: api.StorageManager.persist
---

{{securecontext_header}}{{APIRef("Storage")}}

The **`persist()`** method of the {{domxref("StorageManager")}} interface requests permission to use persistent storage, and returns a {{jsxref('Promise')}} that resolves to `true` if permission is granted and bucket mode is persistent, and `false` otherwise. The browser may or may not honor the request, depending on browser-specific heuristics. (For Chrome, these [heuristics are documented](https://web.dev/articles/persistent-storage#chrome_and_other_chromium-based_browsers).)

> **Note:** This method is not available in [Web Workers](/en-US/docs/Web/API/Web_Workers_API), though the {{domxref("StorageManager")}} interface is.

## Syntax

```js-nolint
persist()
```

### Parameters

None.

### Return value

A {{jsxref('Promise')}} that resolves to a {{jsxref('Boolean')}}.

### Exceptions

- `TypeError`
  - : Thrown if obtaining a local storage shelf failed. For example, if the current origin is an opaque origin or if the user has disabled storage.

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
