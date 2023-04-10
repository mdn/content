---
title: "Document: requestStorageAccess() method"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
page-type: web-api-instance-method
browser-compat: api.Document.requestStorageAccess
---

{{APIRef("Storage Access API")}}

The **`requestStorageAccess()`** method of the {{domxref("Document")}} interface returns a {{jsxref("Promise")}} that resolves if the access to first-party storage was granted, and rejects if access was denied.

This is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

## Syntax

```js-nolint
requestStorageAccess()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined` if the access to first-party storage was granted, and rejects if access was denied.

When the promise gets resolved, the resolve handler will run as if a user gesture is being processed, whether the promise was fulfilled or rejected:

- In the former case, code can then start to call APIs that require user activation and things can move forward.
- In the latter case, code can run to inform the user of why the request failed and what they can do to continue (for example asking them to log in, if that is a requirement).

## Examples

```js
document.requestStorageAccess().then(
  () => {
    console.log("access granted");
  },
  () => {
    console.log("access denied");
  }
);
```

## Security

Access to cross-site cookies is granted to iframes based on a number of prerequisites:

1. The browser must be processing a user gesture ({{Glossary("transient activation")}}).
2. The document or the top-level document must not have a null origin.
3. The document's window must be a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
4. If the document is sandboxed, it must have the `allow-storage-access-by-user-activation` token.
5. The document must pass additional browser-specific checks. Examples: allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Glossary/Clickjacking) heuristics, or prompting the user for explicit permission.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
