---
title: "Permissions-Policy: picture-in-picture"
slug: Web/HTTP/Headers/Permissions-Policy/picture-in-picture
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.picture-in-picture
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `picture-in-picture` directive controls whether the current document is allowed to play a video in a {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}} mode.

Specifically, where a defined policy blocks use of this feature, {{domxref("HTMLVideoElement.requestPictureInPicture()")}} calls will throw a {{domxref("DOMException")}} of type `SecurityError`.

## Syntax

```http
Permissions-Policy: picture-in-picture=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `picture-in-picture` is `*`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
