---
title: "Document: hasStorageAccess() method"
short-title: hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
page-type: web-api-instance-method
browser-compat: api.Document.hasStorageAccess
---

{{APIRef("Storage Access API")}}

The **`hasStorageAccess()`** method of the {{domxref("Document")}} interface returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to unpartitioned cookies.

This method is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

## Syntax

```js-nolint
hasStorageAccess()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to unpartitioned cookies — `true` if it does, and `false` if not.

The result returned by this method can be inaccurate in a couple of circumstances:

1. The user may have browser settings active that block unpartitioned cookies entirely — in this case `true` may be returned even though unpartitioned cookies are still inaccessible. To handle such a situation, you should gracefully handle any errors resulting in cookie values being unretrievable; for example, inform the user that access to their personalized settings is blocked and invite them to sign in again to use them.
2. The browser might not block third-party cookie access by default — in this case `false` may be returned even though unpartitioned cookies are accessible, and storage access wouldn't need to be requested (i.e. via {{domxref("Document.requestStorageAccess()")}}). To get around this issue, you could query {{domxref("Document.cookie")}} to find out whether your cookies are accessible, and call {{domxref("Document.requestStorageAccess()")}} if they are not.

> **Note:** If the promise gets resolved and a user gesture event was being processed when the function was originally called, the resolve handler will run as if a user gesture was being processed, so it will be able to call APIs that require user activation.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active.

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

> **Note:** See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
