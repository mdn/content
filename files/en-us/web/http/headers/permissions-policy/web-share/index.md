---
title: "Permissions-Policy: web-share"
slug: Web/HTTP/Headers/Permissions-Policy/web-share
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.web-share
---

{{HTTPSidebar}}{{SeeCompatTable}}

The HTTP {{HTTPHeader('Permissions-Policy')}} header `web-share` directive controls whether the current document is allowed to use the {{domxref("Navigator.share","Navigator.share()")}} method of the Web Share API to share text, links, images, and other content to arbitrary destinations of the user's choice.

Specifically, where a defined policy blocks usage of this feature, {{domxref("Navigator.share()")}} calls will return a {{jsxref("Promise")}} that rejects with a {{domxref("DOMException")}} of type `NotAllowedError`.

## Syntax

```http
Permissions-Policy: web-share=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `web-share` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

<!--
Browser implementation is being discussed in <https://github.com/w3c/web-share/issues/169>.
-->

## See also

- {{HTTPHeader('Permissions-Policy')}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
