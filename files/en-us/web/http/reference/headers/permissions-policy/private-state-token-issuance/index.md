---
title: "Permissions-Policy: private-state-token-issuance directive"
short-title: private-state-token-issuance
slug: Web/HTTP/Reference/Headers/Permissions-Policy/private-state-token-issuance
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.private-state-token-issuance
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `private-state-token-issuance` directive controls usage of [private state token](/en-US/docs/Web/API/Private_State_Token_API) `token-request` operations.

Specifically, where a defined policy blocks the use of this feature, [token request](/en-US/docs/Web/API/Private_State_Token_API/Using#issuing_a_token_via_your_server) operations will fail.

## Syntax

```http
Permissions-Policy: private-state-token-issuance=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `private-state-token-issuance` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)
