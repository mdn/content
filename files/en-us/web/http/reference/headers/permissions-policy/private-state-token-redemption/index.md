---
title: "Permissions-Policy: private-state-token-redemption directive"
short-title: private-state-token-redemption
slug: Web/HTTP/Reference/Headers/Permissions-Policy/private-state-token-redemption
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.private-state-token-redemption
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `private-state-token-redemption` directive controls usage of [private state token](/en-US/docs/Web/API/Private_State_Token_API) `token-redemption` and `send-redemption-record` operations.

Specifically, where a defined policy blocks the use of this feature, [token redemption](/en-US/docs/Web/API/Private_State_Token_API/Using#redeeming_a_token_via_your_server) and [send redemption record](/en-US/docs/Web/API/Private_State_Token_API/Using#redemption_record_usage_2) operations will fail.

## Syntax

```http
Permissions-Policy: private-state-token-redemption=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `private-state-token-redemption` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- [Private State Token API](/en-US/docs/Web/API/Private_State_Token_API)
