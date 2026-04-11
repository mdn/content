---
title: "Permissions-Policy: local-network-access directive"
short-title: local-network-access
slug: Web/HTTP/Reference/Headers/Permissions-Policy/local-network-access
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.local-network-access
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `local-network-access` directive controls whether the current document is allowed to make network requests to local and loopback addresses. This policy directive is an alias for the newer {{httpheader('Permissions-Policy/local-network','local-network')}} and {{httpheader('Permissions-Policy/loopback-network','loopback-network')}} directives.

- A local address is only accessible on the local network; its target will differ on different networks. For example, `192.168.0.1`.
- A loopback address is only accessible on the local host; its target will differ on every device. For example, `127.0.0.1`, which is generally known as `localhost`.

Specifically, where a defined policy blocks use of this feature, requests to local and loopback addresses will always fail. If you want more granular control over local and loopback addresses, you should use the newer directives linked above.

See [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access) for more details.

## Syntax

```http
Permissions-Policy: local-network-access=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `local-network-access` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Local Network Access](/en-US/docs/Web/Security/Defenses/Local_network_access)
- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
