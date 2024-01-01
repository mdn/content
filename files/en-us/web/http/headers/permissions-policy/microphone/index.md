---
title: "Permissions-Policy: microphone"
slug: Web/HTTP/Headers/Permissions-Policy/microphone
page-type: http-permissions-policy-directive
browser-compat: http.headers.Permissions-Policy.microphone
---

{{HTTPSidebar}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `microphone` directive controls whether the current document is allowed to use audio input devices.

Specifically, where a defined policy blocks use of this feature, {{domxref("MediaDevices.getUserMedia()")}} calls will return a {{jsxref("Promise")}}
that rejects with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: microphone=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `microphone` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Permissions_Policy)
