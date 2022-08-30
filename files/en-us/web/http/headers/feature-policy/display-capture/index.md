---
title: 'Feature-Policy: display-capture'
slug: Web/HTTP/Headers/Feature-Policy/display-capture
tags:
  - Directive
  - Feature Policy
  - HTTP
  - Reference
  - display-capture
browser-compat: http.headers.Feature-Policy.display-capture
---
{{HTTPSidebar}}

The HTTP {{HTTPHeader("Feature-Policy")}} header `display-capture` directive controls whether or not the document is permitted to use [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API), that is, {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} to capture the screen's contents.

If `display-capture` is disabled in a document, the document will not be able to initiate screen capture via {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}}.

## Syntax

```http
Feature-Policy: display-capture <allowlist>;
```

- \<allowlist>
  - : A list of origins for which the feature is allowed. See [`Feature-Policy`](/en-US/docs/Web/HTTP/Headers/Feature-Policy#syntax).

## Default policy

Default allow list for `display-capture` is `'self'`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Feature-Policy")}} header
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Using Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API)
- [Using the Screen Capture API](/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture)
