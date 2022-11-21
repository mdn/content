---
title: 'Permissions-Policy: payment'
slug: Web/HTTP/Headers/Permissions-Policy/payment
tags:
  - Directive
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - Payment Request API
  - Payments API
  - Reference
  - Experimental
browser-compat: http.headers.Permissions-Policy.payment
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header field's `payment` directive controls whether the current document is allowed to use the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API). When this policy is disabled, the {{DOMxRef("PaymentRequest()")}} constructor will throw a `SyntaxError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: payment <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

The `payment` feature's default allowlist value is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header field
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
