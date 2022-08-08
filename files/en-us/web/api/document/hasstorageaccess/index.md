---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
page-type: web-api-instance-method
tags:
  - API
  - DOM
  - Document
  - Method
  - Reference
  - Storage Access API
  - hasStorageAccess
browser-compat: api.Document.hasStorageAccess
---
{{APIRef("Storage Access API")}}

The **`hasStorageAccess()`** method of the {{domxref("Document")}} interface returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to its first-party storage.

This method is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

## Syntax

```js
hasStorageAccess()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to its first-party storage.

If the promise gets resolved and a user gesture event was being processed when the function was originally called, the resolve handler will run as if a user gesture was being processed, so it will be able to call APIs that require user activation.

## Examples

```js
document.hasStorageAccess().then((hasAccess) => {
  if (hasAccess) {
    // storage access has been granted already.
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
  }
});
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
