---
title: "Document: hasUnpartitionedCookieAccess() method"
short-title: hasUnpartitionedCookieAccess()
slug: Web/API/Document/hasUnpartitionedCookieAccess
page-type: web-api-instance-method
browser-compat: api.Document.hasUnpartitionedCookieAccess
---

{{APIRef("Storage Access API")}}

The **`hasUnpartitionedCookieAccess()`** method of the {{domxref("Document")}} interface returns a {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to [third-party](/en-US/docs/Web/Privacy/Third-party_cookies), [unpartitioned](/en-US/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) cookies.

This method is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

This method is a new name for {{DOMxRef("Document.hasStorageAccess()")}}.

## Syntax

```js-nolint
hasUnpartitionedCookieAccess()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the document has access to third-party cookies — `true` if it does, and `false` if not.

See {{DOMxRef("Document.hasStorageAccess()")}} for more details.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active.

## Examples

```js
document.hasUnpartitionedCookieAccess().then((hasAccess) => {
  if (hasAccess) {
    // storage access has been granted already.
    console.log("cookie access granted");
  } else {
    // storage access hasn't been granted already;
    // you may want to call requestStorageAccess().
    console.log("cookie access denied");
  }
});
```

> **Note:** See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.requestStorageAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
