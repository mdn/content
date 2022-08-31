---
title: 'Feature-Policy: autoplay'
slug: Web/HTTP/Headers/Feature-Policy/autoplay
tags:
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
  - autoplay
  - Experimental
browser-compat: http.headers.Feature-Policy.autoplay
---
{{HTTPSidebar}} {{SeeCompatTable}}

The HTTP {{HTTPHeader("Feature-Policy")}} header
`autoplay` directive controls whether the current document is allowed to
autoplay media requested through the {{domxref("HTMLMediaElement")}} interface.
When this policy is enabled and there were no user gestures, the {{jsxref("Promise")}}
returned by {{domxref("HTMLMediaElement.play()")}} will reject with
a {{domxref("DOMException")}}. The {{htmlattrxref("autoplay", "audio")}} attribute on
{{HTMLElement("audio")}} and {{HTMLElement("video")}} elements will be ignored.

For more details on autoplay and autoplay blocking, see the article [Autoplay guide for media and Web Audio APIs](/en-US/docs/Web/Media/Autoplay_guide).

## Syntax

```http
Feature-Policy: autoplay <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

The default value in [Google Chrome](https://chromestatus.com/feature/5100524789563392) is
`'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
