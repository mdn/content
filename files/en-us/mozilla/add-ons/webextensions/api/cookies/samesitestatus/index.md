---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
tags:
  - API
  - Add-ons
  - Cookies
  - Extensions
  - Interface
  - Non-standard
  - Reference
  - Type
  - WebExtensions
---
{{AddonSidebar()}}

The `SameSiteStatus` type of the {{WebExtAPIRef("cookies")}} API represents information about the `SameSite` state of a cookie.

## Type

Values of this type are strings. Possible values are:

- `no_restriction`
  - : Represents a cookie set without a `SameSite` attribute.
- `lax`
  - : Corresponds to `SameSite=Lax`
- `strict`
  - : Corresponds to a cookie set with `SameSite=Strict`

See [SameSite cookies](/en-US/docs/Web/HTTP/Cookies#samesite_cookies) for more information.
