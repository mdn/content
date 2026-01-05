---
title: "Permissions-Policy: aria-notify directive"
short-title: aria-notify
slug: Web/HTTP/Reference/Headers/Permissions-Policy/aria-notify
page-type: http-permissions-policy-directive
status:
  - experimental
  - non-standard
browser-compat: http.headers.Permissions-Policy.aria-notify
sidebar: http
---

{{SeeCompatTable}}{{non-standard_header}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `aria-notify` directive controls whether the current document is allowed to use the {{domxref("Document.ariaNotify()")}} and {{domxref("Element.ariaNotify()")}} methods to fire {{glossary("screen reader")}} announcements.

Specifically, where a defined policy blocks usage, any announcements created using `ariaNotify()` silently fail (they will not be sent).

## Syntax

```http
Permissions-Policy: aria-notify=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `aria-notify` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
- {{domxref("Document.ariaNotify()")}}, {{domxref("Element.ariaNotify()")}}
