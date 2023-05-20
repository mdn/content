---
title: "Permissions-Policy: autoplay"
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.autoplay
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`autoplay` directive controls whether the current document is allowed to
autoplay media requested through the {{domxref("HTMLMediaElement")}} interface.

Specifically, where a defined policy blocks use of this feature and there were no user gestures, the {{jsxref("Promise")}}
returned by {{domxref("HTMLMediaElement.play()")}} will reject with
a {{domxref("DOMException")}}. The [`autoplay`](/en-US/docs/Web/HTML/Element/audio#autoplay) attribute on
{{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.

> **Note:** For more details on autoplay and autoplay blocking, see the article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Permissions-Policy: autoplay=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `autoplay` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
