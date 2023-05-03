---
title: "Document: requestStorageAccess() method"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
page-type: web-api-instance-method
browser-compat: api.Document.requestStorageAccess
---

{{APIRef("DOM")}}

The **`requestStorageAccess()`** method of the {{domxref("Document")}} interface allows a document loaded in a third-party context (i.e. embedded in an {{htmlelement("iframe")}}) to request access to its client-side storage.

This is relevant to user agents that by default block access to client-side storage by sites loaded in a third-party context to improve privacy (e.g. to prevent tracking), and is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

> **Note:** Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server. In addition, the document must pass additional browser-specific checks such as allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Glossary/Clickjacking) heuristics, or prompting the user for explicit permission.

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
  }
);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
