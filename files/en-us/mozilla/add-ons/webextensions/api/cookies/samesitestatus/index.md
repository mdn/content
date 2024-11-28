---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
page-type: webextension-api-type
browser-compat: webextensions.api.cookies.SameSiteStatus
---

{{AddonSidebar}}

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
  - : Corresponds to a cookie set without the `SameSite` attribute. This state is not part of any SameSite standard, and is only supported by browsers that store this state internally. Other browsers map the absence of the SameSite flag to the default state (e.g., Lax). See the browser compatibility table for more details.

See [SameSite cookies](/en-US/docs/Web/HTTP/Cookies#samesite_cookies) for more information.

## Browser compatibility

{{Compat}}
