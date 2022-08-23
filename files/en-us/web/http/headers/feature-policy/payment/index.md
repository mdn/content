---
title: 'Feature-Policy: payment'
slug: Web/HTTP/Headers/Feature-Policy/payment
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Payment Request API
  - Payments API
  - Reference
  - Experimental
browser-compat: http.headers.Feature-Policy.payment
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header field's `payment` directive controls whether the current document is allowed to use the [Payment Request API](/en-US/docs/Web/API/Payment_Request_API). When this policy is disabled, the {{DOMxRef("PaymentRequest()")}} constructor will throw a `SyntaxError` {{domxref("DOMException")}}.

## Syntax

```http
Feature-Policy: payment <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The `payment` feature's default allowlist value is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header field
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
