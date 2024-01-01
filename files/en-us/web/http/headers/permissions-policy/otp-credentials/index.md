---
title: "Permissions-Policy: otp-credentials"
slug: Web/HTTP/Headers/Permissions-Policy/otp-credentials
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.otp-credentials
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `otp-credentials` directive controls whether the current document is allowed to use the [WebOTP API](/en-US/docs/Web/API/WebOTP_API) to request a one-time password (OTP) from a specially-formatted SMS message sent by the app's server, i.e., via {{domxref("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

Specifically, where a defined policy blocks the use of this feature, the {{jsxref("Promise")}} returned by `navigator.credentials.get({otp})` will reject with a `SecurityError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: otp-credentials=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `otp-credentials` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [WebOTP API](/en-US/docs/Web/API/WebOTP_API)
- {{DOMxRef("OTPCredential")}} interface
