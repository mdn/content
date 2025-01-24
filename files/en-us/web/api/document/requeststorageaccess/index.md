---
title: "Document: requestStorageAccess() method"
short-title: requestStorageAccess()
slug: Web/API/Document/requestStorageAccess
page-type: web-api-instance-method
browser-compat: api.Document.requestStorageAccess
---

{{APIRef("Storage Access API")}}

The **`requestStorageAccess()`** method of the {{domxref("Document")}} interface allows content loaded in a third-party context (i.e., embedded in an {{htmlelement("iframe")}}) to request access to [third-party cookies](/en-US/docs/Web/Privacy/Third-party_cookies) and [unpartitioned state](/en-US/docs/Web/Privacy/State_Partitioning#state_partitioning). This is relevant to user agents that, by default, block access to third-party, [unpartitioned](/en-US/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) cookies to improve privacy (e.g., to prevent tracking), and is part of the [Storage Access API](/en-US/docs/Web/API/Storage_Access_API).

To check whether permission to access third-party cookies has already been granted, you can call {{domxref("Permissions.query()")}}, specifying the feature name `"storage-access"`.

> [!NOTE]
> Usage of this feature may be blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy) set on your server. In addition, the document must pass additional browser-specific checks such as allowlists, blocklists, on-device classification, user settings, anti-[clickjacking](/en-US/docs/Web/Security/Attacks/Clickjacking) heuristics, or prompting the user for explicit permission.

## Syntax

```js-nolint
requestStorageAccess()
requestStorageAccess(types)
```

### Parameters

- `types` {{optional_inline}}

  - : An object containing properties that control what unpartitioned state is made accessible. If not specified, the default value of the property is `false`. Available properties are as follows:

    - `all`
      - : A boolean specifying all possible unpartitioned states should be made accessible.
    - `cookies`
      - : A boolean specifying third-party cookies should be made accessible.
    - `sessionStorage`
      - : A boolean specifying {{domxref("StorageAccessHandle.sessionStorage")}} should be made accessible.
    - `localStorage`
      - : A boolean specifying {{domxref("StorageAccessHandle.localStorage")}} should be made accessible.
    - `indexedDB`
      - : A boolean specifying {{domxref("StorageAccessHandle.indexedDB")}} should be made accessible.
    - `locks`
      - : A boolean specifying {{domxref("StorageAccessHandle.locks")}} should be made accessible.
    - `caches`
      - : A boolean specifying {{domxref("StorageAccessHandle.caches")}} should be made accessible.
    - `getDirectory`
      - : A boolean specifying {{domxref("StorageAccessHandle.getDirectory()")}} should be made accessible.
    - `estimate`
      - : A boolean specifying {{domxref("StorageAccessHandle.estimate()")}} should be made accessible.
    - `createObjectURL`
      - : A boolean specifying {{domxref("StorageAccessHandle.createObjectURL()")}} should be made accessible.
    - `revokeObjectURL`
      - : A boolean specifying {{domxref("StorageAccessHandle.revokeObjectURL()")}} should be made accessible.
    - `BroadcastChannel`
      - : A boolean specifying {{domxref("StorageAccessHandle.BroadcastChannel()")}} should be made accessible.
    - `SharedWorker`
      - : A boolean specifying {{domxref("StorageAccessHandle.SharedWorker()")}} should be made accessible.

### Return value

A {{jsxref("Promise")}} that fulfills with `undefined` if the access to third-party cookies was granted and no `types` parameter was provided, fulfills with {{domxref("StorageAccessHandle")}} if the access to unpartitioned state requested by the `types` parameter was provided, and rejects if access was denied.

`requestStorageAccess()` requests are automatically denied unless the embedded content is currently processing a user gesture such as a tap or click ({{Glossary("transient activation")}}), or unless permission was already granted previously. If permission was not previously granted, they need to be run inside a user gesture-based event handler. The user gesture behavior depends on the state of the promise:

- If the promise resolves (i.e. if permission was granted), then the user gesture has not been consumed, so the script can subsequently call APIs that require a user gesture.
- If the promise rejects (i.e. permission was not granted), then the user gesture has been consumed, so the script can't do anything that requires a gesture. This is intentional protection against abuse — it prevents scripts from calling `requestStorageAccess()` in a loop until the user accepts the prompt.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if:
    - The current {{domxref("Document")}} is not yet active.
    - The `types` parameter is provided and all of its properties are `false`.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The document's window is not a [secure context](/en-US/docs/Web/Security/Secure_Contexts).
    - Usage is blocked by a {{httpheader("Permissions-Policy/storage-access", "storage-access")}} [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy).
    - The document or the top-level document has a `null` origin.
    - The embedding {{htmlelement("iframe")}} is sandboxed, and the `allow-storage-access-by-user-activation` token is not set.
    - Usage is denied by the user agent's permission request to use the API.

## Examples

```js
document.requestStorageAccess().then(
  () => {
    console.log("cookie access granted");
  },
  () => {
    console.log("cookie access denied");
  },
);

document.requestStorageAccess({ localStorage: true }).then(
  (handle) => {
    console.log("localStorage access granted");
    handle.localStorage.setItem("foo", "bar");
  },
  () => {
    console.log("localStorage access denied");
  },
);
```

> [!NOTE]
> See [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using) for a more complete example.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("Document.hasStorageAccess()")}}, {{domxref("Document.hasUnpartitionedCookieAccess()")}}, {{domxref("Document.requestStorageAccessFor()")}}
- [Using the Storage Access API](/en-US/docs/Web/API/Storage_Access_API/Using)
- [Introducing Storage Access API](https://webkit.org/blog/8124/introducing-storage-access-api/) (WebKit blog)
