---
title: "Permissions-Policy: translator directive"
short-title: translator
slug: Web/HTTP/Reference/Headers/Permissions-Policy/translator
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.translator
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `translator` directive controls access to the translation functionality of the [Translator and Language Detector APIs](/en-US/docs/Web/API/Translator_and_Language_Detector_APIs).

Specifically, where a defined policy blocks usage, any attempts to call the API's translation methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: translator=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `translator` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
