---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
page-type: webextension-api-type
browser-compat: webextensions.api.cookies.SameSiteStatus
---

{{AddonSidebar()}}

The `SameSiteStatus` type of the {{WebExtAPIRef("cookies")}} API represents information about the `SameSite` state of a cookie.

## Type

Values of this type are strings. Possible values are:

- `no_restriction`
  - : Corresponds to a cookie set with `SameSite=None`.
- `lax`
  - : Corresponds to a cookie set with `SameSite=Lax`.
- `strict`
  - : Corresponds to a cookie set with `SameSite=Strict`.
- `unspecified`
  - : Corresponds to a cookie set without the `SameSite` attribute.

See [SameSite cookies](/en-US/docs/Web/HTTP/Cookies#samesite_cookies) for more information.

## Browser compatibility

{{Compat}}
