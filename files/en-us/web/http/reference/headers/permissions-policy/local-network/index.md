---
title: "Permissions-Policy: local-network directive"
short-title: local-network
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-network
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.local-network
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `local-network` directive controls whether the current document is allowed to make network requests to local addresses.

A local address is only accessible on the local network; its target will differ on different networks. For example, `192.168.0.1`.

Specifically, where a defined policy blocks use of this feature, requests to local addresses will always fail.

See [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access) for more details.

## Syntax

```http
Permissions-Policy: local-network=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `local-network` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
