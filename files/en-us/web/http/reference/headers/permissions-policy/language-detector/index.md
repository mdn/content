---
title: "Permissions-Policy: language-detector directive"
short-title: language-detector
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-detector
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.language-detector
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `language-detector` directive controls access to the language detection functionality of the [Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs).

Specifically, where a defined policy blocks usage, any attempts to call the API's language detection methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: language-detector=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `language-detector` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
