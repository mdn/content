---
title: "Permissions-Policy: summarizer directive"
short-title: summarizer
slug: Web/HTTP/Reference/Headers/Permissions-Policy/summarizer
page-type: http-permissions-policy-directive
status:
  - experimental
browser-compat: http.headers.Permissions-Policy.summarizer
sidebar: http
---

{{SeeCompatTable}}

The HTTP {{HTTPHeader("Permissions-Policy")}} header `summarizer` directive controls access to the [Summarizer API](/en-US/docs/Web/API/Summarizer_API).

Specifically, where a defined policy blocks Summarizer API usage, any attempts to call the API's methods will fail with a `NotAllowedError` {{domxref("DOMException")}}.

## Syntax

```http
Permissions-Policy: summarizer=<allowlist>;
```

- `<allowlist>`
  - : A list of origins for which permission is granted to use the feature. See [`Permissions-Policy` > Syntax](/en-US/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntax) for more details.

## Default policy

The default allowlist for `summarizer` is `self`.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Permissions-Policy")}} header
- [Permissions Policy](/en-US/docs/Web/HTTP/Guides/Permissions_Policy)
