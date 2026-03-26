---
title: "Permissions-Policy: loopback-network directive"
short-title: loopback-network
slug: Web/HTTP/Reference/Headers/Permissions-Policy/loopback-network
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.loopback-network
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `loopback-network` directive controls whether the current document is allowed to make network requests to loopback addresses.

A loopback address is only accessible on the local host; its target will differ on every device. For example, `127.0.0.1`, which is generally known as `localhost`.

Specifically, where a defined policy blocks use of this feature, requests to loopback addresses will always fail.

See [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access) for more details.

## Syntax

```http
Permissions-Policy: loopback-network=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `loopback-network` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
