---
title: "Permissions-Policy: payment"
slug: Web/HTTP/Headers/Permissions-Policy/payment
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.payment
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header field's `payment` directive controls whether the current document is allowed to use the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API).

Specifically, where a defined policy blocks use of this feature, {{DOMxRef("PaymentRequest.PaymentRequest", "PaymentRequest()")}} constructor calls will throw a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: payment=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `payment` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header field
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
