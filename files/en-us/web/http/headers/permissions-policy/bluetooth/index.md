---
title: "Permissions-Policy: bluetooth"
slug: Web/HTTP/Headers/Permissions-Policy/bluetooth
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.bluetooth
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `bluetooth` directive controls whether the methods exposed by the [bluetooth attribute on the Navigator object](/en-US/docs/Web/API/Navigator/bluetooth) may be used.

Specifically, where a defined policy blocks use of this feature, [`Navigator.bluetooth`](/en-US/docs/Web/API/Navigator/bluetooth) method calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `bluetooth` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
