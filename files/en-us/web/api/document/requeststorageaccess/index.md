---
title: "Document: requestStorageAccess() method"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
page-type: web-api-instance-method
browser-compat: api.Document.requestStorageAccess
---

{{APIRef("DOM")}}

The **`requestStorageAccess()`** method of the {{domxref("Document")}} interface allows a document loaded in a third-party context (i.e. embedded in an {{htmlelement("iframe")}}) to request access to unpartitioned cookies.

This is relevant to user agents that by default block access to unpartitioned cookies by sites loaded in a third-party context to improve privacy (e.g. to prevent tracking), and is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

> **Note:** Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server. In addition, the document must pass additional browser-specific checks such as allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Glossary/Clickjacking) heuristics, or prompting the user for explicit permission.

> **Note:** The [browser compatibility section](#browser_compatibility) provides an overview about the support status of the Storage Access API.

## Syntax

```js-nolint
requestStorageAccess()
```

### Parameters

None.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined` if the access to unpartitioned cookies was granted, and rejects if access was denied.

`requestStorageAccess()` requests are automatically denied unless the embedded content is currently processing a user gesture such as a tap or click ({{Glossary("transient activation")}}), or unless permission was already granted previously. If permission was not previously granted, they need to be run inside a user gesture-based event handler. The user gesture behavior depends on the state of the promise:

- If the promise resolves (i.e. if permission was granted), then the user gesture has not been consumed, so the script can subsequently call APIs that require a user gesture.
- If the promise rejects (i.e. permission was not granted), then the user gesture has been consumed, so the script can't do anything that requires a gesture. This is intentional protection against abuse — it prevents scripts from calling `requestStorageAccess()` in a loop until the user accepts the prompt.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The document's window is not a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
    - Usage is blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
    - The document or the top-level document has a `null` origin.
    - The embedding {{htmlelement("iframe")}} is sandboxed, and the `allow-storage-access-by-user-activation` token is not set.

## Examples

```js
document.requestStorageAccess().then(
  () => {
    console.log("access granted");
  },
  () => {
    console.log("access denied");
  },
);
```

> **Note:** See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
