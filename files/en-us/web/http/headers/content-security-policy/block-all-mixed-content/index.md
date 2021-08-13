---
title: 'CSP: block-all-mixed-content'
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Mixed Content
  - Reference
  - Security
  - block-all-mixed-content
browser-compat: http.headers.csp.Content-Security-Policy.block-all-mixed-content
---
{{HTTPSidebar}}{{deprecated_header}}

The HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** directive prevents loading any assets over HTTP when the page uses HTTPS.

All [mixed content](/en-US/docs/Web/Security/Mixed_content) resource requests are blocked, including both active and passive mixed content. This also applies to {{HTMLElement("iframe")}} documents, ensuring the entire page is mixed content-free.

> **Note:** The {{CSP("upgrade-insecure-requests")}} directive is evaluated before `block-all-mixed-content`. If the former is set, the latter does nothing, so set one directive or the other – not both, unless you want to force HTTPS on older browsers that do not force it after a redirect to HTTP.

## Syntax

```
Content-Security-Policy: block-all-mixed-content;
```

## Examples

```
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

To disallow http assets on a more granular level, you can also set individual directives to `https:`. For example, to disallow nonsecure HTTP images:

```
Content-Security-Policy: img-src https:
```

## Specifications

Not part of any current specification. Used to be defined in the outdated [Mixed Content Level 1](https://www.w3.org/TR/mixed-content/#block-all-mixed-content) specification.

## Browser compatibility

{{Compat}}

## See also

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
