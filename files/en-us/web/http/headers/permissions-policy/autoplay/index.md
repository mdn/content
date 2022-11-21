---
title: 'Permissions-Policy: autoplay'
slug: Web/HTTP/Headers/Permissions-Policy/autoplay
tags:
  - Directive
  - Permissions Policy
  - Permissions-Policy
  - HTTP
  - Reference
  - autoplay
  - Experimental
browser-compat: http.headers.Permissions-Policy.autoplay
---

{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header
`autoplay` directive controls whether the current document is allowed to
autoplay media requested through the {{domxref("HTMLMediaElement")}} interface.
When this policy is enabled and there were no user gestures, the {{jsxref("Promise")}}
returned by {{domxref("HTMLMediaElement.play()")}} will reject with
a {{domxref("DOMException")}}. The {{htmlattrxref("autoplay", "audio")}} attribute on
{{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.

For more details on autoplay and autoplay blocking, see the article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Permissions-Policy: autoplay <allowlist>;
```

- \<allowlist>
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy`](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax).

## Default policy

The default value in [Google Chrome](https://chromestatus.com/feature/5100524789563392) is
`'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
- [Using Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy/Using_Permissions_Policy)
