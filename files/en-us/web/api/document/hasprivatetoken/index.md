---
title: "Document: hasPrivateToken() method"
short-title: hasPrivateToken()
slug: Web/API/Document/hasPrivateToken
page-type: web-api-instance-method
browser-compat: api.Document.hasPrivateToken
---

{{APIRef("Storage Access API")}}

The **`hasPrivateToken()`** method of the {{domxref("Document")}} interface returns a promise that fulfills with a boolean indicating whether the browser has a [private state token](/en-US/docs/Web/API/Private_State_Token_API) stored from a particular issuer server.

## Syntax

```js-nolint
hasPrivateToken(issuer)
```

### Parameters

- `issuer`
  - : A string representing the URL of an issuer server.

### Return value

A {{jsxref("Promise")}} that resolves with a boolean value indicating whether the browser has a private state token stored from the specified issuer server.

### Exceptions

- `InvalidStateError` {{domxref("DOMException")}}
  - : Thrown if the current {{domxref("Document")}} is not yet active.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Thrown if:
    - The current {{domxref("Document")}} is not loaded in a secure context.
    - The maximum number of issuers per top level origin (two) has been exceeded.
- `TypeError` {{domxref("DOMException")}}
  - : Thrown if `issuer` is not a valid URL.

## Examples

```js
const hasToken = await Document.hasPrivateToken(`issuer.example`);
if (hasToken) {
  await fetch("/.well-known/private-state-token/issuance", {
    method: "POST",
    privateToken: {
      version: 1,
      operation: "token-request",
    },
  });
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)
