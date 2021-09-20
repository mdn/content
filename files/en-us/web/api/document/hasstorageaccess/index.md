---
title: Document.hasStorageAccess()
slug: Web/API/Document/hasStorageAccess
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
{{APIRef}}{{SeeCompatTable}}

The **`hasStorageAccess()`** method of the
{{domxref("Document")}} interface returns a {{jsxref("Promise")}} that resolves with a
boolean value indicating whether the document has access to its first-party storage.

See [Storage Access API](/en-US/docs/Web/API/Storage_Access_API) for more
information.

## Syntax

```js
var promise = document.hasStorageAccess();
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the
document has access to its first-party storage.

If the promise gets resolved and a user gesture event was being processed when the
function was originally called, the resolve handler will run as if a user gesture was
being processed, so it will be able to call APIs that require user activation.

## Examples

```js
document.hasStorageAccess().then(hasAccess => {
  if (hasAccess) {
    // storage access has been granted already.
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
  }
});
```

## Specifications

The API is currently only at the proposal stage — the standardization process has yet
to begin. You can currently find specification details of the API at Apple's [Introducing
Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) blog post, and [WHATWG HTML issue 3338 — Proposal:
Storage Access API](https://github.com/whatwg/html/issues/3338).

## Browser compatibility

{{Compat}}

## See also

[Storage Access API](/en-US/docs/Web/API/Storage_Access_API)
