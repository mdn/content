---
title: "Permissions-Policy: run-ad-auction"
slug: Web/HTTP/Headers/Permissions-Policy/run-ad-auction
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.run-ad-auction
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `run-ad-auction` directive controls whether the current document is allowed to invoke the {{domxref("Navigator.runAdAuction()")}} method.

For more information on ad auctions, see [Protected Audience API: Running an ad auction](/en-US/docs/Web/API/Protected_Audience_API/Run_ad_auction).

## Syntax

```http
Permissions-Policy: run-ad-auction=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `run-ad-auction` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Protected Audience API](/en-US/docs/Web/API/Protected_Audience_API)
