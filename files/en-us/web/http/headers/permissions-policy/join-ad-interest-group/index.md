---
title: "Permissions-Policy: join-ad-interest-group"
slug: Web/HTTP/Headers/Permissions-Policy/join-ad-interest-group
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.join-ad-interest-group
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `join-ad-interest-group` directive controls whether the current document is allowed to invoke the {{domxref("Navigator.joinAdInterestGroup()")}} method.

For more information on joining ad interest groups, see [Protected Audience API: Joining an ad interest group](/en-US/docs/Web/API/Protected_Audience_API/Join_ad_interest_group).

## Syntax

```http
Permissions-Policy: join-ad-interest-group=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `join-ad-interest-group` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API)
